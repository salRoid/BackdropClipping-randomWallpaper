
var imgNumber = Math.floor(Math.random() * 6) + 1;  // returns number between 1 to 6

let heading = document.querySelector('h1');
console.log(imgNumber);
heading.style.backgroundImage = `url(img/${imgNumber}.jpg)`;