const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var color="red"

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(550,190,240,20)

  box1=new Box(530,150,40,30)
  box2=new Box(490,150,40,30)
  box3=new Box(570,150,40,30)
  box4=new Box(610,150,40,30)

  box5=new Box(510,110,40,30)
  box6=new Box(550,110,40,30)
  box7=new Box(590,110,40,30)

  box8=new Box(530,70,40,30)
  box9=new Box(570,70,40,30)

  box10=new Box(550,30,40,30)

  polygon=new Polygon(50,200,40,40)

  ground2=new Ground(300,350,240,20)

  box11=new Box(280,310,40,30)
  box12=new Box(240,310,40,30)
  box13=new Box(320,310,40,30)
  box14=new Box(360,310,40,30)

  box15=new Box(260,280,40,30)
  box16=new Box(300,280,40,30)
  box17=new Box(340,280,40,30)

  box18=new Box(280,250,40,30)
  box19=new Box(320,250,40,30)

  box20=new Box(300,210,40,30)

  chain=new Slingshot(polygon.body,{x:100,y:200})

 
  Engine.run(engine);
} 

function draw() {
  background(138,235,225); 

  
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  chain.display();
  polygon.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly()
}