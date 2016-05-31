function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d");

	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';

	canvas.moveTo(200, 350);
	//canvas.quadraticCurveTo(350,110,450,380);
	canvas.bezierCurveTo(250, 100, 400, 80, 450, 380);
	canvas.stroke();
	
	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';

	canvas.beginPath(); //才不會連在一起
	canvas.moveTo(200,350);
	canvas.lineTo(250,100);
	canvas.lineTo(400,80);
	canvas.lineTo(450,380);
	canvas.stroke();
}

window.addEventListener('load', doFirst, false);