//The setup function only happens once
var diam1=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background("##2a0653")
}

//The draw function happens over and over again
function draw() {
  
  textSize(80);
  textFont("Arial");
  text("hello",200,240);
  fill("###ffffff");
  ellipse(mouseX,mouseY,50,50);
  fill("#c6ace8");
  ellipse(random(width),random(height), 50,50);

  
}

  function mousePressed(){
    if(diam1>50){
      diam1=0;
    }else{
      diam1=diam1+5;
    }
  }

