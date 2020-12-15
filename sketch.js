
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rock,mango1,tree,boy,mango2,mango3,mango4,mango5,mango6,mango7,mango8,backGround,launcher;
function preload()
{
  backGround = loadImage("bg.png");
  boy = loadImage("boy.png");
  tree = loadImage("tree.png")
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;
 rock = new ROCK(160,550,40);

 mango1 = new MANGO(750,450,50);
 mango2=new MANGO(820,400,50);
 mango3=new MANGO(850,300,50);
 mango4=new MANGO(1000,250,50);
 mango5=new MANGO(950,400,50);
 mango6=new MANGO(1100,350,50);
 mango7=new MANGO(950,300,50);
 mango8=new MANGO(930,200,50);

 launcher = new LAUNCHER(rock.body,{x: 160,y:550});


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(backGround);
 image(boy,130,470,200,300);
 imageMode(CENTER);
 image(tree,900,450,500,600)


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  launcher.display();

  rock.display();
  
 detectCollision(rock,mango1);
 detectCollision(rock,mango2);
 detectCollision(rock,mango3);
 detectCollision(rock,mango4);
 detectCollision(rock,mango5);
 detectCollision(rock,mango6);
 detectCollision(rock,mango7);
 detectCollision(rock,mango8);
 
}

function mouseDragged(){

  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});

}
function mouseReleased() {

  launcher.fly();

}

function detectCollision(lstone,lmango){

mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y);

if(distance<=lmango.width+lstone.height){
  Matter.Body.setStatic(lmango.body,false);
}

}


