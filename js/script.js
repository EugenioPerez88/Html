var burger = document.getElementById("modal-burger");
var menu = document.getElementById("modal-menu");

burger.addEventListener('click', function(){
	menu.classList.toggle("toggle-menu");
});