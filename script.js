const form = document.querySelector("form");
const list = document.getElementById("list");
const item = document.getElementById("item");

function storage() {
  window.localStorage.todoliste = list.innerHTML;
}
function getTodo() {
  list.innerHTML = window.localStorage.todoliste;
}
getTodo();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storage();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storage();
});
