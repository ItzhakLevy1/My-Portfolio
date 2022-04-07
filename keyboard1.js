var audioCoin = document.getElementById('audioCoin');

// document.getElementById('toggleSoundBtn').addEventListener('click', function (e)
// {
//     e = e || window.event;
//     audioCoin.muted = !audioCoin.muted;
//     e.preventDefault();
// }, false);


// $(document).keydown(function(e){
//     if (e.keyCode == 75) { 
//        document.getElementById('audioCoin').play();
//        return false;
//     }
// });

//     //------------ Display which key was clicked ---------->
// window.onkeydown = function(e){
//     document.getElementById("key-pressed").innerHTML = e.key;
//     document.getElementById("key-code").innerHTML = e.keyCode;
// }

// ---------------Sound on key press ----------->
// function playSound(sampleName) {
//     var sample = document.getElementById(sampleName);
//     sample.play();
//     document.getElementById("display").innerHTML=sampleName;
//   }
  
//   window.addEventListener('keydown', function (event) {
//       var k=event.keyCode;
   
//       if(k===8 || k===9 || k===13 || k===16 || k===17 || k===18 || k===19 || k===20  || k===27 || k===33 || k===32  || k===34 || k===35 || k===36  || k===37 || k===38 || k===39  || k===40 || k===44 || k===45  || k===46 || k===48 || k===49  || k===50 || k===51 || k===52  || k===53 || k===54 || k===55  || k===56 || k===57 || k===65  || k===66 || k===67 || k===68  || k===69 || k===70 || k===71  || k===72 || k===73 || k===74  || k===75 || k===76 || k===77  || k===78 || k===79 || k===80  || k===81 || k===82 || k===83  || k===84 || k===58 || k===86  || k===87 || k===88 || k===89  || k===90 || k===91 || k===92  || k===93 || k===94 || k===95  || k===96 || k===97 || k===98  || k===99 || k===100 || k===101  || k===102 || k===103 || k===104  || k===105 || k===106 || k===107  || k===108 || k===109 || k===110  || k===111 || k===112 || k===113  || k===114 || k===115 || k===116  || k===117 || k===118 || k===119  || k===120 || k===121 || k===122  || k===123 || k===144 || k===145  || k===182 || k===183 || k===186  || k===187 || k===188 || k===189  || k===190 || k===191 || k===219 || k===220 || k===221 || k===222 ) playSound('Q'); else
//     //   if(k===87) playSound('Q'); else
//     //   if(k===69) playSound('E'); else
//     //   if(k===65) playSound('A'); else
//       if(k===83) playSound('S'); else
//       if(k===68) playSound('D'); else
//       if(k===90) playSound('Z'); else
//       if(k===88) playSound('X'); else
//       if(k===67) playSound('C');
//   })

