function setup(){
video=createCapture(VIDEO);
video.size(500,500);

canvas=createCanvas(500,500);
canvas.position(560,100);
var posenet=ml5.poseNet(video,modaloaded);
posenet.on("pose",getpose);
}

function modaloaded(){
console.log("posenet is initialized");
}

function getpose(result){
if(result.length>0){

}}