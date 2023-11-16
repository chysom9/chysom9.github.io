let canvas;
let isDrawing = false;

function setup() {
    canvas = createCanvas(800, 800);
    canvas.mousePressed(startDrawing);
    canvas.mouseReleased(stopDrawing);
    background(0);
}

function draw() {
    if (isDrawing) {
        let brushSize = 15; 
        let drawingColor = color(255); 

        stroke(drawingColor);
        strokeWeight(brushSize);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}
