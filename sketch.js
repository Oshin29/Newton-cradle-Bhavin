
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	roof = new roofclass(400,160,300,20);
	bob3 = new bobclass(400,575,80);
	bob2 = new bobclass(360,575,80);
	bob1 = new bobclass(300,575,80);
	bob4 = new bobclass(440,575,80);
	bob5 = new bobclass(480,575,80);
	
	rope1 = new ropeclass(bob1.body,roof.body,-80,0);
	rope2 = new ropeclass(bob2.body,roof.body,-40,0);
	rope3 = new ropeclass(bob3.body,roof.body,0,0);
	rope4 = new ropeclass(bob4.body,roof.body,40,0);
	rope5 = new ropeclass(bob5.body,roof.body,80,0);
  
}
function draw() {
  rectMode(CENTER);
  background('green');
  
  roof.display();
  bob3.display();
  bob2.display();
  bob1.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-95});

	}
}




