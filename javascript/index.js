let navMenu = document.getElementById('nav-menu');
let mainMenu = document.getElementById('main-menu');

function mobileMenu() {
	if (navMenu.style.opacity == '1') {
		navMenu.style.overflow = 'hidden';
		navMenu.style.opacity = '0';
		mainMenu.style.opacity = '0';
		mainMenu.style.height = '0';
	} else {
		navMenu.style.overflow = 'visible';
		navMenu.style.opacity = '1';
		mainMenu.style.opacity = '1';
		mainMenu.style.height = 'auto';
	}
}

// to close the menu when clicking outside of it
document.getElementById('menu-toggle').addEventListener('click', mobileMenu);

// to reset the menu when resizing the window
function resetMenu() {
	if (window.innerWidth >= 480) {
		// document.getElementById("nav-menu").style.display = "inline";
		navMenu.style.overflow = 'visible';
		navMenu.style.opacity = '1';
		mainMenu.style.opacity = '1';
		mainMenu.style.height = 'auto';
	} else {
		// document.getElementById("nav-menu").style.display = "none";
		navMenu.style.overflow = 'hidden';
		navMenu.style.opacity = '0';
		mainMenu.style.opacity = '0';
		mainMenu.style.height = '0';
	}
}

window.addEventListener('resize', resetMenu);
