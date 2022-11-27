status = "";


function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(600, 500);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}


function draw() {
    image(video, 0, 0, 600, 500);
}