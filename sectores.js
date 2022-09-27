let canvas = document.getElementById('canvas')
// canvas="hola"
ctx=canvas.getContext("2d")

console.log(ctx)

ctx.fillStyle= '#ffff00'
ctx.strokeStyle='#123'
ctx.lineWidth=1

function dibujar(){
// ctx.fillRect(10,10,50,30)
// ctx.strokeRect(10,40,50,30)
// ctx.beginPath();

// ctx.arc(100,50,40,0,3.14,true);
// ctx.fill();
// ctx.stroke();


ctx.beginPath();

let Xcentro=675;
let Ycentro = 325;
let ColorSector= ["red","green","#00fff0","#01fff0","#02fff0","#f3fff0"];
let Radio=300;


ctx.arc(Xcentro,Ycentro,300,10*Math.PI/180,120*Math.PI/180,false);


ctx.arc(Xcentro,Ycentro,300-20,120*Math.PI/180,10*Math.PI/180,true);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle= '#00ffff'
ctx.fillStyle= '#0000ff'
ctx.font="20px Arial"


for (var i = 0; i < 6; i++) {
	let Constradio=20;
	for(var j =0 ; j<6 ;j++){

		ctx.beginPath();
	
		ctx.fillStyle= ColorSector[i];
		
		ctx.arc(Xcentro,Ycentro,Radio-20*i,60*j*Math.PI/180,60*(j+1)*Math.PI/180,false);
		ctx.arc(Xcentro,Ycentro,Radio-20*(i+1),60*(j+1)*Math.PI/180,60*j*Math.PI/180,true);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		


	}
	

}
ctx.fillStyle="black";
var j=5;
var i=2;

ctx.translate(675,325);
// ctx.rotate(60*Math.PI/180);

// ctx.rotate(-60*(j+1)*Math.PI/180);



for (var i = 0; i < 6; i++) {
	
	for(var j =0 ; j<6 ;j++){

		ctx.rotate(60*(j+1)*Math.PI/180);
		ctx.fillText(i,0,Radio-20*(i));
		ctx.rotate(-60*(j+1)*Math.PI/180);
	}
}

 }

dibujar();