class Stone{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
            density: 1.2
			}
		this.radius=radius;
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(x,y,(radius-20)/1.1, options);
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push();
		translate(pos.x, pos.y);
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(RADIUS);
		image(this.image, 0,0,this.radius, this.radius)
		pop();
 }
}