const ArchivoExcel = document.getElementById("excel-ìnput")
var content
// console.log(ArchivoExcel)
const Bandas= ["R","L","M","O","P","N","B","T","F","U","V","W","G","M"]
let Band= new Array(14);
let PlacaRRU =new Array();
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
function Evaluar(celda,estado,RRU){
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
 		Presionados.push(0)
 	}
 	// console.log(PlacaRRU);
}

ArchivoExcel.addEventListener("change",async function leer(){
	content = await readXlsxFile(ArchivoExcel.files[0]);
	// console.log(content);
	// console.log(content[0][1]);
	// console.log(content.length);
	for(var i=1; i< content.length;i++){
		// console.log(content[i][0]);
		Evaluar(content[i][0],content[i][1],content[i][3]);
	}
	dibujar_bandas()
	Etiquetar_botones()
})

