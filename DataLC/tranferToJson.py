import pandas as pd
import json

# Đường dẫn file Excel
file_path = r"E:\\WebDev\\LacCanh\\output.xlsx"

# Đọc file Excel
data = pd.read_excel(file_path)

# Chuyển đổi dữ liệu
result = []
for _, row in data.iterrows():
    item = {
        "chucvu": row.get("chucvu", ""),
        "donvi": row.get("donvi", ""),
        "hang": row.get("hang", 0),
        "hovaten": row.get("hovaten", ""),
        "lo": row.get("lo", 0),
        "mahoso": row.get("mahoso", 0),  # Tạo mã hồ sơ tự động
        "mo": row.get("mo", 0),
        "nammat": row.get("nammat", 0),
        "namsinh": row.get("namsinh", 0),
        "quequan": row.get("quequan", 0),
        "tieusu":"",
    }
    result.append(item)

# Xuất ra file JSON
output_file = "LacCanh.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f"Đã tạo JSON thành công tại {output_file}")
