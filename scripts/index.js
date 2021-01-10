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

const takeColor = (element) => {
	const color = element.target.style.backgroundColor;
	storedColor = color;
};
const applyColor = (element) => {
	element.target.style.backgroundColor = storedColor;
};
colorBox.forEach((element) => {
	element.addEventListener("click", function (e) {
		takeColor(e);
	});
});
box.forEach((element) => {
	element.addEventListener("click", function (e) {
		applyColor(e);
	});
});
