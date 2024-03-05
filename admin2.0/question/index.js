function goBack() {
    window.location.href = "../admin.html";
}

class CauHoi {
    constructor(stt, cauHoi, dapAnA, dapAnB, dapAnC, dapAnD, dapAnDung) {
        this.stt = stt;
        this.cauHoi = cauHoi;
        this.dapAnA = dapAnA;
        this.dapAnB = dapAnB;
        this.dapAnC = dapAnC;
        this.dapAnD = dapAnD;
        this.dapAnDung = dapAnDung.toUpperCase(); // Chuyển đáp án đúng về chữ hoa để đồng bộ hóa
    }
}

var danhSachCauHoi = [];
var soThuTu = 3; 

var cauHoi1 = new CauHoi(1, "Con cá có màu gì?", "Xanh", "Đỏ", "Tím", "Vàng", "A");
var cauHoi2 = new CauHoi(2, "Mặt trăng có mặt gì?", "Hình tròn", "Hình vuông", "Hình tam giác", "Không có gì cả", "D");

danhSachCauHoi.push(cauHoi1);
danhSachCauHoi.push(cauHoi2);

danhSachCauHoi.forEach(function(cauHoi) {
    hienThiCauHoi(cauHoi);
});


document.getElementById("themCauHoi").addEventListener("click", function() {
    var cauHoi = prompt("Nhập nội dung câu hỏi:");
    var dapAnA = prompt("Nhập đáp án A:");
    var dapAnB = prompt("Nhập đáp án B:");
    var dapAnC = prompt("Nhập đáp án C:");
    var dapAnD = prompt("Nhập đáp án D:");
    var dapAnDung = prompt("Nhập đáp án đúng (A, B, C hoặc D):");

    // Kiểm tra nếu người dùng không nhập đầy đủ thông tin thì không thêm câu hỏi
    if (cauHoi === null || cauHoi.trim() === "" ||
        dapAnA === null || dapAnA.trim() === "" ||
        dapAnB === null || dapAnB.trim() === "" ||
        dapAnC === null || dapAnC.trim() === "" ||
        dapAnD === null || dapAnD.trim() === "" ||
        dapAnDung === null || dapAnDung.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin cho câu hỏi.");
        return;
    }

    // Tạo một đối tượng CauHoi mới với thông tin nhập vào
    var cauHoiMoi = new CauHoi(soThuTu++, cauHoi, dapAnA, dapAnB, dapAnC, dapAnD, dapAnDung);

    // Thêm câu hỏi mới vào mảng
    danhSachCauHoi.push(cauHoiMoi);

    // Hiển thị câu hỏi vừa thêm vào bảng
    hienThiCauHoi(cauHoiMoi);
});

function hienThiCauHoi(cauHoi) {
    var table = document.querySelector("table tbody");
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = cauHoi.stt;
    cell2.innerHTML = cauHoi.cauHoi;
    cell3.innerHTML = cauHoi.dapAnA;
    cell4.innerHTML = cauHoi.dapAnB;
    cell5.innerHTML = cauHoi.dapAnC;
    cell6.innerHTML = cauHoi.dapAnD;
    cell7.innerHTML = cauHoi.dapAnDung;
}

document.getElementById("suaCauHoi").addEventListener("click", function() {
    var stt = parseInt(prompt("Nhập số thứ tự của câu hỏi bạn muốn sửa:"));

    // Tìm câu hỏi trong danh sách theo số thứ tự
    var cauHoiCanSua = danhSachCauHoi.find(function(cauHoi) {
        return cauHoi.stt === stt;
    });

    if (cauHoiCanSua) {
        // Hiển thị thông tin câu hỏi cần sửa
        var cauHoi = prompt("Nhập nội dung câu hỏi mới:", cauHoiCanSua.cauHoi);
        var dapAnA = prompt("Nhập đáp án A mới:", cauHoiCanSua.dapAnA);
        var dapAnB = prompt("Nhập đáp án B mới:", cauHoiCanSua.dapAnB);
        var dapAnC = prompt("Nhập đáp án C mới:", cauHoiCanSua.dapAnC);
        var dapAnD = prompt("Nhập đáp án D mới:", cauHoiCanSua.dapAnD);
        var dapAnDung = prompt("Nhập đáp án đúng mới (A, B, C hoặc D):", cauHoiCanSua.dapAnDung);

        // Cập nhật thông tin câu hỏi
        cauHoiCanSua.cauHoi = cauHoi;
        cauHoiCanSua.dapAnA = dapAnA;
        cauHoiCanSua.dapAnB = dapAnB;
        cauHoiCanSua.dapAnC = dapAnC;
        cauHoiCanSua.dapAnD = dapAnD;
        cauHoiCanSua.dapAnDung = dapAnDung.toUpperCase();

        // Cập nhật lại nội dung trong bảng
        var table = document.querySelector("table tbody");
        table.innerHTML = ""; // Xóa nội dung trong tbody
        danhSachCauHoi.forEach(function(cauHoi) {
            hienThiCauHoi(cauHoi); // Hiển thị lại các câu hỏi trong bảng
        });
    } else {
        alert("Không tìm thấy câu hỏi có số thứ tự " + stt);
    }
});

document.getElementById("xoaCauHoi").addEventListener("click", function() {
    var stt = parseInt(prompt("Nhập số thứ tự của câu hỏi bạn muốn xóa:"));

    // Tìm vị trí của câu hỏi trong danh sách theo số thứ tự
    var index = danhSachCauHoi.findIndex(function(cauHoi) {
        return cauHoi.stt === stt;
    });

    if (index !== -1) {
        // Xóa câu hỏi khỏi mảng
        danhSachCauHoi.splice(index, 1);

        // Cập nhật lại nội dung trong bảng
        var table = document.querySelector("table tbody");
        table.innerHTML = ""; // Xóa nội dung trong tbody
        danhSachCauHoi.forEach(function(cauHoi) {
            hienThiCauHoi(cauHoi); // Hiển thị lại các câu hỏi trong bảng
        });
    } else {
        alert("Không tìm thấy câu hỏi có số thứ tự " + stt);
    }
});
