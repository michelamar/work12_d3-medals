var svg = document.getElementById("svg_id");

var b1 = document.getElementById("clear");
var b2 = document.getElementById("us");
var b3 = document.getElementById("canada");

var canada = [11, 8, 10];
var us = [9, 8, 6];

var clear_screen = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var make_circle = function(place, color){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", place);
    circle.setAttribute("cy", 250);
    circle.setAttribute("fill", color);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
};

var us_medals = function(){
    clear_screen();
    make_circle(125, "#d4af37");
    make_circle(250, "silver");
    make_circle(375, "#cc6633");
    circles = d3.selectAll("circle");
    circles.data(us).attr("r", function(d){return (d*5)});
    console.log(circles);
};

var canada_medals = function(){
    clear_screen();
    make_circle(125, "gold");
    make_circle(250, "silver");
    make_circle(375, "#cc6633");
    circles = d3.selectAll("circle");
    circles.data(canada).attr("r", function(d){return (d*5)});
};


b1.addEventListener("click", clear_screen);
b2.addEventListener("click", us_medals);
b3.addEventListener("click", canada_medals);

