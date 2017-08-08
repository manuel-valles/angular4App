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
