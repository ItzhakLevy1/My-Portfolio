 /* ----------------------The animated opennng frame  -----------------*/


$("header").addClass("ready");
$("footer").addClass("ready");

// -------------Change the angle of the contact form--------------->
setTimeout(function timer(){

    document.getElementById('toggle').click();
      }, 3000);

// --------------------Make the entire form appear without a time duration--------------->

// setTimeout(function timer(){
// document.getElementById("container").style.opacity = "1"; 

// }, 2000);

// --------------------Make the entire form appear with time duration--------------->
setTimeout(function timer(){
var myopacity = 0;

function MyFadeFunction() {
   if (myopacity<1) {
      myopacity += .075;
     setTimeout(function(){MyFadeFunction()},100);
   }
   document.getElementById("container").style.opacity = myopacity;
}

MyFadeFunction();
}, 2500);
      // --------------The submitBtn button first version-------------->

      // const submitBtn = document.querySelector('div[contenteditable]');

// Get value from element on input events
// submitBtn.addEventListener('input', () => console.log(el.textContent));

// Set some value
// submitBtn.textContent = ''


 
     
      // Swal.fire({
      //   position: 'top-end',
      //   // icon: 'success',
      //   title: 'Your work has been saved',
      //   showConfirmButton: false,
      //   timer: 1500
      // })

      // Swal.fire({
      //   title: 'I would love to hear from you ',
      //   timer: 1500,
      //   imageWidth: 400,
      //   imageHeight: 200,
      //   width: 1200,
      //   height: 1200,
      //   padding: '3em',
      //   background: 'rgba(0,0,0,0)',
      //   backdrop: `
      //    /*  rgba(0,0,123,0.4) */
      //     url("smiley")
      //     left top
      //     no-repeat
      //   `
      // })


     

setTimeout(function timer(){

      Swal.fire({
        title:  '<div id="title" style="color:white; font-size:50px"> Please feel free contacting me at any time.</div>',
        
        text: '',
        // imageUrl: 'https://unsplash.it/400/200',
        imageUrl: './images/smiley-removebg-preview.png',
        imageWidth: 800,
        imageHeight: 400,
        position: 'top-end',
        imageAlt: 'Custom image',
        background: 'rgba(0,0,0,0)',
        // position: 'top-end',
        // icon: 'success',
        showConfirmButton: false,
        timer: 6000,
        backdrop: `
        /*  rgba(0,0,123,0.4) */
         url("smiley")
         left top
         no-repeat
       `,
        showClass: {
          popup: 'animate__animated animate__fadeInLeft'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutLeft'
        }
        // background:rgba(255,0,0,0),
      })
    }, 10000);
    
    //--------------- Enable sending emails using smtp----------->
    function sendEmail(){

      // var nameInput = document.getElementById('nameInput').value;
      // var emailInput = document.getElementById('emailInput').value;
      // var inputMessage = document.getElementById('inputMessage').value;

      Email.send({
        Host : "smtp.gmail.com",
        Username : "atzikl7922@gmail.com",
        Password : "gogetitnow159",
        To : 'atzikl7933@gmail.com',
        From : "atzikl7922@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then((message => alert('message sent successfully'))
    );
    }

    document.getElementById('submitBtn').addEventListener('click', function(){
      sendEmail();
    // setTimeout(function timer(){
      Swal.fire({
        // title:  '<div id="title" style="color:white; font-size:50px">👍 I will get back to you ASAP.</div>',
        title:  '<div id="title" style="color:white; font-size:50px"> I will get back to you ASAP.</div>',
        
        text: '',
        // imageUrl: 'https://unsplash.it/400/200',
        imageUrl: './images/emojiGlasses.png',
        imageWidth: 800,
        imageHeight: 400,
        position: 'top-left',
        imageAlt: 'Custom image',
        background: 'rgba(0,0,0,0)',
        // position: 'top-end',
        // icon: 'success',
        showConfirmButton: false,
        timer: 6000,
        backdrop: `
        /*  rgba(0,0,123,0.4) */
         url("smiley")
         left top
         no-repeat
       `,
        showClass: {
          popup: 'animate__animated animate__fadeInRight'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutRight'
        }
        // background:rgba(255,0,0,0),
      })
    // }, 17000);
  })
// ---------Change the opacity of the background video------------>
  $(document).ready(function(){
    var myVideo = document.getElementById('myVideo');
    $(myVideo).animate({opacity:0},8000);
  });
// -------------Pause the background video------------->
  setTimeout(function timer(){
    myVideo.pause();
  }, 5000);

