const kd = document.querySelectorAll(".key");
const textbox = document.querySelector(".textbox");

let keyPressed = (e) => {
  let kc = e.keyCode;

    if ( (kc >= 65 && kc <= 90) || kc == 32) {
        if (kc == 81) { kd[0].classList.add("key__down"); }
        else if (kc == 87) { kd[1].classList.add("key__down"); }
        else if (kc == 69) { kd[2].classList.add("key__down"); }
        else if (kc == 82) { kd[3].classList.add("key__down"); }
        else if (kc == 84) { kd[4].classList.add("key__down"); }
        else if (kc == 89) { kd[5].classList.add("key__down"); }
        else if (kc == 85) { kd[6].classList.add("key__down"); }
        else if (kc == 73) { kd[7].classList.add("key__down"); }
        else if (kc == 79) { kd[8].classList.add("key__down"); }
        else if (kc == 80) { kd[9].classList.add("key__down"); }
        else if (kc == 65) { kd[10].classList.add("key__down"); }
        else if (kc == 83) { kd[11].classList.add("key__down"); }
        else if (kc == 68) { kd[12].classList.add("key__down"); }
        else if (kc == 70) { kd[13].classList.add("key__down"); }
        else if (kc == 71) { kd[14].classList.add("key__down"); }
        else if (kc == 72) { kd[15].classList.add("key__down"); }
        else if (kc == 74) { kd[16].classList.add("key__down"); }
        else if (kc == 75) { kd[17].classList.add("key__down"); }
        else if (kc == 76) { kd[18].classList.add("key__down"); }
        else if (kc == 90) { kd[19].classList.add("key__down"); }
        else if (kc == 88) { kd[20].classList.add("key__down"); }
        else if (kc == 67) { kd[21].classList.add("key__down"); }
        else if (kc == 86) { kd[22].classList.add("key__down"); }
        else if (kc == 66) { kd[23].classList.add("key__down"); }
        else if (kc == 78) { kd[24].classList.add("key__down"); }
        else if (kc == 77) { kd[25].classList.add("key__down"); }
        else if (kc == 32) {
            kd[26].classList.add("key__down");
            textbox.innerHTML += "&nbsp;";
        }
    }
}

let keyReleased = (e) => {
   let kc = e.keyCode;
  if (kc == 81) { kd[0].classList.remove("key__down"); }
        else if (kc == 87) { kd[1].classList.remove("key__down"); }
        else if (kc == 69) { kd[2].classList.remove("key__down"); }
        else if (kc == 82) { kd[3].classList.remove("key__down"); }
        else if (kc == 84) { kd[4].classList.remove("key__down"); }
        else if (kc == 89) { kd[5].classList.remove("key__down"); }
        else if (kc == 85) { kd[6].classList.remove("key__down"); }
        else if (kc == 73) { kd[7].classList.remove("key__down"); }
        else if (kc == 79) { kd[8].classList.remove("key__down"); }
        else if (kc == 80) { kd[9].classList.remove("key__down"); }
        else if (kc == 65) { kd[10].classList.remove("key__down"); }
        else if (kc == 83) { kd[11].classList.remove("key__down"); }
        else if (kc == 68) { kd[12].classList.remove("key__down"); }
        else if (kc == 70) { kd[13].classList.remove("key__down"); }
        else if (kc == 71) { kd[14].classList.remove("key__down"); }
        else if (kc == 72) { kd[15].classList.remove("key__down"); }
        else if (kc == 74) { kd[16].classList.remove("key__down"); }
        else if (kc == 75) { kd[17].classList.remove("key__down"); }
        else if (kc == 76) { kd[18].classList.remove("key__down"); }
        else if (kc == 90) { kd[19].classList.remove("key__down"); }
        else if (kc == 88) { kd[20].classList.remove("key__down"); }
        else if (kc == 67) { kd[21].classList.remove("key__down"); }
        else if (kc == 86) { kd[22].classList.remove("key__down"); }
        else if (kc == 66) { kd[23].classList.remove("key__down"); }
        else if (kc == 78) { kd[24].classList.remove("key__down"); }
        else if (kc == 77) { kd[25].classList.remove("key__down"); }
        else if (kc == 32) { kd[26].classList.remove("key__down"); }
}


window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);
// window.onload = () => {
//   document.querySelector(".textbox").focus();
// }


