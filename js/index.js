var chess = document.getElementById('chess');
var ctx = chess.getContext('2d');
var logo = new Image();
var me = true;
var chessBorad = [];
for(var i = 0; i < 15; i++){
	chessBorad[i] = [];
	for(var j = 0; j < 15; j++){
		chessBorad[i][j] = 0;
	}
}
logo.src = "image/mutou.jpg";
ctx.strokeStyle = "#BFBFBF";
logo.onload = function(){
	ctx.drawImage(logo,0,0,450,450);
	drawChessBoard();
}	
var drawChessBoard = function(){
	for(var i = 0; i < 15; i++){
		ctx.moveTo(15 + i * 30, 15);
		ctx.lineTo(15 + i * 30, 435);
		ctx.stroke();
		ctx.moveTo(15, 15 + i * 30);
		ctx.lineTo(435, 15 + i * 30);
		ctx.stroke();
	}
} 
var oneStep = function(i, j, me){
	ctx.beginPath();
	ctx.arc(15 + i * 30,15 + j * 30,13,0,2 * Math.PI);
	ctx.closePath();
	var gradient = ctx.createRadialGradient(15 + i * 30 + 2,15 + j * 30 -2,13,15 + i * 30 + 2,15 + j * 30 -2,0);
	if(me){
		gradient.addColorStop(0,"#0a0a0a");
		gradient.addColorStop(1,"#636766");
	}else{
		gradient.addColorStop(0,"#d1d1d1");
		gradient.addColorStop(1,"#f9f9f9");
	}

	ctx.fillStyle = gradient;
	ctx.fill();
}
chess.onclick = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);
	if(chessBorad[i][j] == 0){
		oneStep(i,j,me);
		if(me == true){
			chessBorad[i][j] = 1;
		}
		else{
			chessBorad[i][j] = 2;
		}
		me = !me;

	}
	
}
