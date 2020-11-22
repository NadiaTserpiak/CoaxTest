
let screenSav = document.getElementById("screen-save");
screenSav.addEventListener("mouseover", mouseOver);
screenSav.addEventListener("mouseout", function () {
    setTimeout(
        function () {
            document.body.style.visibility = "visible";
            screenSav.style.opacity = "1";
            imag.style.display = "block";
        }, 10000)
});

function mouseOver() {
    screenSav.style.opacity = "0";
    imag.style.display = "none";
    document.body.style.visibility = "hidden";

}
const imag = document.getElementById("img");
let wim = imag.clientWidth;
let him = imag.clientHeight;

let height = screenSav.clientHeight - 730;
let width = screenSav.clientWidth - 600;

function randomImage() {
    let fileNames = [
        "img/img1.jpeg",
        "img/img2.jpeg",
        "img/img3.jpeg",
        "img/img4.jpeg",
        "img/img5.jpeg",
    ];
    let randomIndex = Math.floor(Math.random() * fileNames.length);
    imag.style.background = 'url(' + fileNames[randomIndex] + ')';
    imag.style.backgroundRepeat = "no-repeat";
    imag.style.animationName = "appear";

    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    imag.style.transform = `translate(${randX}px, ${randY}px)`;
}
(function loop() {
    randomImage();
    // let rand = Math.floor(Math.random() ) + 6000;   
    setTimeout(loop, 5000);
}());

