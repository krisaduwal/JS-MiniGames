const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Box{
    constructor(){
        this.position = {
            x:100,
            y: 100
        };
        this.size = {
            width: 100,
            height: 60
        };
        this.velocity = {
            x: 1,
            y: 1
        };
        this.acceleration = 0.2;
    }
    draw(){
        context.beginPath();
        context.fillStyle= "rgba(355, 0, 0, 0.3)";
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        context.fill();
        context.strokeStyle= "rgba(355, 0, 0, 0.5)";
        context.stroke();
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }
    collisionDetection(){
        if(this.position.y + this.size.height > canvas.height){
            this.position.y = canvas.height - this.size.height;
            this.velocity.y *= -0.8;
        }
        
    }
}
const boxObj = new Box();
const boxObj1 = new Box();

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    boxObj.draw();
    boxObj.move();
    boxObj.collisionDetection();
    requestAnimationFrame(animate);
}
animate();