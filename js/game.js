class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;//index
                 fruits = createSprite(random(100, 1000), 0, 100, 100);
                 //fruits.velocityY = 6;
                 drawSprites();
                 //console.log("Location #1 - Index: " + index, index - 1, "Sprite: " + players[index]);//index
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;//index
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     //players[index - 1].x = x;//error
                     //players[index - 1].y = y;//error
                     console.log("Location #2 - Index: " + index, index - 1, "Sprite: " + players[index]);//index
                     if(index === player.index){
                         
                         // to display player name on the basket.
                         //console.log("Location #3 - Index: " + index, index - 1, "Sprite: " + players[index]);//index
                         if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                            player.distance += 10;
                            player.update();
                        }
                        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                            player.distance -= 10;
                            player.update();
                        }
                     }
                    
                     //text to display player score.
                     fill(255);
                     text("Player 1: " + score1, 5, 5);
                     text("Player 2: " + score2, 5, 30);
                 }
                
                 //console.log("Location #4 - Index: " + index, index - 1, "Sprite: " + players[index]);//index
                 

                /*if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }*/
            
                 if (frameCount % 20 === 0) {
                     //fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects. (Use the one in the class project 39)
                     // add the condition to calculate the score. and use update ti update the values in the database.
                     if (fruitGroup.isTouching(player1) || fruitGroup.isTouching(player2)) {
                        fruitGroup.destroyEach();
                    }

                    if (fruitGroup.isTouching(player1)) {
                        score1++;
                        database.ref("/").update({
                            score: score0
                        });
                    }

                    if (fruitGroup.isTouching(player2)) {
                        score2++;
                        database.ref("/").update({
                            score: score1
                        });
                    }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}