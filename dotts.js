"use strict";
var context = document.getElementById("a").getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
setInterval(draw, 25);
window.onmousemove = mouseMoveHandler;

var num = 5000;
var dotts = [];
var mouseX = window.innerWidth/2-20;
var mouseY = window.innerHeight/2-20;
var mouseDown = false;

for(var i = 0; i < num; i++)
{
	dotts[i] = {x:mouseX, y:mouseY, 
                    velX:0, velY:0, 
                    size:((i/num)*10)+10, 
                    sizeRatio:(((i/num)*10)+10)/500};
}

function draw()
{
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for(var i = 0; i < dotts.length; i++)
	{
		var dott = dotts[i];
		context.fillRect(dott.x, dott.y, dott.size, dott.size);
		dott.x += dott.velX*dott.sizeRatio;
		dott.y += dott.velY*dott.sizeRatio;
		dott.velX += mouseX-dott.x;
		dott.velY += mouseY-dott.y; 
	}
	encoder.addFrame(context);
}

function mouseMoveHandler(event)
{
	if(mouseDown)
	{
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
}
