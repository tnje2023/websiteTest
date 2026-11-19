let asteroids = [];
let asteroidAmount = 50;

function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

 for(i=0; i<asteroidAmount; i++){
   asteroids.push(new Asteroid(random(50,100), random(50,100)));
 }
  
  print(asteroids);
}

function draw() {
  background(220);

  for(i=asteroids.length-1; i>=0;i--){
    //Start at 49, while i>0 keep subtracting from i
    asteroids[i].showAsteroid();
    asteroids[i].moveAsteroid();
  }
}
//Everything needed for the class goes inside the constructor
//this.variable to make sure a variable within the class is associated with right class
class Asteroid{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 25;
    this.xSpeed = random(3,5);
    this.ySpeed = random(3,5);
    this.hoverColor = color(255,0,0);
    this.baseColor = color(255,255,255);
    this.currentColor = color(255,255,255);
  }

checkMouse(){
  if(dist(mouseX,mouseY,this.x,this.y)<this.radius){
   this.currentColor = this.hoverColor;
  }else{
    this.currentColor = this.baseColor;
  }
}

  moveAsteroid(){
// bouncing function before speed
    if(this.x<this.radius || this.x>width-this.radius){
      this.xSpeed*=-1;
    }
     if(this.y<this.radius || this.y>height-this.radius){
      this.ySpeed*=-1;
     } 
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
//show, or update works as well. Just making a function
  showAsteroid() {
    push()
    fill(this.currentColor)
     textSize(this.radius*2);
     textAlign(CENTER,CENTER)
     text("☄️",this.x,this.y) 
    //circle(this.x,this.y,this.radius*2);
    pop()
  }
}
