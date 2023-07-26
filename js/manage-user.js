renderUsers();
function renderUsers() {
  const tbodyElement = document.querySelector("#users tbody");
  let tbodyContent = "";
  const account = JSON.parse(localStorage.getItem("listUser")) ?? [];
  account.forEach((users, index) => {
    tbodyContent += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${users.username}</td>
    <td>${users.email}</td>
    <td>${users.password}</td>
    <td>${users.role}</td>
    <td>${users.isActive ? "Active" : "Inactive"}</td>
    <td><button style="${
      users.role === "admin" ? "display:none" : ""
    }"onclick="handleChangeUser('${users.email}')">Change</button></td>
  </tr>`;
  });
  tbodyElement.innerHTML = tbodyContent;
}
function handleChangeUser(email) {
  const account = JSON.parse(localStorage.getItem("listUser")) ?? [];
  const newArray = account.map((item) => {
    if (item.email == email) {
      return {
        ...item,
        isActive: !item.isActive,
      };
    } else {
      return item;
    }
  });
  console.log(newArray);
  localStorage.setItem("listUser", JSON.stringify(newArray));
  renderUsers();
}
