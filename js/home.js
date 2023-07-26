const productsDB = JSON.parse(localStorage.getItem("listProduct"));
renderProduct(productsDB);
function renderProduct(products) {
  const renderProductElement = document.querySelector("#bestseller");
  let renderProductContent = "";
  products?.forEach((product) => {
    renderProductContent += `<div id="bestseller"><div class="products-info">
    <img src=${product.img} alt="" class="product-img" />
    <p class="product-name">${product.name}</p>
    <p class="product-price">Price: $ ${product.price.toLocaleString()}</p>
    <i class="fas fa-cart-plus" onclick="handleAddToCart(${product.id})"></i></div>
  </div>`;
  });
  renderProductElement.innerHTML = renderProductContent;
}

const newProduct = getDataProduct;
product.push(newProduct);
renderProduct();
function getDataProduct() {
  const imageUrlValue = document.getElementsByName("img")[0].value;
  const nameValue = document.getElementsByName("name")[0].value;
  const priceValue = Number(document.getElementsByName("price")[0].value);
  const indexLast = products.length - 1;
  const id = product[indexLast].id + 1;
  const newProduct = {
    id: id,
    name: nameValue,
    img: imageUrlValue,
    price: priceValue,
  };
  return newProduct;
}
handleSearch();
function handleSearch() {
  let searchResult = document.querySelector(".search-result");
  let inputSearch = document.querySelector("#input-search").value.toLowerCase();
  let productSearch = [];

  for (const element of productsDB) {
    if (
      element.name.toLowerCase().includes(inputSearch) ||
      element.price.toString().includes(inputSearch)
    ) {
      productSearch.push(element);
    }
  }
  // searchResult.innerHTML = `${productSearch.length} results were found.`;
  // searchResult.style.display = "block";
  renderProduct(productSearch);
}

function handleAddToCart(id) {
  const userLogin = JSON.parse(localStorage.getItem("signup"));
  const listUsers = JSON.parse(localStorage.getItem("listUser"));
  // Lấy sản phẩm db về
  const listProduct = JSON.parse(localStorage.getItem("listProduct"));
  const productAddCart = listProduct.find((product) => product.id === id);

  const userDb = listUsers.find((user) => user.email === userLogin.email);
  if (!userDb.cart || !userDb.cart.length) {
    productAddCart.quantity = 1;
    userDb.cart = [productAddCart];
  } else {
    let isExist = false;
    userDb.cart.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
        isExist = true;
      }
    });
    if (!isExist) {
      productAddCart.quantity = 1;
      userDb.cart.push(productAddCart);
    }
  }

  userLogin.cart = userDb.cart;
  localStorage.setItem("signup", JSON.stringify(userLogin));
  localStorage.setItem("listUser", JSON.stringify(listUsers));
}
