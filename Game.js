class Game {
    constructor(){
  
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }

      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        bombBo=new bomb(100,250);
        slingshot = new SlingShot(bombBo.body,{x:200, y:50});
        spaceShip1 = new spaceship(810,310);
        spaceShip2= new spaceship(810,310);
        ships=[spaceShip1,spaceShip2];
        Ground = new ground(70,368,400,300);
        Ground2=new ground(820,400,1100,100);

        box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    log1 = new Log(810,100,300,20, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   

    //log3 =  new Log(810,60,20, PI/2);

    box5 = new Box(810,40,70,70);
    //log3 = new Log(810,1,300,20, PI/2);

      }       

      play(){
        form.hide();
        
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,103));
          image(backgroundImage, 0,0,1200, 400);
          
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 175 ;
          var y;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
         
           
           // console.log(index, player.index)
           //ships[index-1].x = x;
           //ships[index-1].y = y;
           
            if (index === player.index){
              stroke(10);
              fill("red");
              ellipse(x,y,60,60);
              ships[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = ships[index-1].y;
            }
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
        
    
        if(this.Visiblity>1){
          gameState = 2;
        }

       bombBo.display();
       spaceShip1.display();
       spaceShip2.display();
       slingshot.display();
       Ground2.display();
       box1.display();
       box2.display();
       box3.display();
       box4.display();
       box5.display();
       log1.display();
       //log3.display();
       //log4.display();
       //log5.display();
       fill("white");
       stroke("white")
       text("Score: "+score,1100,30);

       Ground.display();
       console.log(gameState)
        drawSprites();
      }
    }
    