noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{ 
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialised!');
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be ="+difference+"px";
    fill('#ffc0cb');
    stroke('#ffc0cb');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
        {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("noseX =" +noseX +"noseY =" +noseY);
         leftWristX = results[0].pose.leftWristX.x;
         rightWristX = results[0].pose.leftWristX.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX =" + leftWristX +"rightWristX = "+ rightWristX+"difference = "+difference 
);
        }
    }        