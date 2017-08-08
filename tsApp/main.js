function log(message) {
    console.log(message);
}
var message = 'Hello World!';
log(message);
// KEYWORDS LET vs VAR
function doVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doVar();
function doLet() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log('Finally: ' + j);
}
doLet();
var count = 5;
count = 'a';
var a;
a = 1;
a = true;
a = 'a';
var b;
b = 2;
b = false;
b = 'b';
// TYPES VARIABLES
var c;
var d;
var e;
var f;
var g = [1, 2, 3];
var h = [1, true, 'a'];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var background = Color.Red;
// TYPE ASSERTIONS
var message2;
message2 = 'abc';
message2.endsWith('c');
message2.endsWith('c');
// ARROW FUNCTIONS
var log2 = function (message) {
    console.log(message);
};
var arrowLog = function (message) {
    console.log(message);
};
var arrowLog2 = function (message) { return console.log(message); };
var drawPoint = function (point) {
    //...
};
// To a CLASS with 2 fields and 2 methods.
var Point3 = (function () {
    function Point3() {
    }
    Point3.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point3.prototype.getDistance = function (another) {
        // ...
    };
    return Point3;
}());
var point = new Point3();
point.x = 1;
point.y = 2;
point.draw();
// CONSTRUCTOR
var Point4 = (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point4;
}());
var point4 = new Point4(1, 2);
point4.draw();
// ACCESS MODIFIERS
var Point5 = (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point5;
}());
var point5 = new Point5(1, 2);
// point5.x=1;
point5.draw();
// PROPERTY
// From functions
var Point6 = (function () {
    function Point6(x, y) {
        this.x = x;
        this.y = y;
    }
    Point6.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point6.prototype.getX = function () {
        return this.x;
    };
    Point6.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('value must be greater than 0.');
        this.x = value;
    };
    return Point6;
}());
var point6 = new Point6(1, 2);
var x = point6.getX();
point6.setX(-10);
point6.draw();
// To properties
var Point7 = (function () {
    function Point7(x, y) {
        this.x = x;
        this.y = y;
    }
    Point7.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point7.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value must be greater than 0.');
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point7;
}());
var point7 = new Point7(1, 2);
var x7 = point7.X;
point7.X = 10;
point7.draw();
