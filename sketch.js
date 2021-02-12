
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bombBo,spaceShip1,spaceShip2,slingshot;
var bombImg,spaceShipImg,slingShotImg;
var database;
var gameState=0;
var allPlayers;
var playerCount;
var form, player, game;
var backgroundImage;
var ships;
var Ground;
var Ground2;
var box1,box2,box3,box4,box5,box6,box7;
var log1,log3,log4,log5;
var score=0;





function preload()
{
   backgroundImage=loadImage("pink_Planet.jpeg")

}

function setup() {
 
  createCanvas(1200, 400);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 
  //Ground.display();
  
  
  

  drawSprites();

 

  
 
}

function mouseDragged(){
  if (gameState===1){
      Matter.Body.setPosition(bombBo.body, {x: mouseX , y: mouseY});

  }
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
if(keyCode === 32){
  bombBo.trajectory=[];
  Matter.Body.setPosition(bombBo.body,{x:200,y:50})
 slingshot.attach(bombBo.body);

}
}
 
   
   