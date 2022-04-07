// function project1Clicked() {
//   var project1 = document.getElementById("project1");
//   project1.classList.add("project1NewClass");
// }

// Link to project1
/* function h1pClicked() {
  window.location.href = "project1.html";
} */

function aboutBtnClicked() {
  window.location.href = "about.html";
}


// <----------------------html {      -------------------------> At the top of the css file to allow amooth scroling for javascript :
//   scroll-behavior: smooth;
// }

function btnp1f(){
    var box = document.getElementById('box');
    box.scrollIntoView();
}

$(document).ready(function () {
  (function ($) {
    var s,
      spanizeLetters = {
        settings: {
          letters: $(".js-spanize"),
        },
        init: function () {
          s = this.settings;
          this.bindEvents();
        },
        bindEvents: function () {
          s.letters.html(function (i, el) {
            //spanizeLetters.joinChars();
            var spanizer = $.trim(el).split("");
            return "<span>" + spanizer.join("</span><span>") + "</span>";
          });
        },
      };
    spanizeLetters.init();
  })(jQuery);

  // Scroll to view buttom
  // $("#btnAboutTheProject").on("click", function () {
  //   $("html, body").animate({ scrollTop: $(".backTotop").position().top }, 1000);
  // });

  // Scroll to view top
  $("#btnBackToTop").on("click", function () {
    $("html, body").animate({ scrollTop: $("#btnAboutTheProject").position().top }, 1000);
  });

  // <---------------The about page text effect--------------->
  $(document).ready(function () {
    "use strict";

    var texxt = $("ul li");
    texxt.removeClass("hiddeen");
    
    
  });
});

//   document.getElementById('iframe').addEventListener('onmouseleave',function(){
//     // document.getElementById('p').setAttribute('style', 'color: red;')
//     alert('l');
//   });

//  Simulate typing

// var i = 0;
// var txt = "Lorem ipsum dummy text blabla.";
// var speed = 50;

// function typeFunction() {
//   if (i < txt.length) {
//     document.getElementById("aboutH1skills").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// };

    
// <-------------------About page text  Shine-------------------->


function shineRandomLetter(){
 var hiddeen = document.getElementsByClassName('hiddeen');
 var randomShine =  randomShine.setAttribute('text-shadow: 0 0 10px #fff, 0 0 20px #fff,  0 0 40px #fff;')
 Math.floor(Math.random() * randomShine)

}
shineRandomLetter();

//<----------------------- project2--------------------------->

function project2ImageFunc(){
  window.location.href = "project2.html";

}

// var one = document.getElementById('one');
// one.onmouseenter{
//   alert();
// }

// ----------------boxAudio text to speach ------------->


function textToAudio(){
var msg = new SpeechSynthesisUtterance();
msg.text = 

"A Drop Shipping E-commerce Chrome Extension Tool. I have created this project in a form of a chrome extension to boost up performance in the Drop shipping E-commerce world. If you are selling on eBay or Shopify you can now enhance your performance to great extent. This Drop shipping tool can copy the content from all of the text fields of your buyer's shipping information,And paste it into the appropriate fields in your supplier's form. Thus allowing you to fulfill your orders in about one tenth of the time and with virtually zero effort. Watch the video above for more information.";
window.speechSynthesis.speak(msg);
// speechSynthesisUtteranceInstance.rate = 5;
}

function textToAudioStop(){
  var msg = new SpeechSynthesisUtterance();
  // msg.text = 
  
  // "";
  window.speechSynthesis.cancel(msg);
  }

  
  function bgChange(bg) {
    document.body.style.background = bg;
  }

  //<----------------------- project3--------------------------->

function project3ImageFunc(){
  window.location.href = "WhereTheISSApi.html";

}


// var carouselContainer = document.getElementsByClassName('carouselContainer').addEventListener('click', function(){
// alert('d')
// }

function project4ImageFunc(){
  window.location.href = "keyboard1.html";

}


function project5ImageFunc(){
  window.location.href = "responsiveGridCSSWebsite.html";

}

function project6ImageFunc(){
  window.location.href = "speechRecognition.html";

}

