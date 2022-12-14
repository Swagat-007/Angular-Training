var Cone = /** @class */ (function () {
    function Cone(r, l) {
        this.shapename = "cone";
        this.r = r;
        this.l = l;
    }
    Cone.prototype.printname = function () {
        console.log(this.shapename);
    };
    Cone.prototype.area = function () { return 3.14 * this.r * (this.r + this.l); };
    return Cone;
}());
var sphere = /** @class */ (function () {
    function sphere(r) {
        this.shapename = "sphere";
        this.r = r;
    }
    sphere.prototype.printname = function () {
        console.log(this.shapename);
    };
    sphere.prototype.area = function () { return 4 * 3.14 * this.r * this.r; };
    return sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.shapename = "Rectangle";
        this.l = l;
        this.b = b;
    }
    Rectangle.prototype.printname = function () {
        console.log(this.shapename);
    };
    Rectangle.prototype.area = function () { return this.l * this.b; };
    return Rectangle;
}());
var o1 = new Cone(2, 3);
o1.printname();
console.log(o1.area());
var o2 = new sphere(2);
o2.printname();
console.log(o2.area());
var o3 = new Rectangle(2, 5);
o3.printname();
console.log(o3.area());
