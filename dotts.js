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
		context.fillRect(dotts[i].x, dotts[i].y, dotts[i].size, dotts[i].size);
		dotts[i].x += dotts[i].velX*dotts[i].sizeRatio;
		dotts[i].y += dotts[i].velY*dotts[i].sizeRatio;
		dotts[i].velX += mouseX-dotts[i].x;
		dotts[i].velY += mouseY-dotts[i].y; 
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
