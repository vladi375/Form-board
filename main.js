const submit = document.querySelector("#btn");
const inputTitle = document.querySelector("#inputTitle");
const inputDesc = document.querySelector("#inputDescription");
const card = document.getElementsByClassName("card");
const cardTitle = document.getElementsByClassName("card__title");
const cardDesc = document.getElementsByClassName("card__desc");
let arr = [];
const deleteBtn = document.querySelector("#deleteBtn");
const editBtn = document.querySelector("#editBtn");

submit.addEventListener("click", function () {
  title = inputTitle.value;
  desc = inputDesc.value;
  card[0].style.display = "block";

  arr.push(title, desc);
  console.log(arr);
  arr.forEach(function (item) {
    cardTitle[0].innerHTML += `Title: ${item}`;
    arr.splice(0, 1);
  });
  arr.forEach(function (item) {
    cardDesc[0].innerHTML += `Description: ${item}`;
  });
});
