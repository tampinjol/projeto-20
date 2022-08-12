const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var balll;
var paulin;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var balll_options = {

    restution: 2.5,
    frictionAir: 0.01
  }

  var paulin_options ={

		restution: 1.5,
		frictionAir: 0.04

  }

  
  balll = Bodies.circle(300,10,20,balll_options);
  World.add(world,balll);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  paulin = Bodies.rectangle(200,12,45,45,paulin_options);
  World.add(world,paulin);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  ellipse(balll.position.x,balll.position.y,20);
  rect(paulin.position.x,paulin.position.y,45,45)
}