function toLoginPage()
{
    window.location.href = '../index.html';
}



function isValidUsername(username) {
    // Điều kiện: ít nhất 5 ký tự, chỉ chấp nhận chữ cái và số
    const regex = /^[a-zA-Z0-9]{5,}$/;
    return regex.test(username);
}


function isValidPassword(password) {
    // Điều kiện: ít nhất 8 ký tự, bao gồm chữ cái và số
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}


function isValidEmail(email) {
    // Sử dụng một biểu thức chính quy đơn giản để kiểm tra định dạng email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Hàm kiểm tra sự khớp giữa password và confirmedPassword
function passwordsMatch(password, confirmedPassword) {
    return password === confirmedPassword;
}

function register() {
    const username = document.getElementById("usernameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const confirmedPassword = document.getElementById("confirmedPasswordInput").value;

    const invalidUsername = document.getElementById("invalidUsername");
    const invalidEmail = document.getElementById("invalidEmail");
    const invalidPassword = document.getElementById("invalidPassword");
    const notMatchedPassword = document.getElementById("notMatchedPassword");
    // Kiểm tra tính hợp lệ và hiển thị thông báo
    let dk1 = isValidUsername(username);
    let dk2 = isValidEmail(email);
    let dk3 = isValidPassword(password);
    let dk4 = passwordsMatch(password, confirmedPassword);
    if (!dk1) {
        invalidUsername.innerText = 'Tên người dùng phải có ít nhất 5 ký tự, chỉ chấp nhận chữ cái và số.';
    }
    else invalidUsername.innerText = '';

    if (!dk2) {
        invalidEmail.innerText = 'Không đúng định dạng email.';
    }
    else invalidEmail.innerText = '';

    if (!dk3) {
        
        invalidPassword.innerText = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái và số.';
    }
    else invalidPassword.innerText = '';

    if (!dk4) {
        
        notMatchedPassword.innerText = 'Mật khẩu xác nhận không trùng khớp.'
    }
    else notMatchedPassword.innerText = '';

    // Nếu tất cả là hợp lệ, tiếp tục xử lý đăng ký
    // ...

    // Hiển thị thông báo thành công nếu cần
    if(dk1 && dk2 && dk3 && dk4) window.alert("Đăng ký thành công! Thông tin đăng ký của bạn đang chờ được phê duyệt.");
}


