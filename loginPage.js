function toSignupPage()
{
    window.location.href = 'signupPage/signupPage.html';
}

function toAdminLogin()
{
    window.location.href = 'adminLoginPage/adminLoginPage.html';
}


function toMainPage()
{
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
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
        if(username === "abc123" && password === "1234abcd") window.location.href = 'mainPage/mainPage.html';
        else invalidPassword.innerText = "Tên đăng nhập hoặc mật khẩu không đúng.";
    }
}

function toRetrPassFrame()
{
    document.getElementById("loginFrame").classList.remove("active");
    document.getElementById("retrPassFrame").classList.add("active");
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


