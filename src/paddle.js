var paddle = {
    x:100,
    y:100,
    w:30,
    h:100,
    speed: 2,
    update: function(){
        if(this.direction === "up"){
            this.y = this.y - this.speed;
        }
    },
    render: function(ctx){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

document.addEventListener('keydown', function(e){
    console.log(e.keyCode);
    if (e.keyCode === 38) paddle.direction = "up";
    else if(e.keyCode === 40) paddle.direction = "down";
});
document.addEventListener("keyup", function(e){
    if(e.keyCode === 38 || e.keyCode === 40) paddle.direction = null;
});

module.exports = paddle;
