let product = [
  {
    id: 1,
    name: "Organic Earring",
    img: "https://cdn.vnda.com.br/adornashop/2023/04/19/12_4_7_760_Mom_sday_porLucasDaneris61min.jpg?v=1681917252",
    price: 13900,
  },
  {
    id: 2,
    name: "Valentina Ring",
    img: "https://www.junie.vn/cdn/shop/files/vong-tay-lena-3.jpg?v=1686372259&width=800",
    price: 7900,
  },
  {
    id: 3,
    name: "Pearl Necklace",
    img: "https://cdn.vnda.com.br/adornashop/2023/04/19/13_4_0_078_Mom_sday_porLucasDaneris73min.jpg?v=1681923025",
    price: 11900,
  },
  {
    id: 4,
    name: "Giovana Bracelet",
    img: "https://cdn.vnda.com.br/adornashop/2023/04/19/13_4_0_055_Mom_sday_porLucasDaneris85min.jpg?v=1681922115",
    price: 7500,
  },
];

// đẩy mảng product vào local
function Save() {
  localStorage.setItem("listProduct", JSON.stringify(product));
}

//lấy sản phẩm
function load() {
  product = JSON.parse(localStorage.getItem("listProduct"));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
  load();
}
const productAdmin = function () {
  let listproduct1 = "";
  for (let i in product) {
    const data = JSON.parse(JSON.stringify(product[i]));
    let listproduct1 = "<tr>";
    listproduct1 += "<td>" + data.id + "</td>";
    listproduct1 += "<td>" + data.name + "</td>";
    listproduct1 += "<td>" + data.img + "</td>";
    listproduct1 += "<td>" + data.price + "</td>";
    listproduct1 +=
      '<td><button onclick="updateProduct(' +
      i +
      ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    listproduct1 +=
      '<button onclick="deleteProduct(' +
      i +
      ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
    listproduct1 += "</tr>";

    document.getElementById("product-admin").innerHTML += listproduct1;
  }
  Save();
};

const addProduct = function () {
  const Product = {
    id: parseInt(product.length + 1),
    name: document.getElementById("name").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
  };
  product.push(Product);
  localStorage.setItem("listProduct", JSON.stringify(product));
  window.location.reload();
};

// Xóa sản phẩm
const deleteProduct = function (i) {
  product.splice(i, 1);
  localStorage.setItem("listProduct", JSON.stringify(product));
  window.location.reload();
};

// Sửa sản phẩm
const updateProduct = function (i) {
  const k = product[i];
  document.getElementById("idd").value = k.id;
  document.getElementById("named").value = k.name;
  document.getElementById("imgd").value = k.img;
  document.getElementById("priced").value = k.price;
  document.getElementById("idd").setAttribute("disabled", "disabled");
  document.getElementById("submitUpdate").innerHTML =
    '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' +
    i +
    ')">Agree</button>';
};
const submitUpdate = function (i) {
  const k = product[i];
  k.id = document.getElementById("idd").value;
  k.name = document.getElementById("named").value;
  k.img = document.getElementById("imgd").value;
  k.price = document.getElementById("priced").value;
  localStorage.setItem("listProduct", JSON.stringify(product));
  window.location.reload();
};
productAdmin();
