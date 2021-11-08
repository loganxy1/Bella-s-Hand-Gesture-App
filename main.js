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
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ANHo4qTDS/model.json', modelLoaded);

function modelLoaded(){
    console.log("ml5 is initialized");
}

function predict(){
    img = document.getElementById("captured_image");;
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("gesture_name").innerHTML = "Gesture Name: "+results[0].label;
        
        if(results[0].label=="Peace"){
            document.getElementById("gesture_meaning").innerHTML = peace_2;
        }
        else if(results[0].label=="Thumbs Up"){
            document.getElementById("gesture_meaning").innerHTML = good_job_2;
        }
        else if(results[0].label=="Neck Yourself"){
            document.getElementById("gesture_meaning").innerHTML = neck_yourself_2;
        }
    }
}

neck_yourself = "Gesture Name: Okay/Neck Yourself";
neck_yourself_2 = " Gesture Meaning: Okay. If shown above head or below waist it means neck yourself and you have to slap the back of your head";

good_job = "Gesture Name: Thumbs Up";
good_job_2 = "Gesture Meaning: Good job";

peace = "Gesture Name: Peace";
peace_2 = "Gesture Meaning: Peace. This Gesture is usually used as a pose";

function speak()
{
    synth = window.speechSynthesis;
    something = results[0].label;
    utterThis = new speechSynthesisUtterance(something);
    synth.speak(utterThis);
}
