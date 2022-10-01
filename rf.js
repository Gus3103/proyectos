
let canvas1 = document.getElementById('canvas');
ctx1=canvas1.getContext("2d")
// Band.fill(3)
// console.log(Band)
var Botones =new Array();

var x=3
var Etiqueta="";
Etiqueta="b"+x

// // Botones[3] = document.getElementById("b3");
// var col=123;
// // console.log(Botones[3])
// var contador=0;
// function cambio(){
// 	console.log("hola cambio " + contador)
// 	contador++;
// 	ctx1.fillStyle= "#"+col;
// 	col=col+10
	
	
// 	// this.style.backgroundColor="#ffff00"
// 	console.log(this.className)
// 	for(var i =1 ; i <= PlacaRRU.length;i++){
// 		if ("RRU "+i==this.className) Presionados[i-1]=1;
// 		else Presionados[i-1]=0;
// 	}
// 	console.log(Presionados)
// 	Etiquetar_botones()
// }




// for(var i =0 ; i<15 ; i++){
// 	Etiqueta="b"+(i+1)
// 	var func="cambio"+(i+1)
// 	Botones[i]=document.getElementById(Etiqueta);
// 	Botones[i].addEventListener('click',cambio,true)
// 	console.log(Botones[i])
// 	// console.log(Botones[0].textContent)
// }







ctx1.fillStyle= "#FFFF00";
ctx1.strokeStyle='#123'
ctx1.lineWidth=1



// function dibujar1(){
//  ctx1.fillRect(10,10,50,30)
//  ctx1.strokeRect(10,40,50,30)
//  // console.log(content.length)

// }



function dibujar_bandas(){


for(var i=0; i<14;i++){
				ctx1.fillStyle= "#123";
				ctx1.fillText(Bandas[i],20,20+20 *(1+i));
				
}	
	
for(var j=0; j<3;j++){
	for(var k=0; k<4;k++){
		for(var i=0; i<14;i++){
				ctx1.fillStyle= "#BDBDBD"

				// console.log(Band)
				if (Band[i][k][j]==0) {ctx1.fillStyle= "#BDBDBD"};
				if (Band[i][k][j]==1) {ctx1.fillStyle= "#31B404"};
				if (Band[i][k][j]==2){ ctx1.fillStyle= "#FF0000"};
				ctx1.fillRect(30+j*200+k*35,(20 *(1+i))+2,35,18);
				
				ctx1.strokeStyle='#123';
				ctx1.strokeRect(30+j*200+k*35,(20 *(1+i))+2,35,20);

				
		}
	}
}


function Dibujar_RRU(PosX,PosY){
	ctx1.fillStyle= "#00ff00"
	ctx1.strokeStyle='#123'
	ctx1.fillRect(PosX,PosY,140,40);
	ctx1.strokeRect(PosX,PosY,140,40);

	for(var i=0;i<4;i++){
		ctx1.fillRect(PosX+i*35,PosY-10,35,10);
		ctx1.strokeRect(PosX+i*35,PosY-10,35,10)
	}
	ctx1.fillRect(PosX+20,PosY+40,40,10);
	ctx1.fillRect(PosX+80,PosY+40,40,10);
	ctx1.strokeRect(PosX+20,PosY+40,40,10);
	ctx1.strokeRect(PosX+80,PosY+40,40,10);
	ctx1.fillStyle= "#123"
	ctx1.fillText("RRU :80",PosX+10,PosY+10);
}


for (var i=0 ;i<3;i++){
	for (var j=0 ;j<5;j++){
		Dibujar_RRU(30+i*200,400+j*70)
	}
}
Dibujar_RRU(30,400)

function Mover(event){
	for (var i=0 ;i<3;i++){
		for (var j=0 ;j<5;j++){
			if(event.pageX> 30+i*200){
				if(event.pageX< 30+i*200+140){
					if(event.pageY> 400+j*70){
						if(event.pageY< 400+j*70+40){
							console.log("RRU " +(i+j*3+1))
						}
					}
				}
			}
			Dibujar_RRU(30+i*200,400+j*70)
		}
	}
	console.log(event.pageX)
}

document.addEventListener("mousemove", Mover)

}

// function Etiquetar_botones(){

// 	for (var i=0; i<PlacaRRU.length;i++){
// 		// console.log(Botones[i+1].textContent)
// 		Botones[i].textContent="RRU : " +PlacaRRU[i];
// 		if (Presionados[i]==1) Botones[i].style.backgroundColor="#F7FE2E"
// 		else Botones[i].style.backgroundColor="#F2F2F2"

// 	}
// }
dibujar_bandas()
