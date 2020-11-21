const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird1;
var ground1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,550,70,70);
    box2 = new Box(1100,550,70,70);
    box3 = new Box(900,470,70,70);
    box4 = new Box(1100,470,70,70);
    box5 = new Box(1000,420,70,70);
    log1 = new Log(1000,520,300,PI/2);
    log2 = new Log(1000,450,300,PI/2);
    log3 = new Log(950,350,150,PI/7);
    log4 = new Log(1050,350,150,PI/-7);
    ground1 = new Ground(600,height,1200,20)
    pig1 = new Pig(1000,550);
    pig2 = new Pig(1000,470);
    bird1 = new Bird(300,300);
   

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}