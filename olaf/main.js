const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Snow {
    constructor(){
        this.x = Math.random() * (1330 - 0) + 0;
        this.y = Math.random() * (100 - 0) + 0;
        this.r = Math.random() * (3 - 1) + 1;
    }

    draw(){
        context.beginPath();
        context.fillStyle = "white";
        context.arc(this.x, this.y, this.r, 0, 360);
        context.fill();

    }
    move(){
        this.y ++;
    }
}
const snowArr = [];

for (let i =0; i < 1000; i++){
    const obj = new Snow();
    snowArr.push(obj);
}

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    for( let i = 0; i < 10; i++){
       snowArr[i].draw();
       snowArr[i].move();
       
    }
    requestAnimationFrame(animate);
}
animate();