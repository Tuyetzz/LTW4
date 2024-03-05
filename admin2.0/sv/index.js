function goBack() {
    window.location.href = "../admin.html";
}
class HocSinh {
    constructor(maSinhVien, hoTen, birthdate, khoa) {
        this.maSinhVien = maSinhVien;
        this.hoTen = hoTen;
        this.birthdate = birthdate;
        this.khoa = khoa;
    }
}
var danhSachHocSinh = [];


var hocSinh1 = new HocSinh("SV001", "Nguyễn Văn A", "01/01/2000", "Khoa A");
var hocSinh2 = new HocSinh("SV002", "Trần Thị B", "02/02/2001", "Khoa B");

danhSachHocSinh.push(hocSinh1);
danhSachHocSinh.push(hocSinh2);

for (var i = 0; i < danhSachHocSinh.length; i++) {
    themHocSinhVaoBang(danhSachHocSinh[i]);
}


document.getElementById("themHocSinh").addEventListener("click", function() {
    var maSinhVien = prompt("Nhập mã sinh viên:");
    var hoTen = prompt("Nhập họ và tên:");
    var birthdate = prompt("Nhập ngày sinh:");
    var khoa = prompt("Nhập khoa:");

    // Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
    if (maSinhVien === null || hoTen === null || birthdate === null || khoa === null) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // Tạo một đối tượng HocSinh mới với thông tin nhập vào
    var hocSinhMoi = new HocSinh(maSinhVien, hoTen, birthdate, khoa);

    // Thêm học sinh mới vào mảng danhSachHocSinh
    danhSachHocSinh.push(hocSinhMoi);

    // Thêm học sinh mới vào bảng
    themHocSinhVaoBang(hocSinhMoi);
});


function themHocSinhVaoBang(hocSinh) {
    var table = document.querySelector("table tbody");
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = hocSinh.maSinhVien;
    cell2.innerHTML = hocSinh.hoTen;
    cell3.innerHTML = hocSinh.birthdate;
    cell4.innerHTML = hocSinh.khoa;
}

document.getElementById("suaHocSinh").addEventListener("click", function() {
    var maSinhVien = prompt("Nhập mã sinh viên cần sửa:");

    // Kiểm tra xem người dùng đã nhập mã sinh viên hay chưa
    if (maSinhVien === null) {
        alert("Vui lòng nhập mã sinh viên.");
        return;
    }

    // Tìm học sinh trong mảng danhSachHocSinh và cập nhật thông tin
    var found = false;
    for (var i = 0; i < danhSachHocSinh.length; i++) {
        if (danhSachHocSinh[i].maSinhVien === maSinhVien) {
            found = true;
            var hoTenMoi = prompt("Nhập họ và tên mới:");
            var birthdateMoi = prompt("Nhập ngày sinh mới:");
            var khoaMoi = prompt("Nhập khoa mới:");

            // Kiểm tra xem người dùng đã nhập đủ thông tin mới hay chưa
            if (hoTenMoi === null || birthdateMoi === null || khoaMoi === null) {
                alert("Vui lòng nhập đầy đủ thông tin.");
                return;
            }

            // Cập nhật thông tin cho học sinh
            danhSachHocSinh[i].hoTen = hoTenMoi;
            danhSachHocSinh[i].birthdate = birthdateMoi;
            danhSachHocSinh[i].khoa = khoaMoi;
            alert("Đã cập nhật thông tin cho sinh viên có mã " + maSinhVien);
            capNhatBang(); // Cập nhật lại bảng
            break;
        }
    }

    // Nếu không tìm thấy mã sinh viên trong mảng danhSachHocSinh, hiển thị thông báo lỗi
    if (!found) {
        alert("Không tìm thấy sinh viên có mã " + maSinhVien);
    }
});

// Hàm cập nhật lại bảng sau khi thay đổi thông tin
function capNhatBang() {
    var table = document.querySelector("table tbody");
    table.innerHTML = ""; // Xóa hết nội dung cũ của bảng

    // Duyệt qua mảng danhSachHocSinh và thêm lại thông tin vào bảng
    for (var i = 0; i < danhSachHocSinh.length; i++) {
        themHocSinhVaoBang(danhSachHocSinh[i]);
    }
}

// Xử lý sự kiện khi nút "Xóa học sinh" được click
document.getElementById("xoaHocSinh").addEventListener("click", function() {
    var maSinhVien = prompt("Nhập mã sinh viên cần xóa:");

    // Kiểm tra xem người dùng đã nhập mã sinh viên hay chưa
    if (maSinhVien === null) {
        alert("Vui lòng nhập mã sinh viên.");
        return;
    }

    // Tìm hàng trong bảng có mã sinh viên tương ứng và xóa hàng đó
    var table = document.querySelector("table tbody");
    var rows = table.getElementsByTagName("tr");
    var found = false;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        if (cells.length > 0 && cells[0].innerText === maSinhVien) {
            found = true;
            table.deleteRow(i); // Xóa hàng
            alert("Đã xóa sinh viên có mã " + maSinhVien);
            break;
        }
    }

    // Nếu không tìm thấy mã sinh viên trong bảng, hiển thị thông báo lỗi
    if (!found) {
        alert("Không tìm thấy sinh viên có mã " + maSinhVien);
    }
});
