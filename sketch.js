
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobobj1,bobobj2,bobobj3,bobobj4,bobobj5;
var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobj1=new bob(100,600,35);
	roof1=new roof(100,100,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobobj1.display();
  roof1.display();
  drawSprites();
 
}



