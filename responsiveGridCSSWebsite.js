const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;

//initiAL SETUP

//ADD CLASS
// menuButton.addEventListener("mouseenter", toggolmenu);

function toggolmenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

// ------------Listening to multiple events------------->
menuButton.addEventListener('click', toggolmenu, false);
// menuButton.addEventListener('mouseenter', toggolmenu, false);






/* <!-- back to top button --> */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//     // behavior: 'smooth';
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }


$( document ).ready(function() {
    var $backToTop = $(".back-to-top");
    $backToTop.hide();
    
    
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
      } else {
        $backToTop.fadeOut();
      }
    });
    
    $backToTop.on('click', function(e) {
      $("html, body").animate({scrollTop: 0}, 500);
    });
});