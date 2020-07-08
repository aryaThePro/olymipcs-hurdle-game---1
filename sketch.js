const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var atheletes, athelete1, athelete2, athelete3, athelete4;
var track;

var hurdle;

var ground;

function preload(){
  track = loadImage("track.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight + 50);
  database = firebase.database();


	engine = Engine.create();
	world = engine.world;

  game = new Game();
  game.getState();
  game.start();

  


  Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    spawnHurdles();
 
  }
  if (gameState === 2){
    game.update(2);
    
  }

  if (gameState ===3){
    game.update(3);
    text("Your game is paused, press the start button to resume", displayWidth/2-100 , displayHeight/2);
  }

  if (frameCount % 10 === 0){
    var i = i + 1000;
    hurdle = new Hurdle(displayWidth*2, 50);
  }

  Hurdle.display;
  drawSprites();
}

function spawnHurdles(){
  if (frameCount % 10 === 10){
    var hurdle = new Hurdle(displayWidth, athelets[index - 1]);
    
    
  }
}