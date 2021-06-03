function preload(){}

function setup() {
    canvas = createCanvas(350, 350);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 350, 350);
}