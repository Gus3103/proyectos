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
 	if (estado =="BLOK"){
 		Band[Ind][Port][Sector]=2;
 	}
 	if (estado =="MAN"){
 		Band[Ind][Port][Sector]=6;
 	}
 	// else{
 	// 	Band[Ind][Port][Sector]=2;
 	// }
 	if (PlacaRRU.indexOf(RRU)<0){
 		PlacaRRU.push(RRU)
 		PlacaCPRI.push(cpri)
 		Presionados.push(0)
 	}

 	console.log(PlacaCPRI);
}

function Crear_Tabla(){
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	table.appendChild(thead);
	table.appendChild(tbody);
	// cuerpo=document.getElementById("TABLE")
	// console.log(cuerpo)
// Adding the entire table to the body tag
	document.getElementById("body").appendChild(table);

	let row_1 = document.createElement('tr');
	let heading_1 = document.createElement('th');
	heading_1.innerHTML = "FECHA";
	let heading_2 = document.createElement('th');
	heading_2.innerHTML = "ALARMA";
	let heading_3 = document.createElement('th');
	heading_3.innerHTML = "SEVERIDAD";
	let heading_4 = document.createElement('th');
	heading_4.innerHTML = "DETALLE";
	row_1.appendChild(heading_1);
	row_1.appendChild(heading_2);
	row_1.appendChild(heading_3);
	row_1.appendChild(heading_4);
	thead.appendChild(row_1)
	let filas;
	let Col =new Array
	let Valor;
	for (i=1;i<PlacaRRU1.length ; i++){

			Valor=PlacaRRU1[i]["fecha"];
			console.log("valor:"+Valor)
			if(Valor!=null){
				console.log("pasa")
				filas = document.createElement('tr');
				for (j=1;j<5 ; j++){
					

					 Col[j]= document.createElement('td');
					 if(j==1)Valor=PlacaRRU1[i]["fecha"].toISOString();
					 if(j==2)Valor=PlacaRRU1[i]["alarma"]
					 if(j==3)Valor=PlacaRRU1[i]["sev"]
					 if(j==3)Valor=PlacaRRU1[i]["desc"]
					 Col[j].innerHTML = Valor;
					 filas.appendChild(Col[j]);

			
				}
				tbody.appendChild(filas);
			}
	}

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
			cpri:content[i][12],
			estrru:content[i][13],
			ESTUB:content[i][14],
			ESTUM:content[i][15],
			TXUMTP:content[i][16],
			RXUMTP:content[i][17],
			TEMPRRU:content[i][18],
			TEMPUB:content[i][19],
			TEMPUM:content[i][20],
			sev:content[i][21],
			alarma:content[i][22],
			fecha:content[i][23],
			desc:content[i][24]

		}
		
	}
	console.log(PlacaRRU1)
	BandBackup=Band;
	
	dibujar_bandas()
	Crear_Tabla()
	// Etiquetar_botones()
})

