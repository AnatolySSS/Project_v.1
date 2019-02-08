var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");

var img = document.createElement("img");;
    img.src =  "round1.png";
    //img.src =  "http://www.playcast.ru/uploads/2017/04/06/22239012.png"; in case of nuclear war
var xPosition = Math.random() * 330;
var yPosition = Math.random() * 630;

    img.onload = function() {
    context.drawImage(img, xPosition, yPosition, 70, 70);
    };

    // xPosition = function randomPositionX () {
    //               return Math.random() * 330;
    //             }
    //
    // yPosition = function randomPositionY () {
    //               return Math.random() * 630;
    //             }
    //
    //
    //   canvas.addEventListener('mousedown', function () {
    //   xPosition = function randomPositionX () {
    //                    return Math.random() * 330;
    //                  }
    //
    //     yPosition = function randomPositionY () {
    //                   return Math.random() * 630;
    //                 }
    //   });
//