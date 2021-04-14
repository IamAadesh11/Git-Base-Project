class slingshot {

constructor (bodyA, pointB) {
    var options = {

        bodyA: bird.body,
        pointB: pointB,
        
        length: 90,
        stiffness: 0.04
        }
        this.pointB = pointB;
        this.constainet = Constraint.create(options);
        World.add(world,this.constainet);


    }

fly() {

this.constainet.bodyA = null ;
}

   display(){
if (this.constainet.bodyA){

    strokeWeight(5);
    line(this.constainet.bodyA.position.x,this.constainet.bodyA.position.y, this.pointB.x, this.pointB.y);
   }

}


}