// <!----------- The animated menu --------->

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



// --------------------------------------------------------------SOUND-------------------------------------------------------->
// var voices = window.speechSynthesis.getVoices();
// var foundVoices = voices.filter(function(voice) 
// { 
//     return voice.name == 'Microsoft Zira Desktop - English (United States)'; 
// });

// if(foundVoices.length === 1){
//     speechMessage.voice = foundVoices[0];
// }
// voice.name == 'Microsoft Zira Desktop - English (United States)'; 


const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
    'Im good , Thanks , How are you doing ?',
    'All is well, Thanks !',
    'Cant complain , Thanks for asking !',
    'Im all set up and ready to go'

];

const weather = [
    'The Weather is great today',
    'The sun is up, Lets go outside',
    'I love the weather this time of the year'
];

const pleaseSayAgain = [
  'Please say again',
  'Im not sure how to answer that',
  'Sorryת Please try again',
  'Please repeat that',
  'could you please repeat that'
]

const future = [
  'Well........ Are you sure you wonna know ? ',

  'gee ,Thats a tough one, let me google it and get back to you',
  
  'Sure, But if i were you i would first clear my schedule for the rest of the day'
]

const SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    recognition.lang = 'Microsoft Zira Desktop - English (United States)'; 
    console.log('voice is activated, please speek to the microphone');
};

// window.SpeechRecognition.name = 'Microsoft Zira Desktop - English (United States)'; 

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


// Add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
    $(document).ready(function(){
      var loader = document.getElementsByClassName('loader');
      $(loader).animate({opacity:1});
      // videoAvatar.pause();
  
    });
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.onend = e => {
		$(document).ready(function(){
            var videoDiv = document.getElementById('videoDiv');
            $(videoDiv).animate({opacity:0});
            // videoAvatar.pause();
        
          });  /* Set background to none while speech is done */
		}
    // document.body.style.backgroundImage = 'url("./images/bgg.png")';   /* Set a background while speech is active */
	// document.body.style.backgroundSize = '50% 40%';
	// document.body.style.backgroundRepeat = 'no-repeat';
    // document.body.style.backgroundPosition = 'top center';

    // var videoAvatar = document.getElementById('videoAvatar');
    // videoAvatar.style.opacity = 1;

    // document.body.style.backgroundColor = 'white';

    // ---------Change the opacity of the background video (div) when speech is active------------>
$(document).ready(function(){
    var videoDiv = document.getElementById('videoDiv');
    $(videoDiv).animate({opacity:1});
    // videoAvatar.pause();

  });
// -------------Pause the background video------------->
//   setTimeout(function timer(){
//     videoAvatar.pause();
//   }, 5000);


    // speech.text = 'Im not sure how to answer that';
    // speech.text = 'Please say again';
    // -------------------------Diferent answer each time as a difault---------------------->
    const finalText =
    pleaseSayAgain[Math.floor(Math.random() * pleaseSayAgain.length)];
    speech.text = finalText;

    if (message.includes('future')) {
      const finalText =
      future[Math.floor(Math.random() * future.length)];
       speech.text = finalText;
       setTimeout(function timer(){
         window.location.reload();
       }, 5000);
   }

   if (message.includes('פיוטשר')) {
    const finalText =
    future[Math.floor(Math.random() * future.length)];
     speech.text = finalText;
     setTimeout(function timer(){
       window.location.reload();
     }, 5000);
 }

    if (message.includes('how are you')) {
       const finalText =
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
        setTimeout(function timer(){
          window.location.reload();
        }, 3000);
    }

    if (message.includes('weather')) {
        const finalText =
        weather[Math.floor(Math.random() * weather.length)];
         speech.text = finalText;
         setTimeout(function timer(){
          window.location.reload();
        }, 3000);
     }

     if (message.includes('browser')) {
        const finalText =
        'openning the browser';
         speech.text = finalText;
         setTimeout(function timer(){
          // ------- Open url in a new tab ---------:
           $(document).ready(function(){
            window.open("http://www.google.com/","_blank");
        });
          }, 1000);
         setTimeout(function timer(){
          window.location.reload();
        }, 2000);
     }

  //    if (message.includes('google')) {
  //     const finalText =
  //     'openning google';
  //      speech.text = finalText;
  //      setTimeout(function timer(){
  //       window.location.href =  ("https://www.google.com/");
  //       // window.target = "_blank";
  //       }, 2000);
  //  }

  if (message.includes('google')) {
    const finalText =
    'openning google';
     speech.text = finalText;
     setTimeout(function timer(){
      // ------- Open url in a new tab ---------:
       $(document).ready(function(){
        window.open("http://www.google.com/","_blank");
    });
      }, 1000);
      setTimeout(function timer(){
        window.location.reload();
      }, 2000);
 }
 
    
     if (message.includes('amazon')) {
        const finalText =
        'openning amazon';
         speech.text = finalText;
         setTimeout(function timer(){
          // ------- Open url in a new tab ---------:
       $(document).ready(function(){
        window.open("http://www.amazon.com/","_blank");
    });
          }, 1000);
          setTimeout(function timer(){
            window.location.reload();
          }, 2000);
     }

     if (message.includes('אמזון')) {
        const finalText =
        'openning amazon';
         speech.text = finalText;
         setTimeout(function timer(){
        //  window.location.href =  "https://www.amazon.com/";
        // ------- Open url in a new tab ---------:
        $(document).ready(function(){
          window.open("http://www.amazon.com/","_blank");
      });
         }, 1000);
         setTimeout(function timer(){
          window.location.reload();
        }, 2000);
     }

     if (message.includes('youtube')) {
      const finalText =
      'openning youtube';
       speech.text = finalText;
       setTimeout(function timer(){
        // ------- Open url in a new tab ---------:
         $(document).ready(function(){
          window.open("http://www.youtube.com/","_blank");
      });
        }, 1000);
        setTimeout(function timer(){
          window.location.reload();
        }, 2000);
   }

   if (message.includes('יוטיוב')) {
    const finalText =
    'openning youtube';
     speech.text = finalText;
     setTimeout(function timer(){
      // ------- Open url in a new tab ---------:
       $(document).ready(function(){
        window.open("http://www.youtube.com/","_blank");
    });
      }, 1000);
      setTimeout(function timer(){
        window.location.reload();
      }, 2000);
 }

     if (message.includes('aliexpress')) {
      const finalText =
      'openning ali express';
       speech.text = finalText;
      //  window.location.href =  "https://www.topcashback.com/aliexpress-by-alibaba/";
    setTimeout(function timer(){
      //  ------- Open url in a new tab ---------:
       $(document).ready(function(){
        window.open("http://www.aliexpress.com/","_blank");
    });
  }, 1000);
    setTimeout(function timer(){
      window.location.reload();
    }, 2000);
   }

   if (message.includes('עלי אקספרס')) {
    const finalText =
    'openning ali express';
     speech.text = finalText;
    //  window.location.href =  "https://www.topcashback.com/aliexpress-by-alibaba/";
  setTimeout(function timer(){
    //  ------- Open url in a new tab ---------:
     $(document).ready(function(){
      window.open("http://www.aliexpress.com/","_blank");
  });
}, 1000);
  setTimeout(function timer(){
    window.location.reload();
  }, 2000);
 }

    //  if (message.includes('my orders')) {
    //     const finalText =
    //     'openning ali express';
    //     speech.text = finalText;
    //    //  window.location.href =  "https://www.topcashback.com/aliexpress-by-alibaba/";
    //    window.location.href =  "https://www.aliexpress.com/_blank";
    //  }

     
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    // speech.voice = 'Microsoft Zira Desktop - English (United States)'; 
    window.speechSynthesis.speak(speech);
}
// }

