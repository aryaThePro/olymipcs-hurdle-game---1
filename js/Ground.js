class Ground{

    constructor(y){
        var ground_options={
            isStatic : true

          }
          
          this.ground = Bodies.rectangle(0,y,10000,20,ground_options)
          World.add(world,this.ground);
          this.visibilty = false;
    }
    display(){
        
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}