// Target all the elements to be used

const input = document.querySelector("#main");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear_list");
const addedItems = document.querySelector(".items");

function submit(e) {
	e.preventDefault();
	let doneBtn = document.createElement("button");
	doneBtn.setAttribute("id", "done");
	let removeBtn = document.createElement("button");
	removeBtn.setAttribute("id", "remove");
	doneBtn.innerHTML = "✔";
	removeBtn.innerHTML = "❌";
	let data = document.createTextNode(input.value);
	let newItem = document.createElement("li");
	newItem.appendChild(doneBtn);
	newItem.appendChild(data);
	newItem.appendChild(removeBtn);
	addedItems.appendChild(newItem);
	input.value = "";
	input.focus();

	doneBtn.addEventListener("click", (e) => {
		e.preventDefault();
		let status = newItem.getAttribute("id");
		status === "complete"
			? newItem.setAttribute("id", "")((doneBtn.innerHTML = "✔"))
			: newItem.setAttribute("id", "complete"),
			(doneBtn.innerHTML = "⤴");
	});

	removeBtn.addEventListener("click", (e) => {
		e.preventDefault();
		addedItems.removeChild(newItem);
	});
}

addBtn.addEventListener("click", submit);
addBtn.addEventListener("keydown", (e) => {
	if ((e.key = "Enter")) {
		submit();
	}
});
