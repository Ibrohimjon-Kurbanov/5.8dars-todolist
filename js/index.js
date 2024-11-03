const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const button = document.querySelector(".btn-add");
const remove = document.querySelector(".remove");

function createTask(data) {
  return ` <li>
         <h3>${data.task}</h3>
          <div class="btns">
            <button class="check"><i class="fa-solid fa-pen"></i></button>
            <button class="remove"><i class="fa-solid fa-trash"></i></button>
          </div>
        </li>`;
}

button &&
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let data = {
      task: input.value.trim(),
      id: Date.now(),
    };

    let storage = [];
    if (localStorage.getItem("data")) {
      storage = JSON.parse(localStorage.getItem("data"));
    }
    storage.push(data);
    localStorage.setItem("data", JSON.stringify(storage));

    if (data.task) {
      let card = createTask(data);
      list.innerHTML += card;
      form.reset();
    } else {
      alert("Please enter text");
      input.focus();
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  let storage = [];
  if (localStorage.getItem("data")) {
    storage = JSON.parse(localStorage.getItem("data"));
    storage.forEach((task) => {
      let card = createTask(task);
      list.innerHTML += card;
    });
  }
});
