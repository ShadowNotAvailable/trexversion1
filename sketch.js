//variables globales
var trex ,trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  
//precargando imagenes
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
//tamaño de pantalla del juego
  createCanvas(600,200)
  
  //crear sprite de Trex
trex = createSprite (50,180,20,50);
trex.addAnimation("running", trex_running);

//tamaño y posicion del trex
trex.scale = 0.5; 
trex.x = 50

//sprite de suelo
ground = createSprite (200,180,400,20);

}

//background
function draw(){
background("white")
//hacer que el trex salte al presionar el espacio
if (keyDown("space")){
trex.velocityY= -10;
}

//gravedad del trex cuando salta
trex.velocityY = trex.velocityY + 0.8;
//evitar que el trex se caiga
trex.collide(ground);
drawSprites();
}



