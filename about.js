  
  // <---------------The about page text effect--------------->
  

    // $(document).ready(function () {
    
        // function change() { debugger;
        //     randomElements = jQuery("li.glow").get().sort(function(){
        //         return Math.round(Math.random())-0.5
        //     }).slice(0,1)
            
        //     $(randomElements).toggleClass('.glow');
        //     console.log("Change");
        // }
    
        // setInterval(function () {
        //     change();
        // }, 1000);

        // <---------------The about page text effect--------------->
  $(document).ready(function () {
    "use strict";

    var texxt = $("ul li");
    texxt.removeClass("hiddeen");
  

//   var random = Math.floor(Math.random() * 1000);

// var $li = $(".fly-in-text ul li");
// $li.eq(random % $ul.length).addClass("glow");

setRandomClass();
setInterval(function () {
    setRandomClass();
}, 1000);

function setRandomClass() {
    var ul = $("ul");
    var items = ul.find("li");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.removeClass("glow");
    items.eq(random).addClass("glow");
}
    });
 

  
  /*-------------------------------------------------------- The active background on the abaout page p5------------------------------ */

  var i = 0;
  function setup() {
      createCanvas(windowWidth, windowHeight);
      background(0);
          colorMode(HSB, 250);
  }
  
  function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
      background(0);
  }
  
  function draw() {
      noFill();
          var amplitud = height * (sin(i) * 0.1);
          strokeWeight(abs(sin(i))*0.1);
      var space = abs((sin(i)) * 0.1 ) * 100 + 150;
          beginShape();
          curveVertex(-space, 0);
          for (var x = 0; x < width; x += space) {
                  var y = height * ((sin(i)*0.01)+0.5); /* Height */
                  y += sin(i + x * 0.01 + noise(i * 0.1) * 5) * amplitud;
                  y += sin(i + x * 0.02) * amplitud;
                  y += sin(i + x * 0.01 + noise(i * 0.001) * 5) * amplitud;
                  curveVertex(x, y);
          }
          curveVertex(width, y);
          curveVertex(width + space, y);
          endShape();
          var rgb = ~~abs( sin(i) * 100) + 155 ;
          stroke(color(rgb, rgb, rgb, 1000));
          i += 0.01;
  }
  