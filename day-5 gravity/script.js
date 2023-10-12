const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Ball{
    constructor(){
        this.position = {
            x: 300,
            y: 80
        }
        this.radius = 30;
        this.velocity = {
            x: 1,
            y: 1
        }
        this.acceleration = 0.2;
        
    }
    draw(){
        context.beginPath();
        context.fillStyle = "#a0e8af";
        context.arc(this.position.x, this.position.y, this.radius, 0, 360);
        context.fill();
        context.strokeStyle = "	#326c81";
        context.stroke();
    }

    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }

    collisionDetection(){
        if(this.position.y + this.radius > canvas.height){
            this.position.y = canvas.height - this.radius;
            this.velocity.y *= -0.8;
        }
    }
}
const ball1 = new Ball();

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball1.draw();
    ball1.move();
    ball1.collisionDetection();
    requestAnimationFrame(animate);
}
animate();