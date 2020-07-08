class Hurdle{
  constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 5, 10, options);
      this.width = width;
      this.height = height;
      this.body.velocityX =  -10;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y,this.width, this.height);
      pop();
    }


}