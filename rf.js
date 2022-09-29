
let canvas1 = document.getElementById('canvas');
var bt = document.getElementById('b1');
var col=123;
console.log(bt)
var contador=0;
function cambio(){
	console.log("hola " + contador)
	contador++;
	ctx1.fillStyle= "#"+col;
	col=col+10
	// ctx1.clear
	dibujar1();
}
bt.addEventListener('click',cambio,true)

ctx1=canvas1.getContext("2d")



ctx1.fillStyle= "#141414";
ctx1.strokeStyle='#123'
ctx1.lineWidth=1



function dibujar1(){
 ctx1.fillRect(10,10,50,30)
 ctx1.strokeRect(10,40,50,30)
 

}

dibujar1()