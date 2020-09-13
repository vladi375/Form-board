const submit = document.querySelector("#btn");
const board = document.getElementById("board");
let arr = [];

submit.addEventListener("click", () => {
  const inputTitle = document.querySelector("#inputTitle");
  const inputDesc = document.querySelector("#inputDescription");
  board.style.display = "block";

  arr.push({
    title: inputTitle.value,
    desc: inputDesc.value,
  });
  renderCards();
});

function renderCards() {
  board.innerHTML = "";
  for (let i = 0; i < arr.length; i++)
    board.innerHTML += `<div class="card" id="cardNr${i}">
  <div class="card__info">
    <p>Title: ${arr[i].title}</p>
    <p>Description: ${arr[i].desc}</p>    
  </div>
  <div class="buttons">
    <button type="button" index="${i}" id="deleteBtn">Delete</button>
    <button type="button" index="${i}" id="editBtn">Edit</button>
  </div>
</div>`;

  addDeleteEvent();
  addEditEvent();

  console.log(arr);
}

function addDeleteEvent() {
  document.querySelectorAll("#deleteBtn").forEach((button) => {
    button.addEventListener("click", (event) => {
      let index = event.currentTarget.getAttribute("index");
      arr.splice(index, 1);
      renderCards();
    });
  });
}

function addEditEvent() {
  document.querySelectorAll("#editBtn").forEach((button) => {
    button.addEventListener("click", (event) => {
      let index = event.currentTarget.getAttribute("index");
      const element = document.getElementById(`cardNr${index}`);
      element.innerHTML = "";
      element.innerHTML = `<form class="card__info">
      <input id="editedTitle" type="text" value="${arr[index].title}"></input>
      <input id="editedDesc" type="text" value="${arr[index].desc}"></input>
      <input id="editedIndex" type="hidden" value="${index}"></input>
      <button type="button" id="saveAfterEdit">Submit</button>
      </form>`;

      document.getElementById("saveAfterEdit").addEventListener("click", () => {
        const inputTitle = document.querySelector("#editedTitle").value;
        const inputDesc = document.querySelector("#editedDesc").value;
        const editedIndex = document.querySelector("#editedIndex").value;
        arr[editedIndex].title = inputTitle;
        arr[editedIndex].desc = inputDesc;
        renderCards();
      });
    });
  });
}
