class roofclass{

    constructor(x,y,width,height){
        
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        this.width = width;
        this.height = height;
                
        World.add(world,this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER);
        fill('grey');
        rect(0,0, this.width, this.height);
        pop();
    }


}