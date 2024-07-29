/* custom js file made by JeanDoe */
/* When click on button add animation class */


  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
	e.preventDefault;
	button.classList.add("animate");
	setTimeout(() => {
	  button.classList.remove("animate");
	}, 600);
  });
const toast = document.querySelector('#notification');

button.addEventListener("click", () => {
	toast.classList.add("show");
	setTimeout(() => {
		toast.classList.remove("show");
	}, 2000);
});

