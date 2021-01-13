class CHAIN{

    constructor(bodyA,bodyB,offsetX,offsetY){
         
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
           /* length:5,
            stiffness:0.1*/
        }

        this.body=Constraint.create(options);
        World.add(world,this.body);

        
    }

    display(){
        var posa=this.body.bodyA.position;
        var posb=this.body.bodyB.position;

       // var posbx=posb+this.offsetX;
       // var posby=posb+this.offsetY;

        strokeWeight(2);
        var anchor1x=posa.x;
        var anchor1y=posa.y;
        var anchor2x=posb.x+this.offsetX;
        var anchor2y=posb.y+this.offsetY;
        line (anchor1x,anchor1y,anchor2x,anchor2y);
    }
}