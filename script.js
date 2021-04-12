function sin(){
    document.getElementById("result").value = Math.sin(document.getElementById("result").value);
}
function cos(){
    document.getElementById("result").value = Math.cos(document.getElementById("result").value);
}
function tan(){
    document.getElementById("result").value = Math.tan(document.getElementById("result").value);
}
function backSpace(){
    let a = document.getElementById("result").value;
    document.getElementById("result").value = a.substr(0, a.length-1);
}
function square(){
    document.getElementById("result").value = Math.pow(document.getElementById("result").value, 2);
}
function qubbed(){
    document.getElementById("result").value = Math.pow(document.getElementById("result").value, 3);
}
function sqrt2(){
    document.getElementById("result").value = Math.pow(document.getElementById("result").value, 1/2);
}
function sqrt3(){
    document.getElementById("result").value = Math.pow(document.getElementById("result").value, 1/3);
}
function number(value){
    document.getElementById("result").value += value
}
function clr(value){
    document.getElementById("result").value = value;
}
function equal(){
    document.getElementById("result").value = eval(document.getElementById("result").value);
}
