// const account = JSON.parse(localStorage.getItem("listUser"));
// const product = JSON.parse(localStorage.getItem("listProduct"));
// const orderDataLocal = JSON.parse(localStorage.getItem("order")) || [];
// let orderData = [];
// function saveOrder() {
//   localStorage.setItem("listUser", JSON.stringify(orderData));
// }
// if (localStorage.getItem("listUser") == null) {
//   saveData();
// }

// function saveData() {
//   localStorage.setItem("listProduct", JSON.stringify(product));
// }

// //lấy sản phẩm
// function loadOrder() {
//   product = JSON.parse(localStorage.getItem("listProduct"));
// }

// if (localStorage.getItem(""))

const renderElement = document.getElementById("render-order");
function renderOrder(data) {
  if (data) {
    let order = "";
    data.forEach((item, index) => {
      order += `<tr>
      <th>${index + 1}</th>
      <th>$${Number(item.total).toLocaleString()}</th>
      <th>${item.username}</th>
      <th></th>
      <th>Email</th>
      <th>Address</th>
      <th>Status</th>
      <th>Action</th>
    </tr>`;
    });
  }
}
