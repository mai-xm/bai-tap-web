// Lắng nghe sự kiện 'onload' khi trang web tải xong (Yêu cầu bước 8)
window.onload = function() {
    initGallery();
};

// Hàm khởi tạo bộ sưu tập (Yêu cầu bước 9)
function initGallery() {
    // a. In thông báo ra console để kiểm tra sự kiện đã chạy đúng (Yêu cầu 9a)
    console.log("Trang web đã tải xong! Bắt đầu cấu hình thuộc tính tabindex cho ảnh.");

    // Lấy danh sách tất cả các thẻ <figure> trong trang
    let figures = document.getElementsByTagName("figure");

    // b. Viết một vòng lặp 'for' để duyệt qua từng hình ảnh (Yêu cầu 9b)
    for (let i = 0; i < figures.length; i++) {
        
        // c. Tự động thêm thuộc tính tabindex = 0 để có thể nhấn phím Tab (Yêu cầu 9c)
        figures[i].setAttribute("tabindex", "0");
        
        // Thêm một chút log để kiểm tra cho chắc chắn
        console.log(`Đã thêm tabindex cho hình thứ ${i + 1}`);
    }
}

// Hàm upDate xử lý khi di chuột vào HOẶC khi phím Tab focus vào ảnh (Yêu cầu bước 6 & 7)
function upDate(previewPic) {
    // Ví dụ: Thay đổi độ mờ hoặc ghi nhận ảnh đang được chọn
    console.log("Đang tương tác với ảnh: " + previewPic.querySelector('img').alt);
    previewPic.style.transform = "scale(1.05)";
    previewPic.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.3)";
}

// Hàm unDo xử lý khi chuột rời đi HOẶC khi nhấn Tab chuyển sang ảnh khác (Yêu cầu bước 6)
function unDo() {
    console.log("Rời khỏi ảnh.");
    let figures = document.getElementsByTagName("figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].style.transform = "scale(1)";
        figures[i].style.boxShadow = "none";
    }
}