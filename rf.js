
let canvas1 = document.getElementById('canvas');
const Bandas= ["R","L","M","O","P","N","B","T","F","U"]
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



ctx1.fillStyle= "#FFFF00";
ctx1.strokeStyle='#123'
ctx1.lineWidth=1



function dibujar1(){
 ctx1.fillRect(10,10,50,30)
 ctx1.strokeRect(10,40,50,30)
 console.log(content.length)

}



function dibujar_bandas(){


for(var i=0; i<10;i++){
				ctx1.fillStyle= "#123";
				ctx1.fillText(Bandas[i],20,10+10 *(1+i));
				
}	
	
for(var j=0; j<3;j++){
	for(var k=0; k<4;k++){
		for(var i=0; i<10;i++){
				
				ctx1.fillStyle= "#FFFF00";
				ctx1.fillRect(30+j*100+k*20,(10 *(1+i))+2,20,8);
				
				ctx1.strokeStyle='#123';
				ctx1.strokeRect(30+j*100+k*20,(10 *(1+i))+2,20,8);
				
		}
	}
}

}

dibujar_bandas()
