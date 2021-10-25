// Animation Intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 300
let rectSize = 80;

requestAnimationFrame(loop);
function loop() {
    // Update Variables
    rectX += Math.random() * 20 - 10;
    rectSize += Math.random() * 200 - 100;

    // Draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    // Draw a square
    ctx.fillStyle = "orange";
    ctx.fillRect(rectX, 150, rectSize, rectSize);

    requestAnimationFrame(loop)
}