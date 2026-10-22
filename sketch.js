
let x, y, d, xDir, yDir, speed, r, g, b; // speed is set up here but not used yet in this version

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  x = random(width);
  y = random(height);
  d = random(30,100);

  xDir = random(-2,2);
  yDir = random(-2,2);

  speed = random(1,10);

  r = 155;
  g = 255;
  b = 200;

}

function draw() {
  randomColor();
background(r,g,b,5);

fill(r,g,b);
circle (x,y,d);

y += yDir*10;
x += xDir*10;

//call the function
keepInCanvas();


}


//// --------- My Functions --------//////
// Declare the function
function keepInCanvas(){

  // keep the ball inside the canvas: flip direction when it hits an edge
  if((x>width)||(x<0))
  {
    //call the function randomColor()
    randomColor();
   xDir = -xDir;
  }
  if((y>height)||(y<0))
  {
    randomColor(); // note how I am calling the function again here - reusable block of code
    yDir = -yDir;
  }
}

// declare the function randomColor()
function randomColor(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}

/*let cloudX;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowHeight, windowWidth);
  background('skyblue');
  textSize(500);

  cloudX = random(0, windowWidth);
}

function draw() {
  clouds(cloudX,200,3);
  background(skyblue, 50);
  
  text('🌈', 50, 500);
  cloudX+= 5;
}

function clouds(originX, originY, size){
  push(); 
  noStroke();
  fill('white');
  translate(originX, originY);
      ellipse(0,-5,50,20*size);
      circle(-20,-10,25*size);
      circle(20,-10,25*size);
      circle(0,-15,30*size);
  pop();
}*/