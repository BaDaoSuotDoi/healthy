import { useLayoutEffect } from "react";

var greens = [25, 50, 75,30, 25, 60, 100, 40, 50, 25, 30, 50];
var yellows = [100,20,30,50,30,70, 75,30, 25, 60, 100,15];
var labels = ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A","11A","12A"]

const dotRadius = 3;
const canvasHeight = 260;
const canvasWidth = window.innerWidth * 0.6;
const paddingBottom = 30;
const paddingTop = 10;

function drawLine(ctx,line, color){
    ctx.fillStyle = color;
    const columnSpacing =  Math.floor(canvasWidth / (line.length+1));
    const points = [];
    for (var i = 0; i < line.length; i++) {
        var x = ((i+1) * columnSpacing) ;
        var y = Math.floor((100 - line[i]) / 100 * (canvasHeight  - paddingBottom )) + paddingTop ;
        points.push({x,y})
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
        ctx.fill();

    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    for (var i = 0; i < points.length - 1; i++) {
        var point1 = points[i];
        var point2 = points[i+1];

        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.stroke();
    }
}

function drawGraphProcess(greens, yellows) {
    var canvas = document.getElementById("processGraph");
    var ctx = canvas.getContext("2d");

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height - 6);
    const columnSpacing =  Math.floor(canvasWidth / (greens.length+1));

    for (var i = 1; i <= greens.length; i++) {
        var x = i * columnSpacing;
        var y = paddingTop;
        ctx.fillStyle = "#777777";
        ctx.fillRect(x, y, 2, canvas.height -  paddingBottom - paddingTop - 10);
    }

    // labels
    for (var i = 0; i < labels.length; i++) {
        var x = (i+1) * columnSpacing;
        var y = paddingTop;
        ctx.fillStyle = "white";
        ctx.font = "10px ";
        ctx.fillText(labels[i], x - 6, canvas.height - paddingBottom);
    }

    drawLine(ctx,greens,"#8FE9D0");
    drawLine(ctx,yellows,"#FFCC21");
}

function ProcessGraph() {
    useLayoutEffect(()=>{
        drawGraphProcess(greens,yellows);
    },[])

    return (
        <canvas id="processGraph"></canvas>
    );
  }
  
export default ProcessGraph;
  