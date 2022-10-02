
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
let EstBot=0;

var x=3
var Etiqueta="";
Etiqueta="b"+x



ctx1.fillStyle= "#FFFF00";
ctx1.strokeStyle='#123'
ctx1.lineWidth=1



function Resaltar(cpri){
	let gab;
	let solt;
	let port;
	let Posx;
	let Posy;
	let OffY;
	let Offx;
	gab=cpri.substring(0,1)
	slot=cpri.substring(4,5)
	port=cpri.substring(6,7)
	console.log("gabinete :"+gab)
	console.log("solt :"+slot)
	console.log("port :"+port)
	Posx=Gabx+63
	
	Posy=Gaby+gab* 180;
	console.log("posy :"+Posy)
	if (slot>3){
		slot=slot-4
		Posx=Gabx+273
	}
	Posy=slot*40+5+Posy
	Posx=Posx+port*33
	console.log("gabinete :"+gab)
	console.log("solt :"+slot,Posy,Posx)
	console.log("port :"+port)
	
	console.log("pasa por 0", EstBot)
		ctx1.strokeStyle='#ffFF00'
		ctx1.lineWidth=3
		ctx1.strokeRect(Posx,Posy,30,33);
		ctx1.lineWidth=1

	// if(EstBot===0){
		
	// 	console.log("pasa por 0", EstBot)
	// 	ctx1.strokeStyle='#00FFFF'
	// 	ctx1.lineWidth=3
	// 	ctx1.strokeRect(5,5,700,700);

	// }
	// else{

		
	// 	console.log("pasa por 1", EstBot)
	// ctx1.strokeStyle='#000000'
	// ctx1.lineWidth=1
	// }
	
}
function dibujar_bandas(){


let Nod =""
let Resaltado =0;
ctx1.fillStyle= "#ffffff";
ctx1.font="25px sans-serif"
if (Primera==1) {
	Nod=PlacaRRU1[1]["celda"]
	console.log("nod:" + Nod)
	Nod=Nod.substring(0,Nod.length-3)
	console.log("nod:" + Nod)
}
ctx1.fillText("NODO : "+Nod,220,25);


for(var i=0; i<14;i++){
				
				ctx1.fillStyle= "#ffffff";
				ctx1.font="10px sans-serif"
				ctx1.fillText(Bandas[i]+" "+DescBand[i],30,16+20 *(1+i)+CeldasY);
				
}

ctx1.fillStyle= "#ffffff";
ctx1.font="15px sans-serif"
ctx1.fillText("SEC 1",150,CeldasY);
ctx1.fillText("SEC 2",350,CeldasY);
ctx1.fillText("SEC 3",550,CeldasY);
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
				if (Band[i][k][j]==4){ 
						ctx1.strokeStyle= "#ffFF00"
						ctx1.lineWidth=5
						ctx1.fillStyle= "#31B404"
						Resaltado=1
				};
				if (Band[i][k][j]==5){
					 ctx1.strokeStyle= "#ffff00"
					 ctx1.lineWidth=5
					 ctx1.fillStyle= "#FF0000"
					 Resaltado=1
				};
				
				
				
				
				ctx1.fillRect(CeldasX+j*200+k*AnchoCelda,(20 *(1+i))+CeldasY+2,AnchoCelda,20);
				if(Resaltado==1){
					ctx1.strokeRect(CeldasX+j*200+k*AnchoCelda+3,(20 *(1+i))+2+CeldasY+3,AnchoCelda-6,14);
					Resaltado =0
				}
				else ctx1.strokeRect(CeldasX+j*200+k*AnchoCelda,(20 *(1+i))+2+CeldasY,AnchoCelda,20);

				ctx1.strokeStyle='#000000';
				ctx1.lineWidth=1
				
		}
	}
}


function Dibujar_RRU(PosX,PosY,Nombre,pos){

	let Roe ;
	ctx1.strokeStyle='#000000'
	ctx1.fillRect(PosX,PosY,140,40);
	ctx1.strokeRect(PosX,PosY,140,40);

	for(var i=0;i<4;i++){
		
		ctx1.strokeRect(PosX+i*35,PosY-15,35,15)
		
		
		if( Primera==1){
			color=ctx1.fillStyle
			ctx1.fillStyle= "#000000"
			if(i==0)Roe=PlacaRRU1[pos]["tx1"];
			if(i==1)Roe=PlacaRRU1[pos]["tx2"];
			if(i==2)Roe=PlacaRRU1[pos]["tx3"];
			if(i==3)Roe=PlacaRRU1[pos]["tx4"];
			
			if(Roe >130) ctx1.fillStyle= "#FF0000"

			else ctx1.fillStyle= "#00ff00"

			if (Roe==0)ctx1.fillStyle= "#BDBDBD"
			ctx1.fillRect(PosX+i*35,PosY-15,35,15);
			ctx1.fillStyle= "#000000"
			ctx1.fillText("R:"+Roe,PosX+i*35+2,PosY-3);
			ctx1.fillStyle=color
		}
	}


	if (Primera==1){
		let a =PlacaRRU1[pos]["sprut"]
		console.log("valor asignado",a)
		console.log(PlacaRRU1[pos]["sprut"])
		if(a<-300) {
			console.log("a:"+ a,"pasa por menor")
			ctx1.fillStyle= "#FF0000"
		}
		else {
			ctx1.fillStyle= "#00ff00"
			console.log("a:"+ a,"pasa por mayor")
		}
	}
	ctx1.fillRect(PosX+20,PosY+40,40,15);
	ctx1.strokeRect(PosX+20,PosY+40,40,15);
	if (Primera==1){
		let a =PlacaRRU1[pos]["sprux"]
		if(a<-300) {
			ctx1.fillStyle= "#FF0000"
			console.log("a:"+ a,"pasa por menor")
		}
		else{
				ctx1.fillStyle= "#00ff00"
				console.log("a:"+ a,"pasa por mayor")
		}
	}
	ctx1.fillRect(PosX+80,PosY+40,40,15);
	ctx1.strokeRect(PosX+80,PosY+40,40,15);
	ctx1.fillStyle= "#123"
	ctx1.font="10px sans-serif"
	ctx1.fillText("RRU : "+Nombre,PosX+10,PosY+10);
	if( Primera==1)ctx1.fillText("T:"+PlacaRRU1[pos]["sprut"],PosX+22,PosY+52);
	if(Primera==1)ctx1.fillText("R:"+PlacaRRU1[pos]["sprux"],PosX+82,PosY+52);
}

