class paper{
    
    constructor(x,y,w,h){

		var options={
			isStatic:false
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.ellipse(x, y, w, h , options);
		this.image=loadImage("sprites/paper.png")
 		World.add(world, this.body);
		ellipse();
		

	}

}
