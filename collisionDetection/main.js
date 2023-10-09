const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Box {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color || "rgba(255, 0, 0, 0.5)";
        this.width = width || 50;
        this.height = height || 30;
        this.x_speed = 1;
        this.y_speed = 1;

    }
    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
    }
    move(){
        this.x = this.x + this.x_speed;
        this.y = this.y + this.y_speed;
    }
    checkCollision(){
        if(this.x + this.width > canvas.width){ //uta kunna ko position le canvas ko width exceed garnu bhayena
            this.x_speed = -1; //firta jancha x-axis batai
        }else if(this.x < 0){
            this.x_speed = 1;
        }else if(this.y + this.height > canvas.height) {
            this.y_speed = -1; //mathi farkincha 
        }
        else if(this.y < 0){
            this.y_speed = 1;
        }
    }

    update(){
        this.draw();
        this.checkCollision();
        this.move();
    }

    
}
const boxObj = new Box(50, 50, "rgba(355, 0, 0, 0.3)", 60, 60);
const boxObj2 = new Box(90, 60, 20, 100);
const boxObj3 = new Box(20, 80, 60, 50);


function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    boxObj.update();
    boxObj2.update();
    boxObj3.update();
    requestAnimationFrame(animate);
}
animate();