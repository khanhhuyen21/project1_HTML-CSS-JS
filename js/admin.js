function getDataFormLocal(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

function setDataToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function navigate(path) {
  window.location = path;
}
