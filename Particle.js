class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0
        }
        this.r=r
        this.body = Bodies.circle(x, y, r, options);
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body)
        this.many = [];
    }
    display() {
			
		var pos = this.body.position

		push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
		fill(this.color) 
        ellipse(0,0, this.r, this.r);

		pop()
        
    }
}