// ---------------Sound on key press - The actual sound, This section has to come after the previouse one otherwise it does not work----------->
function playSound(sampleName) {
    var sample = document.getElementById(sampleName);
    sample.play();
    document.getElementById("display").innerHTML=sampleName;
  }
  
  window.addEventListener('keydown', function (event) {
      var k=event.keyCode;
   
      if(k===8 || k===9 || k===13 || k===16 || k===17 || k===18 || k===19 || k===20  || k===27 || k===33 || k===32  || k===34 || k===35 || k===36  || k===37 || k===38 || k===39  || k===40 || k===44 || k===45  || k===46 || k===48 || k===49  || k===50 || k===51 || k===52  || k===53 || k===54 || k===55  || k===56 || k===57 || k===65  || k===66 || k===67 || k===68  || k===69 || k===70 || k===71  || k===72 || k===73 || k===74  || k===75 || k===76 || k===77  || k===78 || k===79 || k===80  || k===81 || k===82 || k===83  || k===84 || k===58 || k===86  || k===87 || k===88 || k===89  || k===90 || k===91 || k===92  || k===93 || k===94 || k===95  || k===96 || k===97 || k===98  || k===99 || k===100 || k===101  || k===102 || k===103 || k===104  || k===105 || k===106 || k===107  || k===108 || k===109 || k===110  || k===111 || k===112 || k===113  || k===114 || k===115 || k===116  || k===117 || k===118 || k===119  || k===120 || k===121 || k===122  || k===123 || k===144 || k===145  || k===182 || k===183 || k===186  || k===187 || k===188 || k===189  || k===190 || k===191 || k===219 || k===220 || k===221 || k===222 ) playSound('Q'); else
    //   if(k===87) playSound('Q'); else
    //   if(k===69) playSound('E'); else
    //   if(k===65) playSound('A'); else
      if(k===83) playSound('S'); else
      if(k===68) playSound('D'); else
      if(k===90) playSound('Z'); else
      if(k===88) playSound('X'); else
      if(k===67) playSound('C');
  })

//   function myFunctionSound(event) {
//   if(event.which || event.keyCode);
//   q.play();
//   }
  (function () { 
      var Q = document.getElementById('Q');
    Q.volume = 1.0;
  })(); 

  var VolumeSample = {
  };
  
  // Gain node needs to be mutated by volume control.
  VolumeSample.gainNode = null;
  
  VolumeSample.play = function() {
    if (!context.createGain)
      context.createGain = context.createGainNode;
    this.gainNode = context.createGain();
    var source = context.createBufferSource();
    source.buffer = BUFFERS.techno;
  
    // Connect source to a gain node
    source.connect(this.gainNode);
    // Connect gain node to destination
    this.gainNode.connect(context.destination);
    // Start playback in a loop
    source.loop = true;
    if (!source.start)
      source.start = source.noteOn;
    source.start(0);
    this.source = source;
  };
  
  VolumeSample.changeVolume = function(element) {
    var volume = element.value;
    var fraction = parseInt(element.value) / parseInt(element.max);
    // Let's use an x*x curve (x-squared) since simple linear (x) does not
    // sound as good.
    this.gainNode.gain.value = fraction * fraction;
  };
  
  VolumeSample.stop = function() {
    if (!this.source.stop)
      this.source.stop = source.noteOff;
    this.source.stop(0);
  };
  
  VolumeSample.toggle = function() {
    this.playing ? this.stop() : this.play();
    this.playing = !this.playing;
  };

  // ---------Go to type 1----------- 
function goToType1(){
  window.location.href = "keyboard1.html";
}

// ---------Go to type 2----------- 
function goToType2(){
  window.location.href = "keyboard2.html";
}

// ---------Go to type 3----------- 
function goToType3(){
window.location.href = "keyboard3.html";
}

    //------------------ Read text------------------->

    function readOutLoud(){
      var textarea1 = document.getElementById('textarea1');
        var msg = new SpeechSynthesisUtterance();
        msg.text = textarea1.value;
        
        // "A Drop Shipping E-commerce Chrome Extension Tool. I have created this project in a form of a chrome extension to boost up performance in the Drop shipping E-commerce world. If you are selling on eBay or Shopify you can now enhance your performance to great extent. This Drop shipping tool can copy the content from all of the text fields of your buyer's shipping information,And paste it into the appropriate fields in your supplier's form. Thus allowing you to fulfill your orders in about one tenth of the time and with virtually zero effort. Watch the video above for more information.";
        window.speechSynthesis.speak(msg);
        // speechSynthesisUtteranceInstance.rate = 5;
        }
        
        //------------------ Stop reading text-------------------->
        function readOutLoudStop(){
          var msg = new SpeechSynthesisUtterance();
          // msg.text = 
          
          // "";
          window.speechSynthesis.cancel(msg);
          }