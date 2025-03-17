# Đọc file SVG
with open("input.svg", "r", encoding="utf-8") as file:
    svg_content = file.read()

# Loại bỏ xuống dòng và khoảng trắng không cần thiết
cleaned_content = " ".join(svg_content.split())

# Lưu lại nội dung vào file mới hoặc in ra
with open("output.svg", "w", encoding="utf-8") as file:
    file.write(cleaned_content)

print("Done! SVG đã được gộp thành 1 dòng.")
