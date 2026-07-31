#!/usr/bin/env python3
import os, sys, glob, json, struct

def parse_fit_file(fit_path):
    if not os.path.exists(fit_path):
        return {"success": False, "error": f"Datei {fit_path} nicht gefunden."}
        
    with open(fit_path, 'rb') as f:
        data = f.read()
    
    if len(data) < 14:
        return {"success": False, "error": "Ungültige FIT Datei."}
    
    header_size = data[0]
    data_size = struct.unpack('<I', data[4:8])[0]
    magic = data[8:12]
    if magic != b'.FIT':
        return {"success": False, "error": "Keine gültige Garmin .FIT Datei."}

    pos = header_size
    end_pos = min(header_size + data_size, len(data))
    
    defs = {}
    session_data = {}
    
    while pos < end_pos:
        header_byte = data[pos]
        pos += 1
        
        is_compressed = (header_byte & 0x80) != 0
        if is_compressed:
            local_msg_type = (header_byte >> 5) & 0x03
            if local_msg_type in defs:
                pos += defs[local_msg_type]['size']
            continue
            
        is_def = (header_byte & 0x40) != 0
        local_msg_type = header_byte & 0x0F
        
        if is_def:
            if pos + 5 > end_pos: break
            reserved = data[pos]
            arch = data[pos+1]
            global_msg_num = struct.unpack('<H' if arch == 0 else '>H', data[pos+2:pos+4])[0]
            num_fields = data[pos+4]
            pos += 5
            
            fields = []
            total_size = 0
            for _ in range(num_fields):
                if pos + 3 > end_pos: break
                f_num = data[pos]
                f_size = data[pos+1]
                f_type = data[pos+2]
                fields.append((f_num, f_size, f_type))
                total_size += f_size
                pos += 3
                
            defs[local_msg_type] = {
                'global_msg': global_msg_num,
                'endian': '<' if arch == 0 else '>',
                'fields': fields,
                'size': total_size
            }
        else:
            if local_msg_type not in defs:
                break
            ddef = defs[local_msg_type]
            endian = ddef['endian']
            
            field_values = {}
            for f_num, f_size, f_type in ddef['fields']:
                if pos + f_size > end_pos: break
                val_bytes = data[pos:pos+f_size]
                pos += f_size
                
                val = None
                if f_size == 1:
                    val = val_bytes[0]
                elif f_size == 2 and len(val_bytes) == 2:
                    val = struct.unpack(f'{endian}H', val_bytes)[0]
                elif f_size == 4 and len(val_bytes) == 4:
                    val = struct.unpack(f'{endian}I', val_bytes)[0]
                elif f_size == 4 and len(val_bytes) == 4 and f_type == 136: # float
                    val = struct.unpack(f'{endian}f', val_bytes)[0]
                    
                field_values[f_num] = val
                
            # Check if Session message (Global Msg 18)
            if ddef['global_msg'] == 18:
                if 11 in field_values and field_values[11] is not None:
                    session_data['dist_m'] = field_values[11] / 100.0
                if 10 in field_values and field_values[10] is not None:
                    session_data['timer_s'] = field_values[10] / 1000.0
                if 9 in field_values and field_values[9] is not None and 'timer_s' not in session_data:
                    session_data['timer_s'] = field_values[9] / 1000.0
                if 16 in field_values and field_values[16] is not None:
                    session_data['ascent_m'] = field_values[16]
                if 20 in field_values and field_values[20] is not None:
                    session_data['avg_hr'] = field_values[20]

    dist_m = session_data.get('dist_m', 0)
    dist_km = round(dist_m / 1000.0, 2)
    ascent = int(session_data.get('ascent_m', 0))
    timer_s = int(session_data.get('timer_s', 0))
    avg_hr = int(session_data.get('avg_hr', 0))

    hrs = timer_s // 3600
    mins = (timer_s % 3600) // 60
    secs = timer_s % 60
    dur_str = f"{hrs:02d}:{mins:02d}:{secs:02d}"

    if dist_km > 0 and timer_s > 0:
        pace_s = timer_s / dist_km
        p_min = int(pace_s // 60)
        p_sec = int(pace_s % 60)
        pace_str = f"{p_min}:{p_sec:02d}"
    else:
        pace_str = "-:--"

    return {
        "success": True,
        "file": os.path.basename(fit_path),
        "dist": dist_km,
        "hm": ascent,
        "duration": dur_str,
        "hr": avg_hr,
        "pace": pace_str,
        "notes": f"Import aus Garmin Datei {os.path.basename(fit_path)}"
    }

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target = sys.argv[1]
    else:
        target = "/Volumes/GARMIN/GARMIN/ACTIVITY"
        
    if os.path.isdir(target):
        files = glob.glob(os.path.join(target, "*.FIT")) + glob.glob(os.path.join(target, "*.fit"))
        if files:
            files.sort(key=os.path.getmtime, reverse=True)
            target = files[0]
        else:
            print(json.dumps({"success": False, "error": "Keine .FIT Datei im Ordner."}))
            sys.exit(0)

    res = parse_fit_file(target)
    print(json.dumps(res, indent=2))
