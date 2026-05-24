# shopDemo — Ecommerce Management System

shopDemo là hệ thống quản lý thương mại điện tử được phát triển phục vụ bài kiểm tra kỹ thuật, tích hợp đầy đủ quy trình từ quản lý sản phẩm (Admin) đến trải nghiệm mua sắm (User).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java 17, Spring Boot 3.x, Spring Data JPA |
| Database | H2 In-Memory — tự động khởi tạo dữ liệu mẫu |
| Frontend | HTML5, CSS3, Vanilla JavaScript (Server-side Rendering) |
| Containerization | Docker |
| Validation | Bean Validation (JSR 380) + Global Exception Handling |

---

## Hướng dẫn chạy dự án

### Option 1: Docker (Khuyên dùng)

```bash
# Bước 1 — Build artifact
mvn clean package -DskipTests

# Bước 2 — Build Docker image
docker compose up --build   
```

### Option 2: Chạy trực tiếp (yêu cầu Java 17 + Gradle)

```bash
 ./gradlew bootRun 
```

Sau khi khởi động, ứng dụng chạy tại: **http://localhost:8080**

---

## Endpoints

| Mô tả | URL |
|---|---|
| Cửa hàng (User) | http://localhost:8080/ |
| Quản trị (Admin) | http://localhost:8080/admin-products.html |
| H2 Console | http://localhost:8080/h2-console |

**H2 Console credentials:**
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: _(để trống)_

---

## Tính năng nổi bật

- **Global Exception Handling** — Mọi lỗi hệ thống và validation đều trả về chuẩn JSON thống nhất, giúp Frontend xử lý và hiển thị thông báo chính xác.
- **Modular Static Assets** — Các file JavaScript xử lý API được tách riêng trong `static/utils`, dễ bảo trì và tái sử dụng.
- **Responsive UI** — Giao diện tương thích tốt trên nhiều kích thước màn hình.