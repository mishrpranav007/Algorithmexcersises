class Rectangle{
    constructor(sidelength1,sidelength2)
    {
        this.sidelength1 = sidelength1;

        this.sidelength2 = sidelength2;
    }
    getperimeterofrectangle()
    {
        return (2 * (this.sidelength1 + this.sidelength2));
    }
    getareaofrectangle()
    {
           return (this.sidelength1 * this.sidelength2);
    }
}
class Semicircle{

    constructor(radius)
    {
        this.radius = radius;
    }
    getperimeterofsemicircle()
    {
        return (Math.PI * this.radius);
    }
    getareaofsemicircle(radius)
    {
        return ((Math.PI * this.radius * this.radius)/2);
    }

}
class Circle extends Semicircle{
 
       
      getPerimeterofcircle(radius)
      {
          return 2 * this.getperimeterofsemicircle(radius);
      }
      getareaofcircle(radius)
      {
          return 2 * this.getareaofsemicircle(radius);
      }

}
class Square extends Rectangle{

     
    getperimeterofsquare(a)
    {
        return  4 * a;
    }
    getareaofsquare(a)
    {
        return  a * a;
    }

}
 
const Rectangle1 = new Rectangle(3,5);

const Square1  = new Square(4,4);

const Semicircle1 = new Semicircle(3.5);

const Circle1 = new Circle(7);

console.log(Rectangle1.getperimeterofrectangle());

console.log(Rectangle1.getareaofrectangle());

 

console.log(Semicircle1.getperimeterofsemicircle());

console.log(Semicircle1.getareaofsemicircle());



console.log(Circle1.getPerimeterofcircle());

console.log(Circle1.getareaofcircle());

/*

console.log(Square1.getperimeterofsquare());

console.log(Square1.getareaofsquare());


module.exports.getPerimeterofcircle = getPerimeterofcircle;
*/
