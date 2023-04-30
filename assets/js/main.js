var inp = document.querySelector("input");
var word = document.getElementById("text");
var texts = [];

function changeColor(){
   if(inp.value.trim() != ""){
   texts.push(inp.value);
   inp.value = ""; 
   fullList();
}
else{
    alert("Bos buraxmaq olmaz!")
}
}
function fullList(){
    var res = texts.reduce((total, value)=>
        total += `<p>${value}</p>`,''
    ); 
     word.innerHTML = res;
}

function changeColor() {
    document.getElementById("soz").style.color = "red";
    }