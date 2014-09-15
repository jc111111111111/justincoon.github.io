var context = document.getElementById("a").getContext("2d");
context.canvas.width = window.innerWidth-20;
context.canvas.height = window.innerHeight-20;
setInterval(draw, 25);
window.onmousemove = mouseMoveHandler;
var mouseDown = false;
var num = 10000;
var dotts = [];
var mouseX = 500;
var mouseY = 500;
for(var i = 0; i < num; i++) {
	dotts[i] = {x:mouseX,  y:mouseY, velX:0, velY:0, size:((i/num)*10)+10, affectability:(((i/num)*10)+10)*.002};
}
function draw() {
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for(var i = 0; i < dotts.length; i++) {
		var dott = dotts[i];
		context.fillRect(dott.x, dott.y, dott.size, dott.size);
		dott.x += dott.velX*dott.affectability;
		dott.y += dott.velY*dott.affectability;
		dott.velX += mouseX-dott.x;
		dott.velY += mouseY-dott.y; 
	}
}
function mouseMoveHandler(event) {
	if(mouseDown) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
}
