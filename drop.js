class Drop{
    constructor(x, y) {
        var options = {
             isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.circle(x, y, 5, options);
        
       
        Matter.World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("skyblue");
        ellipseMode(RADIUS);
        ellipse(0, 0, 5, 5);
        pop();
      }
}