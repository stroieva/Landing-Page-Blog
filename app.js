let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

/* Бургер меню */

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
});

/* Анімація блоків */
AOS.init();


  // -----------------------------АНІМАЦІЯ ПУНКТІВ МЕНЮ------------------
  $('#nav').onePageNav({
    currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
  })


/* Корегування висоти блоку при переході по меню */

// $(document).ready(function () {
//     $('a[href^="#"]').click(function () {
//         let target = $(this).attr("href");
//         $("html, body").animate(
//             {
//                 scrollTop: $(target).offset().top - 60,
//             },
//             500
//         );
//     });
// });
