var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var player = require('./paddle.js')

gameLoop();
function gameLoop(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    player.update();
    player.render(ctx);
    window.requestAnimationFrame(gameLoop);
}
