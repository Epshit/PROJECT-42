var engine, world;
var space,spacecraft,spacecraftx, spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var iss;

var space = "sprites/spacebg.jpg";

function preLoad() {
  this.image = loadImage("sprites/spacecraft1.png"); 
  this.image = loadImage("sprites/spacecraft2.png");
  this.image = loadImage("sprites/spacecraft3.png"); 
  this.image = loadImage("sprites/spacecraft4.png");
  this.image = loadImage("sprites/iss.png"); 
}



function setup() {
  createCanvas(800,400);
 
    spacecraft = spacecraftx + random(-1,1);
    spacecraft.x = spacecraft.x + Random(-1,1);
    spacecraft.x = spacecraft.x + randomNumbers(-1,1);
    spacecraft.x = spacecraft.x + random(-1,1);

    if(spacecraft.y <=(iss.y+180)&& spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }

    if(spacecraft.y <=(iss.y-70)&& spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }

    if(spacecraft.y <=(iss.y+70)&& spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking UnSuccessful!", 200, 300);
    }

    if(spacecraft.y <=(iss.y+70)&& spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }

}

function draw() {
  background(255,255,255);  
  drawSprites();

  space.display();
  spacecraft1.display();
  spacecraft2.display();
  spacecraft3.display();
  spacecraft4.display();
  iss.display();
}