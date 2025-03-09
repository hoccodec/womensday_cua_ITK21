function checkPassword(imageSrc, correctPassword, button) {
    const password = prompt("Nhập mật khẩu để xem hình:");

    if (password === correctPassword) {
        alert("Mật khẩu đúng! Bạn có thể xem hình.");
        showImage(button.parentElement.querySelector('img'), imageSrc); // Hiển thị hình ảnh
    } else {
        alert("Mật khẩu sai! Vui lòng thử lại.");
    }
}

function showImage(imgElement, src) {
    imgElement.classList.remove('blurred'); // Xóa lớp làm mờ
    showFullscreenImage(src); // Hiển thị hình ảnh toàn màn hình
}

function showFullscreenImage(src) {
    const fullscreenImage = document.getElementById('fullscreenImage');
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = src; // Lấy src của hình ảnh
    fullscreenImage.style.display = 'flex'; // Hiển thị hình ảnh toàn màn hình
}

function hideFullscreen() {
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.style.display = 'none'; // Ẩn hình ảnh toàn màn hình
}
