var gameState=0;
var playerCount;
var form, player, game;
var database;


function setup(){
  database = firebase.database();
  createCanvas(400,400)
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
    drawSprites();
  
}

