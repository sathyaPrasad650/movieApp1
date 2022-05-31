//// slide show
let imagesDiv = document.querySelector("#slideshow");

var imagesArr = [
  "https://wallpapercave.com/wp/wp6691137.jpg",
  "https://wallpapercave.com/wp/wp6988375.jpg",
  "https://wallpapercave.com/wp/wp6988365.jpg",
  "https://wallpapercave.com/wp/wp1816325.jpg",
  "https://wallpapercave.com/uwp/uwp1627274.jpeg",
  "https://wallpapercave.com/wp/wp2552602.png",
  "https://wallpapercave.com/dwp1x/ZaIF4KJ.jpg",
  "https://wallpapercave.com/wp/uXheq6i.jpg",
  "https://wallpapercave.com/dwp1x/wp10495976.jpg",
];
// console.log(imagesArr[0]);
var i = 0;
let id;
function start() {
  let img = document.createElement("img");
  id = setInterval(function () {
    if (i == imagesArr.length) {
      i = 0;
    }
    imagesDiv.innerHTML = null;
    img.src = imagesArr[i];
    imagesDiv.append(img);
    i++;
  }, 2000);
}
start();


// stop();
// function stop() {
//   clearInterval(id);
// }
