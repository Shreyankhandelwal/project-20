var cat, mouse;
var backgroundImg
var catImg, mouseImg;
var catImg2, mouseImg2;
var catImg3, mouseImg3;
var catImg4, mouseImg4;
var edges;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
    
    backgroundImg = loadImage("garden.png")

    catImg = loadAnimation("cat1.png")
    mouseImg = loadAnimation("mouse1.png")

    catImg2 = loadAnimation("cat2.png")
    mouseImg2 = loadAnimation("mouse2.png")

    catImg3 = loadAnimation("cat3.png")
    mouseImg3 = loadAnimation("mouse3.png")

    catImg4 = loadAnimation("cat4.png")
    mouseImg4 = loadAnimation("mouse4.png")

    }

function setup(){
    
    createCanvas(1000,800);

    //tom and jerry sprites
    
    cat = createSprite(800,700,20,10);
    cat.addAnimation("image",catImg);
    cat.scale = 0.1;
  

    mouse = createSprite(100,600,20,10)
    mouse.velocityX = 3;
    mouse.velocityY = -3.5;
    mouse.scale = 0.1;
    mouse.addAnimation("mouse-image",mouseImg);

    edges = createEdgeSprites();

}

function draw() {

    background(backgroundImg);


    //Write condition here to evalute if tom and jerry collide     

    if(gameState === PLAY){


            
    if(keyDown(LEFT_ARROW)){

        mouse.changeAnimation("mouse change",mouseImg3);

        cat.changeAnimation("change",catImg3,catImg2)
        cat.velocityX = -2
    }

    if(keyWentUp(LEFT_ARROW)){
        
        mouse.changeAnimation("aa",mouseImg);
        
        cat.changeAnimation("hh",catImg);
        cat.velocityX = 0;
    }
   
    if(keyDown(RIGHT_ARROW)){

        mouse.changeAnimation("bb",mouseImg3);

        cat.changeAnimation("cc",catImg3,catImg2)
        cat.velocityX = 2
    }

    if(keyWentUp(RIGHT_ARROW)){
        
        mouse.changeAnimation("dd",mouseImg);
        
        cat.changeAnimation("ee",catImg);
        cat.velocityX = 0;
    }
   
    if(keyDown(DOWN_ARROW)){

        mouse.changeAnimation("gg",mouseImg3);

        cat.changeAnimation("ii",catImg3,catImg2)
        cat.velocityY = 2;
    }

    if(keyWentUp(DOWN_ARROW)){
        
        mouse.changeAnimation("jj",mouseImg);
        
        cat.changeAnimation("kk",catImg);
        cat.velocityY = 0;
    }

    if(keyDown(UP_ARROW)){

        mouse.changeAnimation("ll",mouseImg3);

        cat.changeAnimation("mm",catImg3,catImg2)
        cat.velocityY = -2;
    }

    if(keyWentUp(UP_ARROW)){
        
        mouse.changeAnimation("nn",mouseImg);
        
        cat.changeAnimation("oo",catImg);
        cat.velocityY = 0;
    }



            if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && 
                mouse.x - cat.x <  cat.width/2 + mouse.width/2 && 
                cat.y - mouse.y < cat.height/2 + mouse.height/2 && 
                mouse.y - cat.y  < cat.height/2 + mouse.height/2 ){
        
                gameState = END;
                }
        
            } else if(gameState === END){

                 
        cat.changeAnimation("cat",catImg4);
        mouse.changeAnimation("mouse",mouseImg2);

        cat.VelocityX = 0
        cat.VelocityY = 0
        mouse.VelocityX = 0
        mouse.VelocityY = 0

   
        cat.bounceOff(edges);
        mouse.bounceOff(edges)



        }

    drawSprites();
}

   


