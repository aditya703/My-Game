class WallPair{
    constructor(x1, y1, x2, y2){
        this.wall1 = createSprite(x1, y1, 500, 40);
        this.wall2 = createSprite(x2, y2, 500, 40);
        this.wall1.shapeColor = "white";
        this.wall2.shapeColor = "white";
        this.a = 0;
        this.b = 0;
    }

    display(){
        drawSprites();
    }


    move(){
        if(this.a === 0){
            this.wall1.velocityX = 0;
            this.wall2.velocityX = 0;
            }

            if(true){
                if(this.b === 0){
                    this.wall1.velocityX = 20;
                    this.wall2.velocityX = -20;
                    this.a = 1;
                    this.b = 1;
                    console.log("hello");
                    }
                   

                if(this.wall1.x > 1300){
                    this.wall1.velocityX = -20;
                    this.wall2.velocityX = 20;
                    console.log("here");
                }
                
                if(this.wall1.x < 750){
                    this.b = 0;
                    this.a = 0;
                    this.wall1.velocityX = 0;
                    this.wall2.velocityX = 0;
                    this.wall1.x = 760;
                    this.wall2.x = 235;
                    
                }
            }
    }
}