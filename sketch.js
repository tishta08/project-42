var issImg
var spacebg
var spacecraft1
var spacecraft2
var spacecraft3
var spacecraft4
var hasDocked = false
var spacecraft
var iss


function preload(){
issImg = loadImage("images/iss.png")
spacebg = loadImage("images/spacebg.jpg")
spacecraft1 = loadImage("images/spacecraft1.png")
spacecraft2 = loadImage("images/spacecraft2.png")
spacecraft3 = loadImage("images/spacecraft3.png")
spacecraft4 = loadImage("images/spacecraft4.png")


}



function setup() {
  createCanvas(600,350);
  
  iss = createSprite(330,130)
  iss.addImage(issImg)
  spacecraft = createSprite(285,240)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.15
  iss.scale = 0.35
}



function draw() {
  background(spacebg);  
  if(!hasDocked){
  spacecraft.x= spacecraft.x + random(-1,1)
  
 
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y -2
  }
  if(keyDown("LEFT_ARROW")){
   spacecraft.addImage(spacecraft4)
   spacecraft.x= spacecraft.x-1
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft3)
    spacecraft.x= spacecraft.x+1
  }
  if(keyDown("DOWN_AAROW")){
    spacecraft.addImage(spacecraft2)


  }

  }
  if(spacecraft.y<=iss.y+60 && spacecraft.x<=iss.x-10){
    hasDocked = true
    textSize (30)
    fill("white")
    text("docking sucessful", 200,300)
  }







  drawSprites();
  

}
