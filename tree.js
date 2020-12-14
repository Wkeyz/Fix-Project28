class Tree{    
    constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    this.w=450
    this.h=600
    this.t=10
    this.body=Bodies.rectangle(x,y,this.w,this.t, options );
    this.width = width;
this.height = height;
this.image = loadImage("Images/tree.png")
World.add(world,this.body);

}
    display(){
        var pos =this.body.position;
        push ();
        translate(pos.x,pos.y+10);
        imageMode(CENTER);
        fill("brown");
        image(this.image,0,-this.h/2, this.w, this.h);
        pop();

    }
}