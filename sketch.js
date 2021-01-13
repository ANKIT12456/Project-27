
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new ROOF(400,100,700,25);
	bob =new BOB(160,500);
	bob1=new BOB(240,500);
	bob2=new BOB(320,500);
	bob3=new BOB(400,500);
	bob4=new BOB(480,500);
	bob5=new BOB(560,500);
	bob6=new BOB(640,500);

	rope1=new CHAIN(bob.body,roof.body,-80*3,0);
	rope2=new CHAIN(bob1.body,roof.body,-80*2,0);
	rope3=new CHAIN(bob2.body,roof.body,-80*1,0);
	rope4=new CHAIN(bob3.body,roof.body,-80*0,0);
	rope5=new CHAIN(bob4.body,roof.body,80*1,0);
	rope6=new CHAIN(bob5.body,roof.body,80*2,0);
	rope7=new CHAIN(bob6.body,roof.body,80*3,0);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");

  roof.show();
  bob.present ();
  bob1.present();
  bob2.present();
  bob3.present();
  bob4.present();
  bob5.present();
  bob6.present();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-70});

	}
}



