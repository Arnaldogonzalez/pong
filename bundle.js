(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var player = require('./paddle.js')
var ball = require('./ball.js')
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

gameLoop();
function gameLoop(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    player.update();
    player.render(ctx);
    ball.update(player);
    ball.render(ctx);
    window.requestAnimationFrame(gameLoop);
}

},{"./ball.js":1,"./paddle.js":3}],3:[function(require,module,exports){
var paddle = {
    x:100,
    y:100,
    w:30,
    h:100,
    speed: 5,
    update: function(){
        if(this.direction === "up"){
            this.y = this.y - this.speed;
        }
        if(this.direction === "down"){
            this.y = this.y + this.speed;
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

},{}]},{},[2]);
