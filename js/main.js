
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
 }

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}
// ==========================================
const opisBtn = document.querySelectorAll('.opis__btn');
const opisOver = document.querySelectorAll('.opis__bl-over');
const opisVrapClose = document.querySelectorAll('.opis__vrap-close');

for (let i = 0; i < opisBtn.length; i++) {
	opisBtn[i].addEventListener('click', cartOpen);
	opisVrapClose[i].addEventListener('click', cartClose);

	function cartOpen() {
		opisOver[i].classList.add('opis__bl-over--active');
	}

	function cartClose() {
		opisOver[i].classList.remove('opis__bl-over--active');
	}

}


// ===========================================
