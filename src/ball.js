//What attributes does a ball need in the game of pong?

//height, width, color, x, y, size, speed: velX and velY,
//update:
    //this.x = this.x + this.velX
    //this.y += this.velY
//render:


//export it!

var ball = {
    h:10,
    velX:5,
    velY:2,
    w:10,
    x:250,
    y:50,
    update: function(paddle){
        this.x += this.velX;
        this.y += this.velY;
        if(this.x+this.w >= canvas.width) this.velX *= -1;
        if(this.y+this.h >= canvas.height || this.y <= 0) this.velY *= -1;
        var collision = this.detectCollisions(paddle)
        if(collision === "top"){
            this.velX *= -1;
            this.velY *= -1;
            this.y = paddle.y + paddle.h;
        }
        else if(collision === "left"){
            this.velX *= -1;
            this.x = paddle.x + paddle.w;
        }
        else if(collision === "bottom"){
            this.velX *= -1;
            this.velY *= -1;
            this.x = paddle.y + paddle.w;
        }
    },
    render: function(ctx){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    },

    detectCollisions(paddle){
        var px = paddle.x, py = paddle.y;
        var px2 = paddle.x + paddle.w, py2 = paddle.y + paddle.h;
        var bx = this.x, by = this.y;
        var bx2 = this.x + this.w, by2 = this.y + this.h;
        var btmLeftCollision = bx >= px && bx <= px2 && by2 >= py && by2 <= py2;
        var btmRightCollision = bx2 >= px && bx2 <= px2 && by2 >= py && by2 <= py2;
        var topLeftCollision = bx <= px2 && bx >= px && by <= py2 && by >= py;
        var topRightCollision = bx2 >= px2 && bx2 <= px && by >= py2 && by <= py;

        if(btmLeftCollision && btmRightCollision) return "bottom";
        if(topLeftCollision && topRightCollision) return "top";
        if(topLeftCollision && btmLeftCollision) return "left";
        if(btmLeftCollision) return "left";
        if(topLeftCollision) return "left";
    }
}
module.exports = ball;
