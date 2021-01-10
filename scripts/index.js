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
