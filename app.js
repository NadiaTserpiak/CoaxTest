
// let screenSav =  document.getElementById("screen-save"); 
// screenSav.addEventListener("mouseover", mouseOver);
// screenSav.addEventListener("mouseout", function()
// {setTimeout(
//     function(){
//         screenSav.style.opacity = "1";
//     }, 1000)});

// function mouseOver() {
//     screenSav.style.opacity = "0";
// }
 
let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
 
function randomImage() {
    let fileNames = [
      "img/img6.jpeg",
      "img/img1.jpeg",
      "img/img2.jpeg",
      "img/img3.jpeg",
      "img/img4.jpeg",
      "img/img5.jpeg",
    ];
    let randomIndex = Math.floor(Math.random() * fileNames.length);
    let imag = document.getElementById("img");
    imag.style.background = 'url(' + fileNames[randomIndex] + ')';
    imag.style.backgroundRepeat="no-repeat";
    imag.style.animationName="appear";
    
	let randY = Math.floor((Math.random() * height) + 1);
	let randX = Math.floor((Math.random() * width) + 1);
  imag.style.transform = `translate(${randX}px, ${randY}px)`;
  let wim = imag.clientWidth;
  let him = imag.clientHeight;
  console.log(wim);
  
  }
  (function loop() {
    randomImage();   
                                      
    let rand = Math.floor(Math.random() ) + 5000;   
    setTimeout(loop, rand);                             
  }()); 