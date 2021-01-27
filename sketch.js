a = 0;
b = 0;
rand = 0;
i = 400;

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);

	player = createSprite(500, 600, 40, 40);
	player.shapeColor = "white";
	ground = createSprite(width/2, 670, width, 15);
	ground.shapeColor = "white";

	//wall1 = new WallPair(760, 400, 235, 400);
	wallArray = [];

	for(var g = 0; g > 5; g++){
	i -= 200;		
	wallArray[g] = new WallPair(760, i, 235, i);
	}

  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  player.velocityY += 1.1;
  player.collide(ground);



	for(var y = 0; y > wallArray.length; y++){
	wallArray[y].move(rand);
	}

    //wall1.move(rand);

    camera.position.y = player.y;

   drawSprites();

}

function keyPressed(){
	if(keyCode === 32){
		player.velocityY = -15;
	}
}

