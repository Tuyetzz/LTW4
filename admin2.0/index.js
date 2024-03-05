class KyThi {
    constructor(id, tenKyThi, monHoc, thoiGian) {
        this.id = id;
        this.tenKyThi = tenKyThi;
        this.monHoc = monHoc;
        this.thoiGian = thoiGian;
    }
}

function toAdminLoginPage()
{
    window.location.href = "../adminLoginPage/adminLoginPage.html";
}

function tostdResultListPage()
{
    window.location.href = "stdResultListPage/stdResultListPage.html";
}

var danhSachKyThi = []; // Khởi tạo mảng để chứa các đối tượng KyThi
var nextId = 3; // Biến để theo dõi số id tăng dần

// Tạo dữ liệu các kỳ thi
var kyThi1 = new KyThi(1, "Giữa kỳ", "Toán", "1/1/2023");
var kyThi2 = new KyThi(2, "Cuối kỳ", "Lý", "2/2/2023");

// Đẩy dữ liệu vào mảng danhSachKyThi
danhSachKyThi.push(kyThi1);
danhSachKyThi.push(kyThi2);

// Hiển thị dữ liệu trên bảng
var table = document.querySelector("table tbody");

// Lặp qua mảng danhSachKyThi để tạo hàng cho mỗi kỳ thi
danhSachKyThi.forEach(function(kyThi) {
    var newRow = table.insertRow();

    newRow.id = "row_" + kyThi.id;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = kyThi.id; // Số thứ tự (id)
    cell2.innerHTML = kyThi.tenKyThi;
    cell3.innerHTML = kyThi.monHoc;
    cell4.innerHTML = kyThi.thoiGian;
    cell5.innerHTML = '<button onclick="viewExam(' + kyThi.id + ')" id="viewBtn_' + kyThi.id + '">Xem</button>';
    cell6.innerHTML = '<button onclick="editExam(' + kyThi.id + ')" id="editBtn_' + kyThi.id + '">Chỉnh sửa</button>';
    cell7.innerHTML = '<button onclick="deleteExam(' + kyThi.id + ')" id="deleteBtn_' + kyThi.id + '">Xóa</button>';
});

document.getElementById("createEx").addEventListener("click", function() {
    var tenKyThi = prompt("Nhập tên kỳ thi:");
    if (tenKyThi === null || tenKyThi === "") {
        alert("Vui lòng nhập tên kỳ thi.");
        return;
    }

    var monHoc = prompt("Nhập môn học:");
    if (monHoc === null || monHoc === "") {
        alert("Vui lòng nhập môn học.");
        return;
    }

    var thoiGian = prompt("Nhập thời gian:");
    if (thoiGian === null || thoiGian === "") {
        alert("Vui lòng nhập thời gian.");
        return;
    }

    // Tạo một đối tượng KyThi mới với id và thêm vào mảng danhSachKyThi
    var kyThiMoi = new KyThi(nextId, tenKyThi, monHoc, thoiGian);
    danhSachKyThi.push(kyThiMoi);

    // Thêm thông tin vào bảng
    var table = document.querySelector("table tbody");
    var newRow = table.insertRow();

    newRow.id = "row_" + kyThiMoi.id;

    // Thêm dữ liệu vào các ô
    newRow.innerHTML = `
        <td>${kyThiMoi.id}</td>
        <td>${kyThiMoi.tenKyThi}</td>
        <td>${kyThiMoi.monHoc}</td>
        <td>${kyThiMoi.thoiGian}</td>
        <td><button onclick="viewExam(${kyThiMoi.id})">Xem</button></td>
        <td><button onclick="editExam(${kyThiMoi.id})">Sửa</button></td>
        <td><button onclick="deleteExam(${kyThiMoi.id})">Xóa</button></td>
    `;

    // Tăng biến nextId để sử dụng cho kỳ thi tiếp theo
    nextId++;
});



function viewExam(id) {
    // Xây dựng URL tới trang question/question.html với tham số là id của kỳ thi
    var url = "question/question.html?id=" + id;
    
    // Chuyển hướng trình duyệt đến trang mới
    window.location.href = url;
}


function editExam(id) {
    var index = danhSachKyThi.findIndex(item => item.id === id);
    if (index !== -1) {
        var tenKyThi = prompt("Nhập tên kỳ thi:");
        if (tenKyThi === null || tenKyThi === "") {
            alert("Vui lòng nhập tên kỳ thi.");
            return;
        }
    
        var monHoc = prompt("Nhập môn học:");
        if (monHoc === null || monHoc === "") {
            alert("Vui lòng nhập môn học.");
            return;
        }
    
        var thoiGian = prompt("Nhập thời gian:");
        if (thoiGian === null || thoiGian === "") {
            alert("Vui lòng nhập thời gian.");
            return;
        }

        danhSachKyThi[index].tenKyThi = tenKyThi;
        danhSachKyThi[index].monHoc = monHoc;
        danhSachKyThi[index].thoiGian = thoiGian;

        // Cập nhật thông tin trong bảng
        var row = document.getElementById("row_" + id);
        if (row) {
            row.cells[1].textContent = tenKyThi;
            row.cells[2].textContent = monHoc;
            row.cells[3].textContent = thoiGian;
        }
    }
}


function deleteExam(id) {
    if (confirm("Bạn có chắc chắn muốn xóa kỳ thi này không?")) {
        var index = danhSachKyThi.findIndex(item => item.id === id);
        if (index !== -1) {
            danhSachKyThi.splice(index, 1); // Xóa kỳ thi khỏi mảng

            // Xóa hàng từ bảng
            var row = document.getElementById("row_" + id);
            if (row) {
                row.remove();
            }
        }
    }
}



// Sử dụng sự kiện click cho nút lưu CSV
document.getElementById("saveCSVEx").addEventListener("click", function() {
    saveCSV();
});

function saveCSV() {
    
}

document.getElementById("svBtn").onclick = function() {
    window.location.href = "sv/svAdmin.html";
};
document.getElementById("tkBtn").addEventListener("click", function() {
    window.location.href = "tk/thongKe.html";
});
