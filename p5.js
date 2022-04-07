// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="style.css">
//     <script defer src="jquerymin.js"></script>
//     <script defer src="project1.js"></script>
//     <script defer src="main.js"></script>
//     <script defer src="sweetalert2min.js"></script>
//   <title>p5</title>
// </head>
// <body>
 
// <script>
var flower;


function setup() {
  createCanvas(400, 400);
  flower = {
    name: "sunflower",
    col: color(200, 220, 0)
}
  
}

function draw() {
  background(0);
  
  fill(flower.col);
  text(flower.name, 10, 50);
}
 
// </script>
// </body>

// </html>
