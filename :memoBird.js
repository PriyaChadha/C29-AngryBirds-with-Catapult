class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png")mnnm;
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mousm  meY;
    super.display();
  }
}
