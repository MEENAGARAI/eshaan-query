var ghost ,ghostimg
var invisG
var game="play"
function preload(){
//ghostimg = loadImage("ghost-standing.png")
}

function setup() {
    createCanvas(600,400)
 ghost = createSprite(200,300,50,50)
 //ghost.addImage("ghost",ghostimg)
 //ghost.scale=0.4
 invisG = createSprite(300,360,600,15)
 //invisG.visible=false
}

function draw() {
    
    background("orange")
    
    if(game==="play"){
if(keyDown("up")){
    //console.log(ghost.y)
ghost.velocityY=-9

}
ghost.velocityY=ghost.velocityY+1
    }
    else if(game===end){


    }
    
    ghost.collide(invisG);
    
drawSprites();
}