// var voices;    
// window.speechSynthesis.onvoiceschanged = function() {
//     voices=window.speechSynthesis.getVoices();
// };
// speech.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];


// SpeechSynthesisUtterance.addEventListener('end', function(event) { 
//     alert('Utterance has finished being spoken after ' + event.elapsedTime + ' milliseconds.');
//   });



// ------------------------------------------------------NEW---------------------------------->
// -------------------------Based on this : https://www.youtube.com/watch?v=kagZyM0wzJk---------------------->

// const searchForm = document.querySelector("#search-form");
// const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
// const info = document.querySelector(".info");

// // The speech recognition interface lives on the browser’s window object
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

// if(SpeechRecognition) {
//   console.log("Your Browser supports speech Recognition");
  
//   const recognition = new SpeechRecognition();
//   recognition.continuous = true;
//   // recognition.lang = "en-US";

//   searchForm.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
//   searchFormInput.style.paddingRight = "50px";

//   const micBtn = searchForm.querySelector("button");
//   const micIcon = micBtn.firstElementChild;

//   micBtn.addEventListener("click", micBtnClick);
//   function micBtnClick() {
//     if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
//       recognition.start(); // First time you have to allow access to mic!
//     }
//     else {
//       recognition.stop();
//     }
//   }

//   recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
//   function startSpeechRecognition() {
//     micIcon.classList.remove("fa-microphone");
//     micIcon.classList.add("fa-microphone-slash");
//     searchFormInput.focus();
//     console.log("Voice activated, SPEAK");
//   }

//   recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
//   function endSpeechRecognition() {
//     micIcon.classList.remove("fa-microphone-slash");
//     micIcon.classList.add("fa-microphone");
//     searchFormInput.focus();
//     console.log("Speech recognition service disconnected");
//   }

//   recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
//   function resultOfSpeechRecognition(event) {
//     const current = event.resultIndex;
//     const transcript = event.results[current][0].transcript;
    
//     if(transcript.toLowerCase().trim()==="stop recording") {
//       recognition.stop();
//     }
//     else if(!searchFormInput.value) {
//       searchFormInput.value = transcript;
//     }
//     else {
//       if(transcript.toLowerCase().trim()==="go") {
//         searchForm.submit();
//       }
//       else if(transcript.toLowerCase().trim()==="reset input") {
//         searchFormInput.value = "";
//       }
//       else {
//         searchFormInput.value = transcript;
//       }
//     }
//     searchFormInput.value = transcript;
//     searchFormInput.focus();
//     setTimeout(() => {
//       searchForm.submit();
//     }, 500);
//   }
  
//   info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';
  
// }
// else {
//   console.log("Your Browser does not support speech Recognition");
//   info.textContent = "Your Browser does not support Speech Recognition";
// }


