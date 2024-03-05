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

function toAdminPage()
{
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    const invalidUsername = document.getElementById("invalidUsername");
    const invalidPassword = document.getElementById("invalidPassword");

    let dk1 = isValidUsername(username);
    let dk2 = isValidPassword(password);

    if(!dk1) invalidUsername.innerText = 'Tên đăng nhập phải có ít nhất 5 ký tự, chỉ chấp nhận chữ cái và số.';
    else invalidUsername.innerText = '';
    if(!dk2) invalidPassword.innerText = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái và số.';
    else invalidPassword.innerText = '';

    if(dk1 && dk2)
    {
        if(username === "admin123" && password === "1234abcd") window.location.href = '../admin2.0/admin.html';
        else invalidPassword.innerText = "Tên đăng nhập hoặc mật khẩu không đúng.";
    }
}
