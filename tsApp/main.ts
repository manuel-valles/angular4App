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