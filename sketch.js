var batman, batman_image, thunderstorm, thunder_image;
var engine, world;

function preload(){
    batman_image = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png","Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
    thunder_image = loadAnimation("thunderbolt/1.png", "thunderbolt/2.png", "thunderbolt/3.png", "thunderbolt/4.png")
}

function setup(){
    engine = Matter.Engine.create();
    world = engine.world;
   canvas = createCanvas(1600, 800);
   batman = createSprite(500, 500, 20, 20);
   batman.addAnimation("batman_img", batman_image);
   batman.scale = 0.5;
   thunderstorm = createSprite(800, 80, 10, 10);
   thunderstorm.addAnimation("thunder_img", thunder_image);

   for (var i=20; i<1600; i+=10 ){
       drop = new Drop(i, 50);
       drop.display();
   }
}

function draw(){
    Matter.Engine.update(engine);
    background("black");
  drawSprites();  
  
}   

