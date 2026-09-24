let posX = [50,20, 25, 100];
let posY = [50,20,25,100];
let d = [12,5,50,60];


function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(100, 100);
  background('skyblue');
  textSize(100);
  text('🌈', 0, 100);

}

function draw() {

  for(let i = 0; i < 3; i++){
      circle(posX[i],posY[i],d[i]);
  }
}
