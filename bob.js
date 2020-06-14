class Bob {
     constructor(x,y,R) {
       var options = {
           //isStatic:true,
           restitution:1.0,
           friction:0,
           density:0.8,
       }
       this.body = Bodies.circle(x,y,R,options);
       this.R = R;
       //this.image = loadImage("paper.png");
       World.add(world, this.body);
         }
     display(){
       var pos =this.body.position;
       rectMode(RADIUS);
       fill("red");
       ellipse(pos.x,pos.y, this.R, this.R);
       //imageMode (CENTER);
       //image(this.image,50,710,this.R,this.R);
     }
   };