// //   function myFunctionSound(event) {
// //   if(event.which || event.keyCode);
// //   q.play();
// //   }
//   (function () { 
//       var Q = document.getElementById('Q');
//     Q.volume = 1.0;
//   })(); 
//   8
//   tab	9
//   enter	13
//   shift	16
//   ctrl	17
//   alt	18
//   pause/break	19
//   caps lock	20
//   escape	27
//   page up	33
//   Space	32
//   page down	34
//   end	35
//   home	36
//   arrow left	37
//   arrow up	38
//   arrow right	39
//   arrow down	40
//   print screen	44
//   insert	45
//   delete	46
//   0	48
//   1	49
//   2	50
//   3	51
//   4	52
//   5	53
//   6	54
//   7	55
//   8	56
//   9	57
//   a	65
//   b	66
//   c	67
//   d	68
//   e	69
//   f	70
//   g	71
//   h	72
//   i	73
//   j	74
//   k	75
//   l	76
//   m	77
//   n	78
//   o	79
//   p	80
//   q	81
//   r	82
//   s	83
//   t	84
//   u	85
//   v	86
//   w	87
//   x	88
//   y	89
//   z	90
//   left window key	91
//   right window key	92
//   select key	93
//   numpad 0	96
//   numpad 1	97
//   numpad 2	98
//   numpad 3	99
//   numpad 4	100
//   numpad 5	101
//   numpad 6	102
//   numpad 7	103
//   numpad 8	104
//   numpad 9	105
//   multiply	106
//   add	107
//   subtract	109
//   decimal point	110
//   divide	111
//   f1	112
//   f2	113
//   f3	114
//   f4	115
//   f5	116
//   f6	117
//   f7	118
//   f8	119
//   f9	120
//   f10	121
//   f11	122
//   f12	123
//   num lock	144
//   scroll lock	145
//   My Computer (multimedia keyboard)	182
//   My Calculator (multimedia keyboard)	183
//   semi-colon	186
//   equal sign	187
//   comma	188
//   dash	189
//   period	190
//   forward slash	191
//   open bracket	219
//   back slash	220
//   close braket	221
//   single quote	222

        function getKey (e) {
            var location = e.location;
            var selector;
            if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                selector = ['[data-key="' + e.keyCode + '-R"]']
            } else {
                var code = e.keyCode || e.which;
                selector = [
                    '[data-key="' + code + '"]',
                    '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
                ].join(',');
            }
            return document.querySelector(selector);
        }

        function pressKey (char) {
            var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
            if (!key) {
                return console.warn('No key for', char);
            }
            key.setAttribute('data-pressed', 'on');
            setTimeout(function () {
                key.removeAttribute('data-pressed');
            }, 100);
        }

        // var h1 = document.querySelector('h1');
        // var originalQueue = h1.innerHTML;
        // var queue = h1.innerHTML;

        // function next () { 
        //     var c = queue[0];
        //     queue = queue.slice(1);
        //     h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
        //     pressKey(c);
        //     if (queue.length) {
        //         setTimeout(next, Math.random() * 50 + 1); /*-- The speed for the h1 automatic typing--<  */
        //     }
        // }

        // h1.innerHTML = "&nbsp;";
        // setTimeout(next, 500); /* -----The delay before the automatic typing -----*/




        // document.body.addEventListener('keydown', function (e) {
        //     var key = getKey(e);
        //     if (!key) {
        //         return console.warn('No key for', e.keyCode);
        //     }

        //     key.setAttribute('data-pressed', 'on');
        // });

        // document.body.addEventListener('keyup', function (e) {
        //     var key = getKey(e);
        //     key && key.removeAttribute('data-pressed');
        // });

        // function size () {
        //     var size = keyboard.parentNode.clientWidth / 90;
        //     keyboard.style.fontSize = size + 'px';
        //     console.log(size);
        // }

        // var keyboard = document.querySelector('.keyboard');
        // window.addEventListener('resize', function (e) {
        //     size();
        // });
        // size();

        function init () {

          wait(1000).then(() => {
            clearText()
            typeText(' ').then(typeLoop)
          })
          
          function typeLoop() {
            typeText('Type (or copy/paste) your text into the textarea,\n Press the Play button on the right to read the text out loud.\n You can also switch theme/Keyboard using the option menu on the left.')
              // .then(() => wait(2000))
              // .then(() => removeText('CodePen!'))
              // .then(() => typeText('World!'))
              // .then(() => wait(2000))
              // .then(() => removeText('World!'))
              // .then(typeLoop)
          }
          
        }
        
        
        // Source code 🚩
        
        const elementNode = document.getElementById('type-text')
        let text = ''
        
        function updateNode () {
          elementNode.innerText = text
        }
        
        function pushCharacter (character) {
          text += character
          updateNode()
        }
        
        function popCharacter () {
          text = text.slice(0, text.length -1)
          updateNode()
        }
        
        function clearText () {
          text = ''
          updateNode()
        }
        
        
        function wait (time) {
          if (time === undefined) {
            const randomMsInterval = 50 * Math.random()  /* Speed */
            time = randomMsInterval < 50 ? 10 : randomMsInterval
          }
          
          return new Promise(resolve => {
            setTimeout(() => {
              requestAnimationFrame(resolve)
            }, time)
          })
        }
        
        function typeCharacter (character) {
          return new Promise(resolve => {
            pushCharacter(character)
            wait().then(resolve)
          })
        }
        
        function removeCharacter () {
          return new Promise(resolve => {
            popCharacter()
            wait().then(resolve)
          })
        }
        
        function typeText (text) {
          return new Promise(resolve => {
            
            function type ([ character, ...text ]) {
              typeCharacter(character)
                .then(() => {
                  if (text.length) type(text)
                  else resolve()
                })
            }
            
            type(text)
          })
        }
        
        function removeText ({ length:amount }) {
          return new Promise(resolve => {
            
            function remove (count) {
              removeCharacter()
                .then(() => {
                  if (count > 1) remove(count - 1)
                  else resolve()
                })
            }
            
            remove(amount)
          })
        }
        
        
        init()
        

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

        //-------- Allow to Select only 1 check option------->

        function check(input)
    {
    	
    	var checkboxes = document.getElementsByClassName("radioCheck");
    	
    	for(var i = 0; i < checkboxes.length; i++)
    	{
    		//uncheck all
    		if(checkboxes[i].checked == true)
    		{
    			checkboxes[i].checked = false;
    		}
    	}
    	
    	//set checked of clicked object checkbox
    	if(input.checked == true)
    	{
    		input.checked = false;
    	}
    	else
    	{
    		input.checked = true;
    	}	
    }

    //----------------- Function when checked------------>
    $(document).ready(function(){
      function updateSource(source, src) {
        var source = $(source);
    
        source.attr('src', src).appendTo(source.parent());
    }
    
    updateSource($("./audio/TRIMMED_typewriter.wav"))
        // "./audio/TRIMMED_typewriter.wav");
  });

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
      

        // <!--------------------------- The speach settings mune -------------->
