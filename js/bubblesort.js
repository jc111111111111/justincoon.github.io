"use strict";
var context = document.getElementById("a").getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
setInterval(draw, 1);

//Number of values to sort
var numValues = 1000;

//Number of steps to run per iteration of draw, usually just set this to numValues to get a good number
var numSteps = 100;

//Where we store the values to be sorted
var values = [];

//Generate the random values to be sorted and store them in the values array
for(var x = 0; x < numValues; x++)
	values.push(Math.random());

//Place holder used in bubble sort
var placeHolder = 0;


//Draw the rectangles and execute the sort
function draw()
{
	//Clear the screen
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);

	//Draw the values as rectangles on the screen, their height being equal to their value times the screen height
	for(var x = 0; x < values.length; x++)
		context.fillRect((x/numValues)*window.innerWidth, window.innerHeight, window.innerWidth/numValues, -values[x]*window.innerHeight);

	//Step through the sort numSteps times
	for(var a = 0; a < numSteps; a++)
		step();
}

//Execute the next step in the bubblesort
function step()
{
	if(values[placeHolder] > values[placeHolder+1])
		swap(values, placeHolder, placeHolder+1);

	placeHolder++;

	if(placeHolder >= numValues-1)
		placeHolder = 0;
}

//Swap the two values in the given collection
function swap(vals, p1, p2)
{
	var temp = vals[p1];

	vals[p1] = vals[p2];

	vals[p2] = temp;
}
