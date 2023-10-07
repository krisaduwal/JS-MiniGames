const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let bubbles = 60;

class Particle {
    constructor(){
        this.x = Math.random() * (500 - 0) + 0;
        this.y = Math.random() * (500 - 0) + 0;
        this.r = Math.random() * (50 - 10) + 10;
    }

    draw(){
        context.beginPath();
        context.fillStyle = "rgba(255, 0, 0, 0.5)";
        context.arc(this.x, this.y, this.r, 0, 360);
        context.fill();
        context.strokeStyle = "rgba(255, 0, 0, 0.5)";
        context.stroke();

    }
    move(){
        this.x += Math.random() *(1 - -1) + -1;
        this.y += Math.random() *(1 - -1) + -1;
    }
}

const particleArr = [];

for (let i = 0; i < bubbles; i++){
    const obj = new Particle();
    particleArr.push(obj);
}
console.log(particleArr);

function animate(){
    context.clearRect(0, 0, 600, 600);
    for(let i = 0; i < bubbles; i++){
        particleArr[i].draw();
        particleArr[i].move();
    }
    requestAnimationFrame(animate);
}
animate();