function Dibujar_Placas(){
	for (var i=0 ;i<3;i++){
		for (var j=0 ;j<5;j++){
			if (PlacaRRU[j*3+i]===undefined)ctx1.fillStyle= "#BDBDBD"
			else ctx1.fillStyle= "#00ff00"
			if (Presionados[j*3+i]==1) ctx1.fillStyle= "#ffff00"
			Dibujar_RRU(RRUX+i*200,RRUY+j*80,PlacaRRU[j*3+i],j*3+i+1)
		}
	}
}

function Dibujar_Port(x,y){
	ctx1.fillRect(x,y,30,15);
	ctx1.strokeRect(x,y,30,15);
	ctx1.fillStyle= "#000000"
	ctx1.font="9px sans-serif"
	ctx1.fillText("T:-100",x+2,y+12);
	ctx1.fillStyle= "#00ff00"
	ctx1.fillRect(x,y+18,30,15);
	ctx1.strokeRect(x,y+18,30,15);
	ctx1.fillStyle= "#000000"
	ctx1.font="9px sans-serif"
	ctx1.fillText("R:-120",x+2,y+30);

}


function Dibujar_gabinete(x,y,Gab){
	let Cad=""
	let CadG=""
	let CadSlot=""
	let CadPort=""
	let puertos = new Array()
	let Encontrado=0
	ctx1.strokeStyle='#000000'
	ctx1.fillStyle= "#BDBDBD"
	ctx1.fillRect(x,y,60,160);
	ctx1.strokeRect(x,y,60,160);
	// console.log(Gab)
	
	console.log(CadG)
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j <4; j++) {
			Encontrado=0
			puertos=[]
			Cad=Gab+"-0-"+(i*4+j)+"-0"
			// console.log(Cad)
			if (PlacaCPRI.indexOf(Cad)>=0) {
				Encontrado=1
				puertos.push(1)
			}
			Cad=Gab+"-0-"+(i*4+j)+"-1"
		// console.log(Cad)
			if (PlacaCPRI.indexOf(Cad)>=0){
				Encontrado=2
				puertos.push(2)
			} 
				Cad=Gab+"-0-"+(i*4+j)+"-2"
			// console.log(Cad)
			if (PlacaCPRI.indexOf(Cad)>=0){
				Encontrado=3
				puertos.push(3)
				
			} 
				Cad=Gab+"-0-"+(i*4+j)+"-3"
			// console.log(Cad)
			if (PlacaCPRI.indexOf(Cad)>=0){
				Encontrado=4
				puertos.push(4)
			} 
				Cad=Gab+"-0-"+(i*4+j)+"-4"
			// console.log(Cad)
			if (PlacaCPRI.indexOf(Cad)>=0){
				Encontrado=5
				puertos.push(5)
			}
				Cad=Gab+"-0-"+(i*4+j)+"-5"
			// console.log(Cad)
			if (PlacaCPRI.indexOf(Cad)>=0){
				Encontrado=6
				puertos.push(6)
			} 
				// console.log(puertos)
			if(Encontrado>0)	ctx1.fillStyle="#00ff00" ;
			else ctx1.fillStyle="#BDBDBD" ;
			ctx1.fillRect(x+60+i*210,y+j*40,210,40);
			ctx1.strokeRect(x+60+i*210,y+j*40,210,40);

			for(var k=0;k<puertos.length;k++){
				if (puertos[k]>0 )ctx1.fillStyle="#00ff00"
				else ctx1.fillStyle="#BDBDBD" ;	
				Dibujar_Port(x+60+3+i*210+(puertos[k]-1)*33,y+5+j*40)
			}
			
			
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
	let cpri=""
	let RRUcoincidente =new Array()
	for (var i=0 ;i<3;i++){
		for (var j=0 ;j<5;j++){
			if(event.pageX> RRUX+i*200){
				if(event.pageX< RRUX+i*200+140){
					if(event.pageY> 20+RRUY+j*80){
						if(event.pageY< 20+RRUY+j*80+40){
							
							
							Presionados.fill(0)
							Presionados[j*3+i]=1
							cpri=PlacaRRU1[j*3+i+1]["cpri"]
							console.log("cpri:"+cpri)
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
			Dibujar_gabinete(Gabx,Gaby,0)

			Dibujar_gabinete(Gabx,Gaby+180,1)
			console.log(EstBot)
			if (EstBot==1)EstBot=0;
			else EstBot=1;
			Resaltar(cpri)
		}
	}
	console.log(event.pageX)
}
Dibujar_Placas()
Dibujar_gabinete(Gabx,Gaby,0)
Dibujar_gabinete(Gabx,Gaby+180,1)
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

ctx1.fillText("NODO : ",220,25);
dibujar_bandas()


