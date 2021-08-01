var mouse1,mouse2,mouse3,mouse4;
var cat;
var garden;        
function preload() {
    //load the images here
    mouse1Image = loadAnimation("images/mouse1.png");

    mouse2Image = loadAnimation("images/mouse2.png","mouse3.png");
    catImage = loadAnimation("images/cat1.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,500);

    garden.addImage(gardenImage);
    garden.scale = 1.5;
    //create tom and jerry sprites here
    mouse1 = createSprite(100,700,30,30);
    mouse1.addImage(mouse1Image);
    mouse1.scale = 0.1;
    mouse2 = createSprite(200,200,30,30);
    mouse2.addImage(mouse2Image);
    mouse2.scale = 0.1;

    cat = createSprite(900,600,20,20); 
    cat.addImage(catImage);
    cat.scale = 0.1;

}

function draw() {


    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse1.x <(cat.width - mouse1.width)/2 ){
        mouse2.changeAnimation("mosue2.png")

    }

    drawSprites();
}


function keyPressed(){
    if(keyPressed === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouse2);
        mouse.changeAnimation("mouseTeasing");
        cat.changeAnimiation("cat.png");
    }

  //For moving and changing animation write code here


}
