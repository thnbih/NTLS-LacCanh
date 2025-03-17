import pandas as pd

def fill_missing_values(file_path, sheet_name=0):
    # Đọc file Excel với tất cả dữ liệu dưới dạng chuỗi
    df = pd.read_excel(file_path, sheet_name=sheet_name, dtype=str)
    
    # Danh sách các cột cần kiểm tra
    columns_to_check = [
        "mahoso", "hovaten", "namsinh", "quequan", "nammat",
        "hang", "mo", "lo", "chucvu", "donvi"
    ]
    
    # Chỉ điền "Chưa rõ" vào các cột nằm trong danh sách trên nếu có trong DataFrame
    for col in columns_to_check:
        if col in df.columns:
            df[col] = df[col].fillna("Chưa rõ")
    # Chuyển đổi cột 'nammat' để loại bỏ giờ nếu tồn tại
    if "nammat" in df.columns:
        df["nammat"] = pd.to_datetime(df["nammat"], errors='coerce').dt.date.astype(str).fillna("Chưa rõ")
        
    # Chuyển tất cả dữ liệu trong cột 'nammat' sang dạng chuỗi
    if "nammat" in df.columns:
        df["nammat"] = df["nammat"].astype(str)
    
    # Ghi đè lại file Excel
    df.to_excel("output.xlsx", index=False)
    print("Đã xử lý xong! Kết quả lưu vào output.xlsx")

# Sử dụng
fill_missing_values("Data.xlsx")
