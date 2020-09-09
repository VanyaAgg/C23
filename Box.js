class Box{
    //properties and functions

    constructor(x,y,width,height){
        //inbuilt function which is used to initialize properties
        // add this. before property names 
        var options = {
            restitution: 0.7
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
        console.log(this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;


        //save all the settings
        push();
        translate(pos.x,pos.y);

        rotate(angle);

        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h);
        //revert back to previous changes
        pop();

    }





}