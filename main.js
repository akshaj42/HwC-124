function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(580, 550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background('#000000');
}

function ModelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
}