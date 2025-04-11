var canvas = document.getElementById("myCanvas");
var canvasContext = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;
var radius = 1;
var center  = {x: width / 2, y: height / 2};
var digitRectengle={width:10, height:10};
const selector = document.getElementById("functionSelector");

function graphicSinCosTan(ctx,a,width,center,heightAngle,radius,frequency,color,lineW){
    for (let x = 0; x < width; x++) {
        let angle = (x - center.x) * frequency;
        let y = center.y - a(angle) * heightAngle;
        drawLine(ctx, x,y,x+radius,y+radius,color,lineW)
    }
}
 function  graphicDegreeX(ctx,degree,height,radius,color,lineW){
    for(let x=0; x<height; x++){
        let y=x^degree;
        drawLine(ctx, x,y,x+radius,y+radius,color,lineW)
      }
      
 }
function graphicCtg(ctx,width,center,heightAngle,radius,frequency,color,lineW){
    for(let x=0; x<width; x++){
        let angle = (x - center.x) * frequency;
          let y=center.y-(Math.cos(angle)/Math.sin(angle))*heightAngle;
          drawLine(ctx, x,y,x+radius,y+radius,color,lineW)
           
       }
}
function graphicAbs(ctx,height,radius,color,lineW){
for(let x=0; x<height; x++){
    let y= Math.abs(x);
    drawLine(ctx, x,y,x+radius,y+radius,color,lineW)
  }
}

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

    for(let x=-200; x<=200; x+=50){
        if(x===0)continue;
        canvasContext.fillText(-x,center.x-x,height/2+15);

    }
    for(let y=-200; y<=200; y+=50){
        if(y===0)continue;
        canvasContext.fillText(-y,center.x,width/2+15);

    }

    switch (selected) {
        case "sin":
            graphicSinCosTan(canvasContext,Math.sin,width,center,100,radius, 0.0316,"blue",3)
            break;

        case "cos":
            graphicSinCosTan(canvasContext,Math.cos,width,center,100,radius, 0.0316,"blue",3)
            break;

        case "tan":
                graphicSinCosTan(canvasContext,Math.tan,width,center,100,radius, 0.0316,"blue",3)
            break;
        case "ctg":
                graphicCtg(canvasContext,width,center,100,radius, 0.0316,"blue",3);
            break; 

        case "x^2":
                graphicDegreeX(canvasContext,2,height,radius,"blue",3)
            break;

        case "x^3":
            graphicDegreeX(canvasContext,3,height,radius,"blue",3)
            break;

        case "abs":
            graphicAbs(canvasContext,height,radius,"gray",3)
            break;

        // case "3^abs(x)":
        //      for(let x=0; x<height; x++){
        //         let y= Math.pow(x,1/3);
        //         drawLine(canvasContext, x,y,x+radius,y+radius,"blue",3)
                
        //     }
        //     break;
    }

    requestAnimationFrame(draw);
}

draw();
