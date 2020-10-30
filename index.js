// Target all the elements to be used

const input = document.querySelector("#main");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear_list");
const addedItems = document.querySelector(".items");
// const doneBtn = document.querySelector("#done");
// const removeBtn = document.querySelector("#remove");

function submit(e) {
	e.preventDefault();
	// console.log(input.value);
	let doneBtn = document.createElement("button");
	doneBtn.setAttribute("id", "done");
	let removeBtn = document.createElement("button");
	removeBtn.setAttribute("id", "remove");
	doneBtn.innerHTML = "✔";
	removeBtn.innerHTML = "❌";
	let data = document.createTextNode(input.value);
	console.log(data);
	let newItem = document.createElement("li");
	newItem.appendChild(data);
	console.log(newItem);
	newItem.appendChild(doneBtn);
	newItem.appendChild(removeBtn);
	addedItems.appendChild(newItem);
	input.value = "";
	input.focus();
}
addBtn.addEventListener("click", submit);
addBtn.addEventListener("keydown", (e) => {
	if ((e.key = "Enter")) {
		submit();
	}
});

// doneBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(this);
// });

//
