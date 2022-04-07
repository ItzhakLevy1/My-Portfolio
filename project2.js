function hideStartBtnAdd() {
  var startBtnDiv = document.getElementById("startBtnDiv");
  startBtnDiv.classList.add("hideStartBtnAdd");
}

function hideStartBtnRemove() {
  var startBtnDiv = document.getElementById("startBtnDiv");
  startBtnDiv.classList.remove("hideStartBtnRemove");
}

//------------------- The sound functions for the background music and jumping audio--------------->

var audioBackgroundM = document.getElementById("audioBackgroundM"); 

// --------Not working-------
function playAudio() { 
  audioBackgroundM.play(); 
  audioCoin.play();  // Not working for audioCoin
} 

// --------Not working-------
function pauseAudio() { 
  audioBackgroundM.pause();
  audioCoin.pause(); // Not working for audioCoin
} 

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let isGameOver = false;
  let speed = 1;
  let platformCount = 50; // The overall number of platforms
  let platforms = [];
  let score = 0;
  let doodlerLeftSpace = 50;
  let startPoint = 150;
  let doodlerBottomSpace = startPoint;
  const gravity = 0.9;
  let upTimerId;
  let downTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let leftTimerId;
  let rightTimerId;

  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 1400; // Spreading the platforms across from left to right (Do not go over 1400)
      this.bottom = newPlatBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("platform");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount;
      let newPlatBottom = 100 + i * platGap;
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
      console.log(platforms);
    }
  }

  function movePlatforms() {
    if (doodlerBottomSpace > 100) {
      platforms.forEach((platform) => {
        platform.bottom -= 3; //The pace in which the platforms are created and are moving
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          console.log(platforms);
          score++;
          var newPlatform = new Platform(600);
          platforms.push(newPlatform);
          //--------------------- Change "LEVELS" by lowering the quantity of platforms/grid when player riches a sertine score--------------------------
          if (score == 10) {
            levelUp1()
                
          }
          
        }
      });
    }
  }

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodlerLeftSpace = platforms[0].left;
    doodler.style.left = doodlerLeftSpace + "px";
    doodler.style.bottom = doodlerBottomSpace + "px";
  }

  function fall() {
    isJumping = false;
    clearInterval(upTimerId);
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 4;
      doodler.style.bottom = doodlerBottomSpace + "px";
      if (doodlerBottomSpace <= 0) {
        gameOver();
      }
      platforms.forEach((platform) => {
        if (
          doodlerBottomSpace >= platform.bottom &&
          doodlerBottomSpace <= platform.bottom + 15 &&
          doodlerLeftSpace + 60 >= platform.left &&
          doodlerLeftSpace <= platform.left + 85 &&
          !isJumping
        ) {
          console.log("tick");
          startPoint = doodlerBottomSpace;
          jump();
          console.log("start", startPoint);
          isJumping = true;
        }
      });
    }, 20);
  }

  var audioCoin = document.getElementById("audioCoin");

  function playAudioCoin() {
    audioCoin.play();
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    upTimerId = setInterval(function () {
      console.log(startPoint);
      console.log("1", doodlerBottomSpace);
      doodlerBottomSpace += 20;
      doodler.style.bottom = doodlerBottomSpace + "px";
      console.log("2", doodlerBottomSpace);
      console.log("s", startPoint);
      if (doodlerBottomSpace > startPoint + 200) {
        fall();
        isJumping = false;
      }
    }, 30);
    playAudioCoin();
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      if (doodlerLeftSpace >= 0) {
        console.log("going left");
        doodlerLeftSpace -= 5;
        doodler.style.left = doodlerLeftSpace + "px";
      } else moveRight();
    }, 20);
  }

  function moveRight() {
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      //changed to 313 to fit doodle image
      if (doodlerLeftSpace <= 1500) {
        console.log("going right");
        doodlerLeftSpace += 5;
        doodler.style.left = doodlerLeftSpace + "px";
      } else moveLeft();
    }, 20);
  }

  function moveStraight() {
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  //assign functions to keyCodes
  function control(e) {
    doodler.style.bottom = doodlerBottomSpace + "px";
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  function gameOver() {
    isGameOver = true;
    while (grid.firstChild) {
      console.log("remove");
      grid.removeChild(grid.firstChild);

      // -----------------------Alert for GAME OVER--------------------
      setTimeout(function timer() {
        Swal.fire({
          title: '<div id="titleGameOver">GAME OVER</div>',

          // timer: 1500,
          showConfirmButton: false,
          background: "black",
          backdrop: "swal2-backdrop-hide",

          showClass: {
            popup: "animate__animated animate__fadeInDown",
            // backdrop: "swal2-backdrop-hide",
          },
          hideClass: {
            // popup: 'animate__animated animate__fadeOutUp'
            popup: "animate__animated animate__fadeOutDown",
            backdrop: "swal2-backdrop-hide",
          },
        });

        var titleGameOver = document.getElementById("titleGameOver");

        titleGameOver.id = "titleGameOver";

        titleGameOver.setAttribute(
          "style",
          "color: red; font-size: 53px; background-color:black; cursor: pointer;"
        );

        Swal.fire({
          
          title:
            '<div id="titleGameOver" style "padding:0px; margin:0px; ">GAME OVER</div> <div class="startBtnDiv" style "margin-top:500px;padding-top:500px; display:block; position:relative"><a id="startBtn" onclick="window.location.reload()<style "margin-top:500px; padding-top:500px; display:block">START GAME</a><div/>',

          // timer: 1500,
          showConfirmButton: false,
          // background:' rgba(0, 0, 0, 0)',
          background:' rgba(0, 0, 0, 0)',
          // backdrop: "swal2-backdrop-hide",
          backdrop: `rgba(0,0,0,0.9)`,  // Darckens the entire background when the alert is active

          showClass: {
            popup: 'animate__animated animate__fadeOutUp',
            popup: "animate__animated animate__fadeOutDown",
           /* backdrop: "swal2-backdrop-hide", */ // To keep the overall background lite when the alert is active
           
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
            popup: "animate__animated animate__fadeOutDown",
          },
        });

        var titleGameOver = document.getElementById("titleGameOver");

        titleGameOver.id = "titleGameOver";

        titleGameOver.setAttribute(
          "style",
          "color: red; font-size: 53px; background-color:rgba(0, 0, 0, 0); cursor: pointer; padding-buttom:0px; -webkit-text-stroke: 1px white;"
        );
        
      }, 2000);

      // ----------------------The grid section--------------------------
    }
    grid.innerHTML = "Your score "  + '\xa0'  +  score; // Add white space to string using '\xa0'
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
    gameOverAlert();
  }

  function start() {
    // setTimeout(function timer(){
    //   playAudioCoin();
    // }, 1000);

    if (!isGameOver) {
      createPlatforms();
      createDoodler();
      setInterval(movePlatforms, 30);
      jump(startPoint);
      document.addEventListener("keyup", control);
      startBtn.style.hidden = true;

      // hideStartBtnAdd()
    }
  }
  start();

  function levelUp1(){
    // let platformCount = 200; // The overall number of platforms
  
    if (doodlerBottomSpace > 100) {
      platforms.forEach((platform) => {
        platform.bottom -= 14; //The pace in which the platforms are created and are moving
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";
  
        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          console.log(platforms);
          score++;
          var newPlatform = new Platform(600);
          platforms.push(newPlatform);
         
        }
      });
    }
  }
});

