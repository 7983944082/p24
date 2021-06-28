class Iron{
	constructor(x,y,r)
	{
	
	var options={
		"restitution":0.8,
		"friction":3,
		"denisty":30
	}
		this.x=x;
		this.y=y;
		this.r=r

		this.body=Bodies.rectangle(this.x, this.y,this.r,this.r , options)
		World.add(world, this.body);


	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
           rotate(this.body.angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0,0,this.r,this.r);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}