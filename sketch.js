var canvas;
var music;
var box1,box2,box3,box4;
var player
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,580,200,30)
    box1.shapeColor = "blue"

    box2 = createSprite(300,580,200,30)
    box2.shapeColor = "green"

    box3 = createSprite(500,580,200,30)
    box3.shapeColor = "red"

    box4 = createSprite(700,580,200,30)
    box4.shapeColor = "yellow"

   player = createSprite(random(20,750),100,40,40)
   player.shapeColor ="white"
   player.velocityX= 5
   player.velocityY = 5

   edges = createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    player.bounceOff(edges)
     
    if(player.isTouching(box1)){
       player.bounceOff(box1) 
       player.shapeColor="blue"
    }
    if(player.isTouching(box2)){
        player.bounceOff(box2) 
        player.shapeColor="green"
        music.play();
     }
     if(player.isTouching(box3)){
        player.bounceOff(box3) 
        player.shapeColor="red"
     }
     if(player.isTouching(box4)){
        player.velocityX = 0
        player.velocityY = 0
        player.shapeColor = "yellow"
        music.stop()


     }

    drawSprites()
}