// window.onload = function playAudioCoin() {
// var audioCoin = document.getElementById("audioCoin");

// audioCoin.play();
// }

//<----------------- Enable and disable mute------------------->

function enableMute() {
  document.getElementById("audioCoin").muted = true;
}

function disableMute() {
  audioCoin.muted = false;
}

// -----------------Save / retain radio input state on page refresh-------------->

// $(document).ready(function(){

// $(function() {
// 	$("input[type=\"radio\"]").click(function(){

// 		var thisElem = $(this);
// 		var value = thisElem.val();
//         $(".box").hide();
// 		$("."+value).show();
// 		//localStorage:
// 		localStorage.setItem("option", value);
// 		//Cookies:
// 		//document.cookie="option="+value;
//     });
// 	//localStorage:
// 	var itemValue = localStorage.getItem("option");
// 	if (itemValue !== null) {
// 		$("input[value=\""+itemValue+"\"]").click();
// 	}
//     /*
// 	//Cookies:
// 	var n = document.cookie;
// 	if (n.indexOf("option=") !== -1) {
// 		var cookieValue = n.substring(n.indexOf("option=")+7, n.indexOf(";"))
// 		$("input[value=\""+cookieValue+"\"]").click();
// 	}
//     */
// });

$(document).ready(function () {
  var radios = document.getElementsByName("seconds"); // list of radio buttons
  var val = localStorage.getItem("seconds"); // local storage value
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].value == val) {
      radios[i].checked = true; // marking the required radio as checked
    }
  }
  $('input[name="seconds"]').on("change", function () {
    localStorage.setItem("seconds", $(this).val());
  });
});


// if (score > 10) {
//   levelUp1()
      
// }

function levelUp1(){
  let platformCount = 200; // The overall number of platforms

  // if (doodlerBottomSpace > 100) {
  //   platforms.forEach((platform) => {
  //     platform.bottom -= 14; //The pace in which the platforms are created and are moving
  //     let visual = platform.visual;
  //     visual.style.bottom = platform.bottom + "px";

  //     if (platform.bottom < 10) {
  //       let firstPlatform = platforms[0].visual;
  //       firstPlatform.classList.remove("platform");
  //       platforms.shift();
  //       console.log(platforms);
  //       score++;
  //       var newPlatform = new Platform(600);
  //       platforms.push(newPlatform);
       
  //     }
  //   });
  // }
}

// Sound

var audioBackgroundM = document.getElementById('audioBackgroundM');

document.getElementsByClassName('toggleSoundBtn').addEventListener('click', function (e)
{
    e = e || window.event;
    audioBackgroundM.muted = !audioBackgroundM.muted;
    e.preventDefault();
}, false);

