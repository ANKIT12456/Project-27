class BOB{

    constructor(x,y){

        var bob_option={
            isStatic:false,
            restitution:1.2,
            friction: 0.1,
            density: 0.6
        }
        this.body=Bodies.circle(x,y,40,bob_option);
        World.add(world,this.body);
    }

    present(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
        pop();
    }
}