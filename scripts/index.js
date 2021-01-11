const cycleButton = document.querySelector(".change-color");

const colorCycle = () => {
	const boxOne = document.querySelector(".color-boxes-1");
	const boxTwo = document.querySelector(".color-boxes-2");
	if (boxOne.style.display === "flex") {
		boxOne.style.display = "none";
		boxTwo.style.display = "flex";
	} else {
		boxOne.style.display = "flex";
		boxTwo.style.display = "none";
	}
	return false;
};
cycleButton.addEventListener("click", colorCycle);

let storedColor;
const box = document.querySelectorAll(".box");
const colorBox = document.querySelectorAll(".color-box");
const selected = document.querySelector(".selected");

const removeSelected = () => {
	console.log("hi");
	colorBox.forEach((element) => {
		element.classList.remove("selected");
		console.log(element.classList);
	});
};
const takeColor = (element) => {
	const color = window
		.getComputedStyle(element.target)
		.getPropertyValue("background-color");
	storedColor = color;
	const isSelected = element.target.classList.contains("selected");
	if (!isSelected) {
		element.target.className += " selected";
	}
};
const applyColor = (element) => {
	element.target.style.backgroundColor = storedColor;
};
colorBox.forEach((element) => {
	element.addEventListener("click", function (e) {
		removeSelected();
		takeColor(e);
	});
});
box.forEach((element) => {
	element.addEventListener("click", function (e) {
		applyColor(e);
	});
});
