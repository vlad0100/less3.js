/*let num1 = 2;
let num2 = 5;

console.log(num1 + num2);


if(num1>num2){
    console.log("java script");
}
else{
    console.log("3121231231");
}

for (let i = 0; i<10; i++){
    console.log(i)
}
*/



/*function funcName(nume){
    //code
    nume = "Ion"
    alert("daca dai OK apare informatie importanta" + nume);
    console.log(nume + " loh")
}
funcName();
*/



/*function myFunc(value){
    if(value < 25){
        alert("Less than need(paliubomu ion ii loh)");
    } else if (value == 25){
        alert("You are loh");
    } else{
        alert("More than need");
    }
}
myFunc(25)

let global = 3;

function calculator(a, b){
    let local = a + b + global;
    return local;
}

let res = calculator("2", "4");
console.log(res);*/

/*function calcPlus(a, b){
     return a + b;
}
function calcMinus(a, b){
    return a - b;
}
function calcMultiply(a, b){
    return a * b;
}
function calcDiv(a, b){
    return a / b;
}
let res = null;

function mainFunc(operation, a, b){
    if (operation == "+"){
        res = calcPlus(a, b);
        console.log(res);
    }else if (operation == "-"){
        res = calcMinus(a, b);
        console.log(res)
    }else if (operation == "*"){
        res = calcMultiply(a, b);
        console.log(res)
    }else if (operation == "/"){
        res = calcDiv(a, b);
        console.log(res)
    }
}

mainFunc("+", 2, 4);*/



/*let EmptyArray = []; // array gol
let ArrayWithValue = ["red", "green", "blue"]; // array cu valori*/
/*console.log(ArrayWithValue); // se printeaza toata lista
console.log(ArrayWithValue[0]);
console.log(ArrayWithValue[1]);
console.log(ArrayWithValue[2]);

console.log(ArrayWithValue.length);*/
/*
for (let i = 0; i < ArrayWithValue.length; i++){ // for traditional
    console.log(ArrayWithValue[i]);
}
for(let element of ArrayWithValue){ // for each
    console.log(element)
}

let array = [1];
array.push(2); // add smth in the end of array
array.push(3);
array.push(2);
array.unshift(0); //add smth at the begining of array
array.pop() // delete last element
array.shift() // delete first element
console.log(array);
*/


let multidimensional = [
    [1, 2, 3], //index 0 
    [4, 5, 6], //index 1
    [7, 8, 9] //index 2
];
for (let i = 0; i < multidimensional.length; i++){
    for(let j = 0; j < multidimensional.length; j++){
        console.log(multidimensional[i][j]);
    }
}

