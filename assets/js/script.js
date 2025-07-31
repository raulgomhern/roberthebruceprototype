// set vars
const imageSliderContainer = document.querySelector(".image-slider-container");
const slider = document.getElementById("range-slider");
const image = document.getElementsByClassName("image")[1];
const buttonRange = document.getElementsByClassName("slider-control")[0];
 
// Move slider and buttonRange at change of value
slider.addEventListener("input", (e) => {
	const sliderPos = e.target.value;
 
	image.style.width = sliderPos + "%";
	buttonRange.style.left = sliderPos + "%";
});
 
imageSliderContainer.addEventListener("mousemove", (e) => {
	const reduceMovement = (n) => n / 25;
 
	imageSliderContainer.animate(
		{
			transform: `scale(1.03) rotateX(${reduceMovement(
				e.movementY
			)}deg) rotateY(${reduceMovement(e.movementX)}deg)`
		},
		{ duration: 1200 }
	);
});
 
imageSliderContainer.addEventListener("mouseout", (e) => {
	imageSliderContainer.animate(
		{ transform: `scale(1) rotateX(0deg) rotateY(0deg)` },
		{ duration: 250, fill: "forwards" }
	);
});
