function renderCart() {
  let account = JSON.parse(localStorage.getItem("signup")) || [];
  console.log(account);
  let cart = account.cart;
  let productCart = "";
  console.log(cart);
  let total = "";
  let invoice = "";
  let invoiceResult = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  let totalResult = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  document.getElementById("inputtotal").innerHTML =
    Number(totalResult).toLocaleString();
  document.getElementById("inputtotal1").innerHTML =
    Number(totalResult).toLocaleString();

  cart.forEach((product) => {
    productCart += `<tr class='text-center'>
    <td><img src=${product.img} style='width:100px'></td>
    <td class='name-title'>${product.name}</td>
    <td>$ ${Number(product.price).toLocaleString()}</td>
    <td><button class='minus-item cart-count input-group-addon btn btn-outline-primary' data-id='${
      product.id
    }' data-name='${
      product.name
    }' onclick="handleChangeQuantity('descrease', '${product.id}')">-</button>
    <button class='btn cart-count'>${
      product.quantity
    }</button><button class='plus-item cart-count btn btn-primary input-group-addon' data-id='${
      product.id
    }' data-name='${product.name}' onclick="handleChangeQuantity('increase', '${
      product.id
    }')">+</button></td>
    </tr>`;
    invoice = `<div class="price-text">Invoice: ${invoiceResult.toLocaleString()}</div>`;
    total = `<div class="d-inline total">Total: ${totalResult.toLocaleString()}</div>`;
  });

  document.querySelector("#rendercart").innerHTML = productCart;
  document.querySelector(".invoice").innerHTML = invoice;
  document.querySelector(".total").innerHTML = total;
}
renderCart();

function handleChangeQuantity(action, id) {
  let listUsers = JSON.parse(localStorage.getItem("listUser"));
  let account = JSON.parse(localStorage.getItem("signup"));
  const userDB = listUsers.find((user) => user.email === account.email);
  userDB.cart.forEach((product, index) => {
    if (product.id == id) {
      action === "increase" ? product.quantity++ : product.quantity--;
      if (product.quantity <= 0) {
        userDB.cart.splice(index, 1);
      }
    }
  });

  account.cart = userDB.cart;
  localStorage.setItem("listUser", JSON.stringify(listUsers));
  localStorage.setItem("signup", JSON.stringify(account));
  renderCart();
}

let orderData = [];
function Savedon() {
  localStorage.setItem("listUser", JSON.stringify(orderData));
}

//lấy sản phẩm

orderData = JSON.parse(localStorage.getItem("listUser")) || [];
localStorage.setItem("listUser", JSON.stringify(orderData));

const checkCart = function () {
  if (document.getElementById("inputnguoinhan").value == "") {
    $(".nguoinhan").css("display", "block");
  } else {
    $(".nguoinhan").css("display", "none");
  }
  if (document.getElementById("inputsdt").value == "") {
    $(".sdt").css("display", "block");
  } else {
    $(".sdt").css("display", "none");
  }

  if (document.getElementById("inputdiachi").value == "") {
    $(".diachi").css("display", "block");
  } else {
    $(".diachi").css("display", "none");
  }
  if (document.getElementById("inputthanhtoan").value == 0) {
    $(".thanhtoan").css("display", "block");
  } else {
    $(".thanhtoan").css("display", "none");
  }
  if (document.getElementById("inputtinh").value == 0) {
    $(".tinh").css("display", "block");
  } else {
    $(".tinh").css("display", "none");
  }
  if (document.getElementById("inputemail").value == "") {
    $(".email").css("display", "block");
  } else {
    $(".email").css("display", "none");
  }
  if (
    document.getElementById("inputnguoinhan").value != "" &&
    document.getElementById("inputsdt").value != "" &&
    document.getElementById("inputdiachi").value != "" &&
    document.getElementById("inputemail").value != ""
  ) {
    infoCart();
  }
};
const add_don = function () {
  let thanhtoan;
  let tinh;

  if (document.getElementById("inputthanhtoan").value == 1) {
    thanhtoan = "Payment in cash";
  }
  if (document.getElementById("inputthanhtoan").value == 2) {
    thanhtoan = "InternetBanking";
  }
  if (document.getElementById("inputthanhtoan").value == 3) {
    thanhtoan = "Visa Card";
  }
  if (document.getElementById("inputthanhtoan").value == 4) {
    thanhtoan = "Paypal";
  }
  if (document.getElementById("inputtinh").value == 1) {
    tinh = "Hanoi";
  }
  if (document.getElementById("inputtinh").value == 2) {
    tinh = "Danang";
  }
  if (document.getElementById("inputtinh").value == 3) {
    tinh = "Ho Chi Minh";
  }
  if (document.getElementById("inputtinh").value == 4) {
    tinh = "Hue";
  }
  if (document.getElementById("inputtinh").value == 5) {
    tinh = "Quang Nam";
  }

  let account = JSON.parse(localStorage.getItem("signup")) || [];
  console.log(account);
  let cart = account.cart;
  let totalResult = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  let item = {
    id: orderData.length + 1,
    user: document.getElementById("inputnguoinhan").value,
    phone: document.getElementById("inputsdt").value,
    address: document.getElementById("inputdiachi").value + "-" + tinh,
    thanhtoan: thanhtoan,
    email: document.getElementById("inputemail").value,
    total: totalResult,
    ghichu: document.getElementById("inputghichu").value,
    trangthai: "Processing",
  };
  renderCart();

  orderData.push(item);

  Savedon();
};

function xacnhan() {
  $(".thongtins").css("display", "none");
  $("#xacnhandathang").css("display", "block");
}
function infoCart() {
  let thanhtoan;
  let tinh;

  if (document.getElementById("inputthanhtoan").value == 1) {
    thanhtoan = "Payment in cash";
  }
  if (document.getElementById("inputthanhtoan").value == 2) {
    thanhtoan = "InternetBanking";
  }
  if (document.getElementById("inputthanhtoan").value == 3) {
    thanhtoan = "Visa Card";
  }
  if (document.getElementById("inputthanhtoan").value == 4) {
    thanhtoan = "Paypal";
  }
  if (document.getElementById("inputtinh").value == 1) {
    tinh = "Hanoi";
  }
  if (document.getElementById("inputtinh").value == 2) {
    tinh = "Danang";
  }
  if (document.getElementById("inputtinh").value == 3) {
    tinh = "Ho Chi Minh";
  }
  if (document.getElementById("inputtinh").value == 4) {
    tinh = "Hue";
  }
  if (document.getElementById("inputtinh").value == 5) {
    tinh = "Quang Nam";
  }

  document.getElementById("inputnguoinhan1").innerHTML =
    document.getElementById("inputnguoinhan").value;
  document.getElementById("inputsdt1").innerHTML =
    document.getElementById("inputsdt").value;
  (document.getElementById("inputdiachi1").innerHTML =
    document.getElementById("inputdiachi").value + "-" + tinh),
    (document.getElementById("inputthanhtoan1").innerHTML = thanhtoan),
    (document.getElementById("inputemail1").innerHTML =
      document.getElementById("inputemail").value),
    (document.getElementById("inputghichu1").innerHTML =
      document.getElementById("inputghichu").value),
    (document.getElementById("inputtotal").innerHTML =
      document.getElementById("inputtotal1").value);
  add_don();
  $(".cartt").attr("data-dismiss", "modal");
  $(".thongtins").css("display", "block");
}
// Đơn hàng---

function order() {
  alert("Order Success");
  window.location = "./home.html";
}

function cancelOrder() {
  window.location.reload();
}
