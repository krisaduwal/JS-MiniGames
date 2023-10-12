const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const rainObj = new Image();
rainObj.src = "./image/rain.png";

let y = 0;
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(rainObj, 0, y, 600, 600);
    y++;
    requestAnimationFrame(animate);
}
animate();