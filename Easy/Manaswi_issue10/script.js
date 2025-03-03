

let ip=document.querySelector("input");
let buttons = document.querySelectorAll("button");

let res=()=>{
    let exp=ip.value;
   exp= exp.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
   exp= exp.replace(/sin\(([^)]+)\)/g, 'Math.sin($1)');
   exp= exp.replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');
   exp= exp.replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');
   exp= exp.replace(/sin⁻¹\(([^)]+)\)/g, 'Math.asin($1)');
   exp= exp.replace(/cos⁻¹\(([^)]+)\)/g, 'Math.acos($1)');
   exp= exp.replace(/tan⁻¹\(([^)]+)\)/g, 'Math.atan($1)');
  
    console.log(exp);
    try{
       ip.value=eval(exp);
    }
    catch(e){
        console.log(e);
        ip.value="Error";

    }
}
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        if(button.innerText=="X"){
            ip.value = ip.value.slice(0, -1);
        }else
        if(button.innerText=="e"){
            ip.value+=Math.E;
        }else
        if(button.innerText=="pi"){
            ip.value+=Math.PI;
        }else if(button.innerText=="^"){
            ip.value+="**";
        }else if(button.innerText=="clear"){
        ip.value="";
       }else if(button.innerText=="="){
            res();
       } 
        else if (button.innerText == "sin") {
            ip.value += "sin(";
        } else if (button.innerText == "cos") {
            ip.value += "cos(";
        } else if (button.innerText == "tan") {
            ip.value += "tan(";
        } else if (button.innerText === "sin-1") {
            ip.value += "sin⁻¹(";
        } else if (button.innerText === "cos-1") {
            ip.value += "cos⁻¹(";
        } else if (button.innerText === "tan-1") {
            ip.value += "tan⁻¹(";
        } else if (button.innerText == "sqrt") {
            ip.value += "sqrt(";
        } else if (button.innerText == ")") {
            ip.value += ")";
        } else {
            ip.value += button.innerText;
        }
        button.style.backgroundColor = "#2A004E";
        setTimeout(() => {
            button.style.backgroundColor = "#511D42";
        }, 150);
    });

});






   
  