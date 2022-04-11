var burgerMenu = document.getElementById("modal-burger");
var menu = document.getElementById("modal-menu");

burgerMenu.addEventListener("click", function(){
	menu.classList.toggle("open-modal");
});