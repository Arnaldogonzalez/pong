(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./paddle.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
