interface shape{
    shapename:string,
    printname();
}
class Cone implements shape { 
    shapename: string="cone";
    printname(){
        console.log(this.shapename);

    }
    private r : number;
    private l: number;
    
    constructor(r:number,l:number) {
        this.r =r;
        this.l=l;
    }
    area()
    {return 3.14*this.r*(this.r+this.l)}
  
}   
class sphere implements shape{
    shapename: string="sphere";
    printname(){
        console.log(this.shapename);

    }
    private r:number;
    constructor(r:number) {
    this.r= r;
    }
    area()
    {return 4*3.14*this.r*this.r}
}
class Rectangle implements shape{
    shapename: string="Rectangle";
    printname(){
        console.log(this.shapename)
    }
    private l:number;
    private b: number;
    constructor(l:number, b:number) {
        this.l=l;
        this.b=b;

    }
    area()
    {return this.l*this.b}
}
let o1 = new Cone(2,3);
o1.printname();
console.log(o1.area());
let o2 = new sphere(2);
o2.printname();
console.log(o2.area());
let o3 = new Rectangle(2,5);
o3.printname();
console.log(o3.area());

