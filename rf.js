
let canvas1 = document.getElementById('canvas');
ctx1=canvas1.getContext("2d")
// Band.fill(3)
console.log(ctx1)
var Botones =new Array();
let CeldasY=50;
let CeldasX=100;
let RRUY = 400;
let RRUX = 100;
let AnchoCelda=35;
let Cuenta=0
let Gabx=100;
let Gaby=800

var x=3
var Etiqueta="";
Etiqueta="b"+x



ctx1.fillStyle= "#FFFF00";
ctx1.strokeStyle='#123'
ctx1.lineWidth=1





function dibujar_bandas(){


for(var i=0; i<14;i++){
				
				ctx1.fillStyle= "#ffffff";
				ctx1.font="10px sans-serif"
				ctx1.fillText(Bandas[i]+" "+DescBand[i],30,16+20 *(1+i)+CeldasY);
				
}

ctx1.fillStyle= "#ffffff";
ctx1.font="10px sans-serif"

ctx1.fillText("PORTADORAS",3,CeldasY+20);
for (var i=0;i<3;i++){
	for(var j=0;j<4;j++){
		
				ctx1.fillText(j+1,CeldasX+10+i*200+35*j,CeldasY+20);
	}
}	
	
for(var j=0; j<3;j++){
	for(var k=0; k<4;k++){
		for(var i=0; i<14;i++){
				ctx1.fillStyle= "#BDBDBD"

				// console.log(Band)
				if (Band[i][k][j]==0) {ctx1.fillStyle= "#BDBDBD"};
				if (Band[i][k][j]==1) {ctx1.fillStyle= "#31B404"};
				if (Band[i][k][j]==2){ ctx1.fillStyle= "#FF0000"};
				if (Band[i][k][j]==3){ ctx1.fillStyle= "#FFFF00"};
				if (Band[i][k][j]==4){ ctx1.fillStyle= "#FFFF00"};
				if (Band[i][k][j]==5){ ctx1.fillStyle= "#Ffff00"};
				ctx1.fillRect(CeldasX+j*200+k*AnchoCelda,(20 *(1+i))+CeldasY+2,AnchoCelda,18);
				
				ctx1.strokeStyle='#123';
				ctx1.strokeRect(CeldasX+j*200+k*AnchoCelda,(20 *(1+i))+2+CeldasY,AnchoCelda,20);

				
		}
	}
}


function Dibujar_RRU(PosX,PosY,Nombre){

	
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
	ctx1.font="10px sans-serif"
	ctx1.fillText("RRU : "+Nombre,PosX+10,PosY+10);
}

function Dibujar_Placas(){
	for (var i=0 ;i<3;i++){
		for (var j=0 ;j<5;j++){
			if (PlacaRRU[j*3+i]===undefined)ctx1.fillStyle= "#BDBDBD"
			else ctx1.fillStyle= "#00ff00"
			if (Presionados[j*3+i]==1) ctx1.fillStyle= "#ffff00"
			Dibujar_RRU(RRUX+i*200,RRUY+j*70,PlacaRRU[j*3+i])
		}
	}
}



function Dibujar_gabinete(x,y){
	ctx1.strokeStyle='#123'
	ctx1.fillStyle= "#BDBDBD"
	ctx1.fillRect(x,y,60,160);
	ctx1.strokeRect(x,y,60,160);
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j <4; j++) {
			ctx1.fillRect(x+60+i*210,y+j*40,210,40);
			ctx1.strokeRect(x+60+i*210,y+j*40,210,40);
		}
	}
	ctx1.fillRect(x+480,y,60,160);
	ctx1.strokeRect(x+480,y,60,160);
}


function asociar_celda(celda){
	let Car = celda.length
	let Sector = parseInt(celda[Car-1])-1
	let Port = parseInt(celda[Car-2])-1
	let BandaRf = celda[Car-3]
	let Ind =Bandas.indexOf(BandaRf)

 	if (Band[Ind][Port][Sector]==0){
 		Band[Ind][Port][Sector]=3;
 	}
 	if (Band[Ind][Port][Sector]==1){

 		Band[Ind][Port][Sector]=4;
 	}
 	if (Band[Ind][Port][Sector]==2){
 		Band[Ind][Port][Sector]=5;
 	}
}

function Mover(event){
	event.stopImmediatePropagation();
	// document.removeEventListener("click", Mover)
	Cuenta++
	console.log("cuenta")
	console.log(Cuenta)
	let Ix=0;
	let RRUcoincidente =new Array()
	for (var i=0 ;i<3;i++){
		for (var j=0 ;j<5;j++){
			if(event.pageX> RRUX+i*200){
				if(event.pageX< RRUX+i*200+140){
					if(event.pageY> 20+RRUY+j*70){
						if(event.pageY< 20+RRUY+j*70+40){
							
							
							Presionados.fill(0)
							Presionados[j*3+i]=1

							RRUcoincidente=PlacaRRU1.filter(PlacaRRU1 => PlacaRRU1.RRU==PlacaRRU[j*3+i])
							for(var j=0; j<3;j++){
								for(var k=0; k<4;k++){
									for(var i=0; i<14;i++){
										if (Band[i][k][j]==3){
									 		Band[i][k][j]=0;
									 	}
									 	if (Band[i][k][j]==4){

									 		Band[i][k][j]=1;
									 	}
									 	if (Band[i][k][j]==5){
									 		Band[i][k][j]=2;
									 	}
									}
								}
							}
							
							Ix=RRUcoincidente.length
							for(var z=0; z<Ix;z++){
								asociar_celda(RRUcoincidente[z]["celda"])
							}
							dibujar_bandas()

						}
					}
				}
			}
			
			
			Dibujar_Placas()

		}
	}
	console.log(event.pageX)
}
Dibujar_Placas()
Dibujar_gabinete(Gabx,Gaby)
Dibujar_gabinete(Gabx,Gaby+180)
document.addEventListener("click", Mover)

}

// function Etiquetar_botones(){

// 	for (var i=0; i<PlacaRRU.length;i++){
// 		// console.log(Botones[i+1].textContent)
// 		Botones[i].textContent="RRU : " +PlacaRRU[i];
// 		if (Presionados[i]==1) Botones[i].style.backgroundColor="#F7FE2E"
// 		else Botones[i].style.backgroundColor="#F2F2F2"

// 	}
// }
ctx1.fillStyle= "#ffffff";
ctx1.font="25px sans-serif"
ctx1.fillText("NODO : MGYBCN",220,25);
dibujar_bandas()


