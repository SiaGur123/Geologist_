
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  hammer = new Hammer(10,100);
  iron = new Iron(300,350); 
    ground = new Ground(600,height,1200,20)
    stone = new Stone(700,320,100,100);


  
}


function draw() {
  background("lightBlue");
  Engine.update(engine)

  stone.display();
  ground.display();
  hammer.display();
  iron.display();







  drawSprites();
 
}



