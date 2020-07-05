const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, body;

function setup() {
  createCanvas(1366,657);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(680,height,1399,20);
  ground1 = new Ground(390, 470, 250, 10);
  ground2 = new Ground(866, 313, 250, 10);
  stone = new Stone(33, 26, 5, 5);
}

function draw() {
  background(255, 255, 255);

  Engine.update(engine);
  /*
  console.log(mouseX);
  console.log(mouseY);
  */
  
  ground.display();
  ground1.display();
  ground2.display();
  stone.display();
  
  
}