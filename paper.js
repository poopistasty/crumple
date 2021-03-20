class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
    this.image=loadImage("paper.png");
	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image, 0,0,this.w, this.h);
			pop()
			
	}

}