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

    athelete1 = createSprite(50,200);
    athelete2 = createSprite(250,200);
 

    atheletes = [athelete1, athelete2];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("#c68767");
      image(track, 0, 200, displayWidth*5, displayHeight + 200);

      //index of the array
      var index = 0;


      //x and y position of the atheletes
      var y = 200;
      var x;

      for(var plr in allPlayers){

        //add 1 to the index for every loop
        index = index + 1 ;

        //position the atheletes a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the atheletes in y direction
        x = displayHeight - allPlayers[plr].distance;
        atheletes[index-1].y = y;
        atheletes[index-1].x = x;

        atheletes[index-1].velocityX = 10;
        atheletes[index-1].velocityY = 5;

        athelete1.setCollider("circle",0,0,30);
        athelete2.setCollider("circle",0,0,30);

        var ground = new Ground(atheletes[index-1]);


        if (index === player.index){
          
          atheletes[index - 1].shapeColor = "red";
          camera.position.y = atheletes[index-1].y;
          camera.position.x = atheletes[index-1].x
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    
     


    if (keyDown("space")){
      //player.y = player.y - 20;
      atheletes[index-1].velocityY = -5;
    }

    // if(keyIsDown(RIGHT_ARROW) && player.index !== null ){
    //   player.distance +=10
    //   player.body.position.x = player.body.position.x - 5;
    //   player.update();
    //   console.log(player.y);
    // }
    // if(keyIsDown(LEFT_ARROW) && player.index !== null ){
    //   player.distance +=10
    //   player.body.position.x = player.body.position.x + 5;
    //   player.update();
    //   console.log(player.y);
    // }
    

    if (player.distance > 2860) {
      
      gameState = 2;

    }

    drawSprites();
  }

  end(){
    console.log("game ended");

    game.update(2);
    
  }

 
}
