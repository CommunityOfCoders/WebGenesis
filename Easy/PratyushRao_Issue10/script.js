function input(a){
    let content=document.body.querySelector('.Que').innerHTML;
    
    if(content!='0'){ content=content+a;} 
    else content =a;
    document.body.querySelector('.Que').innerHTML=content;
    calculate();
}

document.addEventListener()
function inputbr(){
    let content=document.body.querySelector('.Que').innerHTML;
    content=content+'(';
    document.body.querySelector('.Que').innerHTML=content;
    calculate();
}

function inputcbr(){
    let content=document.body.querySelector('.Que').innerHTML;
    content=content+')';
    document.body.querySelector('.Que').innerHTML=content;
    calculate();
}

function allclear(){
    document.body.querySelector('.Que').innerHTML='0';
    document.body.querySelector('.Ans').innerHTML='';
}

function backspace(){
    let content=document.body.querySelector('.Que').innerHTML;
    content=content.slice(0, -1);
    if(content=='') {
        content='0';
        document.body.querySelector('.Ans').innerHTML='';
    }
    document.body.querySelector('.Que').innerHTML=content;
    if(content!='0'){
        calculate();
    }
    
    
}
function calculate(){
    let content=document.body.querySelector('.Que').innerHTML;

    content=content.replaceAll('π','(Math.PI)').replaceAll('e','(Math.E)').replaceAll('×','*').replaceAll('÷','/').replaceAll('sin','Math.sin').replaceAll('cos','Math.cos').replaceAll('tan','Math.tan').replaceAll('asin','Math.asin').replaceAll('acos','Math.acos').replaceAll('atan','Math.atan').replaceAll('√','Math.sqrt(').replaceAll('^','**');
    let countop=(content.match(new RegExp('\\(', "g")) || []).length; 
    let countcl=(content.match(new RegExp('\\)', "g")) || []).length; 
    for (let i = 0; i < (countop-countcl); i++) {
        content=content+')';
    }
    
    try {
        let res=eval(content);
        if(res==NaN || res==Infinity) document.body.querySelector('.Ans').innerHTML='Error';
        else document.body.querySelector('.Ans').innerHTML=res.toString();
    } catch (error) {
        document.body.querySelector('.Ans').innerHTML='Error';
    }    
}