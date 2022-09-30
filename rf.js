
let canvas1 = document.getElementById('canvas');

// Band.fill(3)
console.log(Band)
var bt = document.getElementById('b1');
var col=123;
console.log(bt)
var contador=0;
function cambio(){
	console.log("hola " + contador)
	contador++;
	ctx1.fillStyle= "#"+col;
	col=col+10
	console.log(bt.textContent)
	bt.textContent="RRU : 60"
	bt.style.backgroundColor="#ffff00"
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
		for(var i=0; i<14;i++){
				ctx1.fillStyle= "#BDBDBD"

				console.log(Band)
				if (Band[i][k][j]==0) {ctx1.fillStyle= "#BDBDBD"};
				if (Band[i][k][j]==1) {ctx1.fillStyle= "#31B404"};
				if (Band[i][k][j]==2){ ctx1.fillStyle= "#FF0000"};
				ctx1.fillRect(30+j*200+k*35,(10 *(1+i))+2,35,8);
				
				ctx1.strokeStyle='#123';
				ctx1.strokeRect(30+j*200+k*35,(10 *(1+i))+2,35,10);
				
		}
	}
}

}

dibujar_bandas()
