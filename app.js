
var imgNumber = Math.floor(Math.random() * 6) + 1;  // returns number between 1 to 6

var style = document.createElement('style');
style.innerHTML =
'h1 {'+
    'font-size: 20rem;'+
    'letter-spacing: 10px;'+
    'color: white;'+
    'text-transform: uppercase;'+
    'font-weight: 800;'+
    'position: absolute;'+
    'margin: 0;'+
    'transform: translate(-50%, -50%);'+
    'top: 50%;'+
    'left: 50%;'+
    'background: url(img/'+ imgNumber +'.jpg) 50% 50%;'+
    'background-size: cover;'+
    'background-clip: text;'+
    '-webkit-text-fill-color: transparent;'+
    '-webkit-background-clip: text;'+
    '}';

var ref = document.querySelector('script');

ref.parentNode.insertBefore(style, ref);