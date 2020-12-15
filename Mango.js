class MANGO{
  constructor(x, y, r) {
      var options = {
          'friction':1.0,
          'density':2.0,
          isStatic: false
      }
     
      this.r = r;
      this.x = x;
      this.y = y;
      this.image = loadImage("mango.png");
     this.mango = Bodies.circle(x, y,this.r, options);
      World.add(world, this.mango);
    }
    display(){
      push();
      translate(this.mango.position.x, this.mango.position.y);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image, 0, 0,this.r,this.r);
      pop();
    }
}