function goBack() {
    window.location.href = "../admin.html";
}

class SinhVien {
    constructor(kiThi, thoiGian, soLanThamGia, tyLeHoanThanh, diemTrungBinh, phanPhoiDiem) {
        this.kiThi = kiThi;
        this.thoiGian = thoiGian;
        this.soLanThamGia = soLanThamGia;
        this.tyLeHoanThanh = tyLeHoanThanh;
        this.diemTrungBinh = diemTrungBinh;
        this.phanPhoiDiem = phanPhoiDiem;
    }
}

// Tạo dữ liệu sinh viên
const danhSachSinhVien = [
    new SinhVien("Giữa kì", "01/01/2023", 5, "80%", 7.5, [8, 7, 8, 7.5, 9]),
    new SinhVien("Cuối kì", "02/02/2023", 4, "70%", 6.8, [7, 6, 8, 7]),
    new SinhVien("Giữa kì", "01/01/2023", 6, "90%", 8.2, [9, 8, 8.5, 7.5, 9, 8]),
    new SinhVien("Cuối kì", "02/02/2023", 3, "60%", 6.0, [6, 5.5, 6.5])
];

// Điền dữ liệu sinh viên vào bảng
const tableBody = document.querySelector("#studentTable tbody");

danhSachSinhVien.forEach(sinhVien => {
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);


    cell1.textContent = sinhVien.kiThi;
    cell2.textContent = sinhVien.thoiGian;
    cell3.textContent = sinhVien.soLanThamGia;
    cell4.textContent = sinhVien.tyLeHoanThanh;
    cell5.textContent = sinhVien.diemTrungBinh;
    cell6.textContent = sinhVien.phanPhoiDiem.join(", ");
});
//hien thi toan bo bang
document.getElementById("toanbobang").addEventListener("click", function() {
    // Xóa hết dữ liệu trên bảng
    clearTable();

    // Hiển thị toàn bộ bảng ban đầu
    danhSachSinhVien.forEach(sinhVien => {
        addSinhVienToTable(sinhVien);
    });
});

// Hàm xóa hết dữ liệu trên bảng
function clearTable() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = '';
}

// Hàm thêm sinh viên vào bảng
function addSinhVienToTable(sinhVien) {
    const tableBody = document.querySelector("#studentTable tbody");
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.textContent = sinhVien.kiThi;
    cell2.textContent = sinhVien.thoiGian;
    cell3.textContent = sinhVien.soLanThamGia;
    cell4.textContent = sinhVien.tyLeHoanThanh;
    cell5.textContent = sinhVien.diemTrungBinh;
    cell6.textContent = sinhVien.phanPhoiDiem.join(", ");
}

//loc theo so lan tham gia
document.getElementById("locTheoSolan").addEventListener("click", function() {
    // Nhập số lần tham gia từ người dùng bằng prompt cho giá trị dưới và giá trị trên khoảng
    var soLanThamGiaTren = prompt("Nhập số lần tham gia trên:");
    var soLanThamGiaDuoi = prompt("Nhập số lần tham gia dưới:");
    
    // Kiểm tra nếu người dùng không nhập hoặc nhập không hợp lệ
    if (soLanThamGiaDuoi === null || isNaN(soLanThamGiaDuoi) || soLanThamGiaTren === null || isNaN(soLanThamGiaTren)) {
        alert("Vui lòng nhập các số hợp lệ.");
        return;
    }

    // Chuyển đổi giá trị nhập từ prompt thành số
    soLanThamGiaDuoi = parseInt(soLanThamGiaDuoi);
    soLanThamGiaTren = parseInt(soLanThamGiaTren);

    // Xóa hết dữ liệu trên bảng
    clearTable();

    // Lọc và hiển thị các sinh viên có số lần tham gia nằm trong khoảng giữa hai giá trị nhập từ người dùng
    danhSachSinhVien.forEach(sinhVien => {
        if (sinhVien.soLanThamGia >= soLanThamGiaTren && sinhVien.soLanThamGia <= soLanThamGiaDuoi) {
            addSinhVienToTable(sinhVien);
        }
    });
});


// Hàm xóa hết dữ liệu trên bảng
function clearTable() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = '';
}

// Hàm thêm sinh viên vào bảng
function addSinhVienToTable(sinhVien) {
    const tableBody = document.querySelector("#studentTable tbody");
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.textContent = sinhVien.kiThi;
    cell2.textContent = sinhVien.thoiGian;
    cell3.textContent = sinhVien.soLanThamGia;
    cell4.textContent = sinhVien.tyLeHoanThanh;
    cell5.textContent = sinhVien.diemTrungBinh;
    cell6.textContent = sinhVien.phanPhoiDiem.join(", ");
}

//loc theo ti le hoan thanh
document.getElementById("locTheoTile").addEventListener("click", function() {
    // Yêu cầu người dùng nhập hai giới hạn cho tỷ lệ hoàn thành
    var lowerLimitInput = prompt("Nhập tỷ lệ hoàn thành(Lớn hơn):");
    var upperLimitInput = prompt("Nhập tỷ lệ hoàn thành(Bé hơn):");

    // Kiểm tra xem người dùng đã nhập hai giới hạn hay chưa
    if (lowerLimitInput === null || upperLimitInput === null) {
        return; // Nếu không nhập, thoát khỏi hàm
    }

    // Chuyển đổi giới hạn nhập vào thành số
    var lowerLimit = parseFloat(lowerLimitInput);
    var upperLimit = parseFloat(upperLimitInput);

    // Kiểm tra xem giới hạn nhập vào có hợp lệ không
    if (isNaN(lowerLimit) || isNaN(upperLimit) || lowerLimit < 0 || lowerLimit > 100 || upperLimit < 0 || upperLimit > 100 || lowerLimit >= upperLimit) {
        alert("Vui lòng nhập giới hạn hợp lệ (từ 0 đến 100 và giới hạn dưới phải nhỏ hơn giới hạn trên).");
        return; // Nếu không hợp lệ, thoát khỏi hàm
    }

    // Xóa hết dữ liệu trên bảng
    clearTable();

    // Lọc và hiển thị sinh viên có tỷ lệ hoàn thành trong khoảng giữa hai giới hạn mà người dùng đã nhập
    danhSachSinhVien.forEach(sinhVien => {
        var tyLeHoanThanh = parseFloat(sinhVien.tyLeHoanThanh);
        if (tyLeHoanThanh >= lowerLimit && tyLeHoanThanh <= upperLimit) {
            addSinhVienToTable(sinhVien);
        }
    });
});


//loc theo ky thi
document.getElementById("locTheoKithi").addEventListener("click", function() {
    // Yêu cầu người dùng nhập kì thi mong muốn
    var kiThiInput = prompt("Nhập kì thi mong muốn:");

    // Kiểm tra xem người dùng đã nhập kì thi hay chưa
    if (kiThiInput === null) {
        return; // Nếu không nhập, thoát khỏi hàm
    }

    // Xóa hết dữ liệu trên bảng
    clearTable();

    // Lọc và hiển thị sinh viên tham gia vào kì thi mà người dùng đã nhập
    danhSachSinhVien.forEach(sinhVien => {
        if (sinhVien.kiThi.toLowerCase() === kiThiInput.toLowerCase()) {
            addSinhVienToTable(sinhVien);
        }
    });
});
