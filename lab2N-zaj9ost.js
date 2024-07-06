document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('c')
    if (!canvas.getContext) {throw new Error('Brak f. "getContext"!')}
    let c = canvas.getContext('2d')


    // c.fillRect(x,y,w,h)
    // c.strokeRect(x,y,w,h)
    // c.clearRect(x,y,w,h)
    c.fillRect(50,50,100,100)
    c.strokeRect(50,250,100,100)
    c.clearRect(70,70,60,60)

    // c.lineTo(x,y)
    //c.moveTo(x,y)
    c.moveTo(300,250)
    c.lineTo(350,350)
    c.lineTo(300,350)
    c.stroke()
    c.fill()

    c.beginPath()
    c.moveTo(100,260)
    c.lineTo(140,340)
    c.lineTo(60,340)
    c.closePath()
    c.strokeStyle = '#a00'
    c.stroke()

    // c.arc(x,y,r,s,e,*c)
    c.beginPath()
    c.moveTo(300,100)
    // c.arc(300,100,30,0,Math.PI*2)
    c.fillStyle = '#aaf'
    c.arc(300,100,30,0,Math.PI*0.5)
    c.fill()
    c.moveTo(380,100)
    c.arc(380,100,30,0,Math.PI)
    c.fill()
    c.moveTo(460,100)
    c.arc(460,100,30,0,Math.PI*1.5)
    c.fill()
    c.moveTo(540,100)
    c.arc(540,100,30,0,Math.PI*2)
    c.fill()
    c.closePath()

    // c.strokeText('text',x,y)
    // c.fillText('text',x,y)
    c.font = '30px Arial'
    c.strokeText('StrokeText',400,250)
    c.fillText('FillText',400,300)


})