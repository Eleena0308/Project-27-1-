const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	bobObject1 = new Bob(220,300,10);
	bobObject2 = new Bob(260,300,10);
	bobObject3 = new Bob(300,300,10);
	bobObject4 = new Bob(340,300,10);
	bobObject5 = new Bob(380,300,10);

	roofObject = new Roof(300,100,500,50);

	var bobDiameter = 10

	rope1 = new Rope(bobObject1.body,roofObject.body, - bobDiameter*4, 0);
	rope2 = new Rope(bobObject2.body,roofObject.body, - bobDiameter*2, 0);
	rope3 = new Rope(bobObject3.body,roofObject.body, - 0, 0);
	rope4 = new Rope(bobObject4.body,roofObject.body, bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body,roofObject.body, bobDiameter*4, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

    drawSprites();
 
}



