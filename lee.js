const ArchivoExcel = document.getElementById("excel-ìnput")
var content
// console.log(ArchivoExcel)
const Bandas= ["R","L","M","O","P","N","B","T","F","U","V","W","G","M"]
const DescBand= ["(5G)","(LTE 1700)","(LTE 1900)","(LTE 850)","(LTE 900)","(LTE 700)","(LTE 700)","(LTE 2600)","(LTE 2600)","(3G 1900)","(3G 850)","(3G 900)","(2G 1900)","(2G 850)"]
let Band= new Array(14);
let PlacaRRU =new Array();
let PlacaRRU1 =new Array();
let BandBackup=new Array();
let PlacaCPRI=new Array();
let Primera=0;

let Presionados=new Array()
for (var i=0 ;i<14 ; i++){

	Band[i] =new Array(4)
	for(var j=0 ; j<4;j++){
		Band[i][j]=new Array(5)
		for(var k=0 ;k<5;k++){
			Band[i][j][k]=0;
		}
	}
}

Presionados.fill(0)
function Evaluar(celda,estado,RRU,cpri){
	let Car = celda.length
	let Sector = parseInt(celda[Car-1])-1
	let Port = parseInt(celda[Car-2])-1
	let BandaRf = celda[Car-3]
	let Ind =Bandas.indexOf(BandaRf)
 	// console.log(Ind,Port,Sector)
 	if (estado =="OK"){
 		Band[Ind][Port][Sector]=1;
 	}
 	else{
 		Band[Ind][Port][Sector]=2;
 	}
 	if (PlacaRRU.indexOf(RRU)<0){
 		PlacaRRU.push(RRU)
 		PlacaCPRI.push(cpri)
 		Presionados.push(0)
 	}

 	console.log(PlacaCPRI);
}

ArchivoExcel.addEventListener("change",async function leer(){
	Primera=1;
	content = await readXlsxFile(ArchivoExcel.files[0]);
	console.log(content);
	// console.log(content[0][1]);
	// console.log(content.length);
	for(var i=1; i< content.length;i++){
		// console.log(content[i][0]);
		Evaluar(content[i][0],content[i][1],content[i][3],content[i][12]);
		PlacaRRU1[i]={RRU:content[i][3],
			celda:content[i][0],
			tx1:content[i][4],
			tx2:content[i][5],
			tx3:content[i][6],
			tx4:content[i][7],
			sprut:content[i][8],
			sprux:content[i][9],
			spbut:content[i][10],
			spbux:content[i][11],
			cpri:content[i][12]
		}
		
	}
	console.log(PlacaRRU1)
	BandBackup=Band;
	
	dibujar_bandas()
	// Etiquetar_botones()
})

