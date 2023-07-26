// Register
function getDataRegister() {
  const usernameRegister = document.getElementById("username").value;
  const emailRegister = document.getElementById("email").value;
  const passwordRegister = document.getElementById("password").value;
  const confirmpasswordRegister =
    document.getElementById("confirmpassword").value;
  const accounts = {
    username: usernameRegister,
    email: emailRegister,
    password: passwordRegister,
    confirmpassword: confirmpasswordRegister,
    role: "user",
    isActive: true,
  };
  return accounts;
}
getDataRegister();
function getDataLocal() {
  const accToLocal = JSON.parse(localStorage.getItem("listUser"));
  return accToLocal ?? [];
}
function register() {
  const userRegister = getDataRegister();
  const accountDB = getDataLocal();
  for (let i = 0; i < accountDB.length; i++) {
    if (userRegister.email === accountDB[i].email) {
      alert("Email already exists, please try again");
      return;
    }
  }
  if (userRegister.password !== userRegister.confirmpassword) {
    alert("Password does not match");
    return;
  }
  alert("Sign Up Success!");
  accountDB.push(userRegister);
  localStorage.setItem("listUser", JSON.stringify(accountDB));
  window.location.reload();
}
checkRegister();
function checkRegister() {
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmpassword.value === ""
  ) {
    $(".require-login").css("display", "block");
  } else {
    $(".require-login").css("display", "none");
    register();
  }
}

// Login
const loginArr = [];
function saveLogin() {
  localStorage.setItem("signup", JSON.stringify(loginArr));
}
function getLoginLocal() {
  const loginArr = JSON.parse(localStorage.getItem("signup"));
  return loginArr ?? [];
}
saveLogin();
function checkLogin() {
  if (email.value === "" || password.value === "") {
    $(".require-login").css("display", "block");
  } else {
    $(".require-login").css("display", "none");
    logIn();
  }
}
function logIn() {
  let isAdmin = false;
  let isLogin = false;
  const userLogin = getDataLogin();
  const account = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < account.length; i++) {
    if (
      userLogin.email === account[i].email &&
      userLogin.password === account[i].password
    ) {
      console.log(account[i]);
      if (account[i]?.role == "admin") {
        isAdmin = true;
      }
      isLogin = true;
      const loginArr = account[i];
      delete loginArr.password;
      localStorage.setItem("signup", JSON.stringify(loginArr));
      break;
    } else if (
      userLogin.email === account[i].email &&
      userLogin.password === account[i].password
    ) {
      if (account[i]?.role == "user") {
        window.location.href = "../user/info-user.html";
      }
    }
  }

  if (isLogin && !isAdmin) {
    window.location.href = "../home.html";
  } else if (isLogin && isAdmin) {
    window.location.href = "../admin/manage-product.html";
  } else {
    alert("Login failed");
  }
}

function getDataLogin() {
  const emailLogin = document.getElementById("inputEmail").value;
  const passwordLogin = document.getElementById("inputPassword").value;
  const accountLogin = {
    email: emailLogin,
    password: passwordLogin,
  };
  return accountLogin;
}

function checkInfo() {
  const infoUser = JSON.parse(localStorage.getItem("signup"));
  if (!infoUser) {
    window.location.href = "./user/login.html";
  }

  if (infoUser.role == "admin") {
    window.location.href = "./admin/manage-product.html";
  } else {
    window.location.href = "./user/info-user.html";
  }
  function logOut() {
    loginArr = [];
    localStorage.setItem("signup", JSON.stringify(loginArr));
    saveLogin();
  }
}
