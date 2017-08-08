function log(message){
	console.log(message);
}

var message = 'Hello World!';

log(message);

// KEYWORDS LET vs VAR
function doVar(){
	for (var i =0; i<5; i++){
		console.log(i);
	}
	console.log('Finally: '+i);
}

doVar();

function doLet(){
	for (let j =0; j<5; j++){
		console.log(j);
	}
	console.log('Finally: '+j);
}

doLet();

let count = 5;
count = 'a';

let a;
a=1;
a=true;
a='a';

let b: number;
b=2;
b=false;
b='b';

// TYPES VARIABLES
let c: number;
let d: boolean;
let e: string;
let f: any;
let g: number[] = [1,2,3];
let h: any[] = [1,true, 'a'];
const ColorRed = 0;
const ColorGreen =1;
const ColorBlue=2;
enum Color {Red = 0, Green=1, Blue=2, Purple=3};
let background = Color.Red;

// TYPE ASSERTIONS
let message2;
message2 = 'abc';
(<string>message2).endsWith('c');
(message2 as string).endsWith('c');

// ARROW FUNCTIONS
let log2 = function(message){
	console.log(message);
}

let arrowLog = (message) => {
	console.log(message);
}

let arrowLog2 = (message) => console.log(message);

// INTERFACE
interface Point{
	x: number;
	y: number
}

let drawPoint = (point: Point) => { 
	//...
}

// CLASS
// From a interface with 2 properties and 1 function
interface Point2{
	x: number;
	y: number;
	draw: () => void
}
// To a CLASS with 2 fields and 2 methods.
class Point3{
	x: number;
	y: number;

	draw(){
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}

	getDistance(another: Point3){
		// ...
	}
}

let point = new Point3();
point.x = 1;
point.y = 2;
point.draw();

// CONSTRUCTOR
class Point4{
	x: number;
	y: number;

	constructor(x?: number, y?: number){
		this.x = x;
		this.y = y;
	}

	draw(){
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}
}

let point4 = new Point4(1,2);
point4.draw();

// ACCESS MODIFIERS
class Point5{
	constructor(private x?: number, private y?: number){
	}

	draw(){
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}
}

let point5 = new Point5(1,2);
// point5.x=1;
point5.draw();

// PROPERTY
// From functions
class Point6{
	constructor(private x?: number, private y?: number){
	}

	draw(){
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}

	getX(){
		return this.x;
	}

	setX(value){
		if(value<0)
			throw new Error('value must be greater than 0.');
		this.x = value;
	}
}

let point6 = new Point6(1,2);
let x = point6.getX();
point6.setX(-10);
point6.draw();
// To properties
class Point7{
	constructor(private x?: number, private y?: number){
	}

	draw(){
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}

	get X(){
		return this.x;
	}

	set X(value){
		if(value<0)
			throw new Error('value must be greater than 0.');
		this.x = value;
	}
}

let point7 = new Point7(1,2);
let x7 = point7.X;
point7.X = 10;
point7.draw();

// MODULES
import {Point8} from './point8';

let point8 = new Point7(1,2);
let x8 = point8.X;
point8.X = 10;
point8.draw();