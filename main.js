Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image">';
    });
}

console.log("ml5.version:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ANHo4qTDS/model.json');