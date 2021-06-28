class Stone{
	constructor(x,y,r)
	{
	
	var options={
		"restitution":0.8,
		"friction":0.9,
		"denisty":12
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y,this.r,this.r , options)
		World.add(world, this.body);


	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect (0,0,this.r,this.r);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}