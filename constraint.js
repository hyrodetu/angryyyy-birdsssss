class Chain {

    constructor(body1,body2){

        
        var ConstraintControl= {
            bodyA:body1, 
            bodyB:body2,
            lenght:10,
            stiffness:0.04

        }
        this.constraint=Constraint.create(ConstraintControl)
        World.add(world,this.constraint)




    }
    display(){
        var positionA= this.constraint.bodyA.position
        var positionB= this.constraint.bodyB.position 
        push() 
        strokeWeight(8)
        stroke("red")
        line(positionA.x, positionA.y, positionB.x, positionB.y)
        
        
        
        pop()
       

    }




}