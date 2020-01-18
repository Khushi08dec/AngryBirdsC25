class Log extends BaseClass{
    constructor(x, y, height, angle) {

      super(x,y,20,height,angle); //constants in super command
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("wood2.png");
      
    };
   
  };
  