let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

console.log(ctx);

// lets divide our canvas into 10 by 10 small squares
let scale = 20;
let row = canvas.height / scale; //25
let columns = canvas.width / scale; //25

let snake = [];
snake[0] = {
  x: Math.floor(Math.random() * columns) * scale,
  y: Math.floor(Math.random() * columns) * scale,
};

ctx.fillStyle = "#fff";
ctx.strokeStyle = "pink";
ctx.fillRect(snake[0].x, snake[0].y, scale, scale);
ctx.strokeRect(snake[0].x, snake[0].y, scale, scale);
