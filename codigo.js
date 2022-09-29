let canvas = document.getElementById('canvas')
// canvas="hola"
ctx=canvas.getContext("2d")

console.log(ctx)

ctx.fillStyle= '#ffff00'
ctx.strokeStyle='#123'
ctx.lineWidth=1

function dibujar(){
ctx.fillRect(10,10,50,30)
// ctx.strokeRect(10,40,50,30)
ctx.beginPath();

ctx.arc(100,50,40,0,3.14,true);
ctx.fill();
ctx.stroke();


ctx.beginPath();

ctx.arc(100,100,40,10*Math.PI/180,120*Math.PI/180,false);


ctx.arc(100,100,30,120*Math.PI/180,10*Math.PI/180,true);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle= '#00ffff'
ctx.beginPath();

ctx.arc(100,100,30,10*Math.PI/180,120*Math.PI/180,false);


ctx.arc(100,100,20,120*Math.PI/180,10*Math.PI/180,true);
ctx.closePath();
ctx.fill();
ctx.stroke();

}

dibujar();