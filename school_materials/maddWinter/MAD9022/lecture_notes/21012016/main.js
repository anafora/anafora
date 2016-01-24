/**
 * Created by Min on 2016-01-21.
 */


var canvas = document.getElementById("mainCanvas");

context.fillStyle = "#FFFF00";
context.fillRect(0, 0, 100, 80);
context.clearRect(20, 20, 50, 40);

context.moveTo(100, 0);
context.lineTo(400, 300);
context.stroke();