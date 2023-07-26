const user = [
  {
    id: "USER1",
    username: "admin",
    email: "admin@gmail.com",
    password: "12345",
    role: "admin",
    isActive: true,
  },
  {
    id: "USER2",
    username: "Nguyễn Khánh Huyền",
    email: "huyensan21@gmail.com",
    password: "212000",
    role: "user",
    isActive: true,
    cart: [],
  },
  {
    id: "USER3",
    username: "Lê Hồng Ngọc",
    email: "hngoc@gmail.com",
    password: "00000",
    role: "user",
    isActive: true,
  },
];
const createProduct = [
  {
    id: 1,
    name: "Organic Earring",
    img: "https://cdn.vnda.com.br/adornashop/2023/04/19/12_4_7_760_Mom_sday_porLucasDaneris61min.jpg?v=1681917252",
    price: 13900,
  },
  {
    id: 2,
    name: "Valentina Ring",
    img: "https://cdn.vnda.com.br/adornashop/2023/04/19/11_4_2_240_Mom_sday_porLucasDaneris66min.jpg?v=1681915757",
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

if (!localStorage.getItem("listUser")) {
  localStorage.setItem("listUser", JSON.stringify(user));
}
if (!localStorage.getItem("listProduct")) {
  localStorage.setItem("listProduct", JSON.stringify(createProduct));
}
