const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Bubbles{
    constructor(x, y, color, r){
        this.x = x;
        this.y = y;
        this.color = color || "rgba(255, 0, 0, 0.5)";

        this.r = r;
        this.x_speed = 1;
        this.y_speed = 1;
    }
    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.r, 0, 360);
        context.fill();
        context.strokeStyle= "rgba(355, 0, 0, 0.7)";
        context.stroke();

    }
    move(){
        this.x = this.x + this.x_speed;
        this.y = this.y + this.y_speed;
    }
    checkCollision(){
        if(this.x - this.r < 0){
            this.x_speed = 1;
        }else if(this.x + this.r > canvas.width){
            this.x_speed = -1;
        }else if(this.y + this.r > canvas.height){
            this.y_speed = -1;
        }else if(this.y - this.r < 0){
            this.y_speed = 1;
        }
    }
    update(){
        this.draw();
        this.checkCollision();
        this.move();
    }
}
const Obj = new Bubbles(50, 60, "rgba(355, 0, 0, 0.3)", 20);
const Obj2 = new Bubbles(20, 30, "rgba(355, 0, 0, 0.2)", 50);
const Obj3 = new Bubbles(550, 400, "rgba(355, 0, 0, 0.2)", 40);
const Obj4 = new Bubbles(100, 300, "rgba(355, 0, 0, 0.3)", 20);
const Obj5 = new Bubbles(40, 200, "rgba(355, 0, 0, 0.4)", 30);
const Obj6 = new Bubbles(20, 500, "rgba(355, 0, 0, 0.4)", 60);



function animate(){
    context.clearRect(0, 0, 600, 600);
    Obj.update();
    Obj2.update();
    Obj3.update();
    Obj4.update();
    Obj5.update();
    Obj6.update();

    requestAnimationFrame(animate);
}
animate();
