let burger_menu = document.querySelector('#menu_btn');
let header = document.querySelector('.header');
let navbar = document.querySelector('.header nav');

burger_menu.onclick = function click() {
	burger_menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll = () =>{
	burger_menu.classList.remove('fa-times');
	navbar.classList.remove('active');

	if (window.scrollY > 0) {
		header.classList.add('active');
	}else{
		header.classList.remove('active');
	}
}