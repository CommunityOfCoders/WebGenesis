
let ans = document.querySelector('.display');


function appendValue(value) {
    console.log("Before : ", ans.value)
    ans.value += value;
    console.log("After : ", ans.value)
}

function cleardisplay() {
    ans.value = "";
}

function del() {
    ans.value = ans.value.slice(0,-1);
}

function dtor(degrees) {
    return degrees*(Math.PI/180);
}

function rtod(radians) {
    return radians*(180/Math.PI);
}

function calc() {

    try{
    let expression = ans.value;
    
    expression = expression.replace(/÷/g,'/');
    expression = expression.replace(/x/g,'*'); 
    expression = expression.replace(/sin⁻¹([^)]+)/g,'rtod(Math.asin($1))');
    expression = expression.replace(/cos⁻¹([^)]+)/g,'rtod(Math.acos($1))');
    expression = expression.replace(/tan⁻¹([^)]+)/g,'rtod(Math.atan($1))');
    expression = expression.replace(/\bsin([^)]+)/g,'Math.sin(dtor($1))');
    expression = expression.replace(/\bcos([^)]+)/g,'Math.cos(dtor($1))');
    expression = expression.replace(/\btan([^)]+)/g,'Math.tan(dtor($1))');
    expression = expression.replace(/π/g,'Math.PI');
    expression = expression.replace(/e/g,'Math.E');
    expression = expression.replace(/\^/g,'**');
    expression = expression.replace(/√([^)]+)/g,'Math.sqrt($1)'); 

    let answer = eval(expression);
    
    ans.value = answer;
    }
    
    catch(error) {
        ans.value = "Error";
    }
}

