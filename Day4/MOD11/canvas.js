let c = document.getElementById('myCanvas')
let ctx = c.getContext('2d')
//Draw a line
/* ctx.moveTo(0,0)
ctx.lineTo(200,200)
ctx.stroke(); */

/* ctx.beginPath();
ctx.arc(95,50,40,0, 2 * Math.PI)
ctx.stroke(); */

/* ctx.font = "30px Arial"
ctx.fillText("Koenig",10,50)
 */

// ctx.font = "30px Arial"
// ctx.strokeText("Koenig",10,50)


let grad = ctx.createLinearGradient(0,0,200,0)
grad.addColorStop(0,"red")
grad.addColorStop(1,"white")

ctx.fillStyle=grad
ctx.fillRect(10,10,150,80)


