let posX = [50,90,20,50,600,520];
let posY = [50,70,70,70,600,580];
let d = [90,90,90,90,200,170];


function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowHeight, windowWidth);
  background('skyblue');
  textSize(500);
  text('🌈', 0, 500);

}

function draw() {
  noStroke();
  for(let i = 0; i < 6; i++){
      circle(posX[i],posY[i],d[i]);
  }
}
