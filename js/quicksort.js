"use strict";
var context = document.getElementById("a").getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
setInterval(draw, 1);

var numValues = 1000;

var numSteps = 100;

var values = [];

for(var x = 0; x < numValues; x++)
	values.push(Math.random());

var placeHolder = 0;


function draw()
{
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for(var x = 0; x < values.length; x++)
		context.fillRect((x/numValues)*window.innerWidth, window.innerHeight, window.innerWidth/numValues, -values[x]*window.innerHeight);

	for(var a = 0; a < numSteps; a++)
		step();
}

function step()
{
	if(values[placeHolder] > values[placeHolder+1])
		swap(values, placeHolder, placeHolder+1);

	placeHolder++;

	if(placeHolder >= numValues-1)
		placeHolder = 0;
}

function swap(vals, p1, p2)
{
	var temp = vals[p1];

	vals[p1] = vals[p2];

	vals[p2] = temp;
}
