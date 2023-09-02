Webcam.set ({
    width:350,
    height:300,
  Image_format:"png",png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach("#camera")
 function take_snapchot(){
  Webcam.snap(function(data_uri){
document.getElementById ("resultado").innerHTML="<img id='snapchot'src='"+data_uri+"'/>";
  });
 }
 console.log ("ml5 version",ml5.version);
 classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/gNkvutm7s/model.json",modelLoaded)
 function modelLoaded(){
  console.log ("modelocargado")
 }
 function check_snapchot(){
  img=document.getElementById("snapchot");
  classifier.classify(img,gotResult);
 }
 function gotResult (error,results){
  if (error){
    console.error (error)
  }else {
    console.log (results)
  document.getElementById("nombre").innerHTML=results[0].label;
document.getElementById("porcentaje").innerHTML=results[0].confidence.toFixed(3);
}

 }