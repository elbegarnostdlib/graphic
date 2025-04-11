var canvas = document.getElementById("myCanvas");
var canvasContext = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;
var radius = 1;
var center  = {x: width / 2, y: height / 2};
var digitRectengle={width:10, height:10};
const selector = document.getElementById("functionSelector");




function drawLine(ctx, startX,startY,endX,endY,color,lineWidth){
    ctx.beginPath();   
    ctx.moveTo(startX, startY);  
    ctx.lineTo(endX, endY); 
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

function drawRect(ctx, color,startX,startY,width,height){
    ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.rect(startX, startY, width, height);
        ctx.fill();
        ctx.stroke();
}

function drawArc(ctx, color,startX,startY,radius,angle,startAngle){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(startX, startY, radius,startAngle, angle);
    ctx.fill(); 
    ctx.stroke();
}

function draw(){
    canvasContext.clearRect(0, 0, width, height);
    drawLine(canvasContext, 0, height / 2, width, height / 2, "black", 0.5); 
    drawLine(canvasContext, width / 2, 0, width / 2, height, "black", 0.5); 

    let heightAngle = 100;
    let frequency = 0.0316;
    const selected = selector.value;

    switch (selected) {
        case "sin":
            for (let x = 0; x < width; x++) {
                let angle = (x - center.x) * frequency;
                let y = center.y - Math.sin(angle) * heightAngle;
                drawArc(canvasContext, "blue", x, y, radius, 2 * Math.PI, 0);
            }
            break;

        case "cos":
            for (let x = 0; x < width; x++) {
                let angle = (x - center.x) * frequency;
                let y = center.y - Math.cos(angle) * heightAngle;
                drawArc(canvasContext, "green", x, y, radius, 2 * Math.PI, 0);
            }
            break;

            case "tan":
                for(let x=0; x<width; x++){
                    let angle = (x - center.x) * frequency;
                      let y=center.y-Math.tan(angle)*heightAngle;
                      drawArc(canvasContext,"red",x, y, radius,0, Math.PI * 2) ;
                       
                   }
            break;
            case "ctg":
                for(let x=0; x<width; x++){
                    let angle = (x - center.x) * frequency;
                      let y=center.y-(Math.cos(angle)/Math.sin(angle))*heightAngle;
                      drawArc(canvasContext,"red",x, y, radius,0, Math.PI * 2) ;
                       
                   }
            break;

            case "x^2":
                for(let x=0; x<height; x++){
                    let y=x^2;
                    drawArc(canvasContext,"red",x, y, radius,0, Math.PI * 2) ;
                     
                 }
            break;

        case "x^3":
              for(let x=0; x<height; x++){
                let y=x^3;
                drawArc(canvasContext,"red",x, y, radius,0, Math.PI * 2) ;
              }
            break;

        case "abs":
              for(let x=0; x<height; x++){
                let y= Math.abs(x);
                drawArc(canvasContext,"red",x, y, radius,0, Math.PI * 2) ;
              }
            break;

        case "3^abs":
             for(let x=0; x<height; x++){
                let y= Math.pow(x,1/3);
                drawArc(canvasContext,"red",x, y, radius,0, Math.PI * 2) ;
                
            }
            break;
    }

    requestAnimationFrame(draw);
}

draw();
