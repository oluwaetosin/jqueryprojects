$(document).ready(function(){
   var canvas= document.getElementById("canvas");
   canvas.width = 600;
   canvas.height = 600;
  var ctx =  canvas.getContext("2d");
   ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
});

