"use strict";
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
context.canvas.width = window.innerWidth-20;
context.canvas.height = window.innerHeight-20;
setInterval(draw, 25);
window.onmousemove = mouseMoveHandler;
var mouseDown = false;
var num = 5000;
var dotts = [];
var mouseX = 500;
var mouseY = 500;
for(var i = 0; i < num; i++)
{
	dotts[i] = {x:mouseX,  y:mouseY, 
		    velX:0, velY:0, 
		    size:((i/num)*10)+10,
		    color:("rgb("+(((1-i)/num)*255)+","+(((1-i)/num)*255)+","+(((1-i)/num)*255)+")")};
}
function draw()
{
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for(var i = 0; i < dotts.length; i++)
	{
		var dott = dotts[i];
		context.fillStyle = dott.color;
		context.fillRect(dott.x, dott.y, dott.size, dott.size);
		dott.x += dott.velX*dott.size;
		dott.y += dott.velY*dott.size;
		dott.velX += (mouseX-dott.x)*.002;
		dott.velY += (mouseY-dott.y)*.002; 
	}
}

function mouseMoveHandler(event)
{
	if(mouseDown)
	{
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
}
