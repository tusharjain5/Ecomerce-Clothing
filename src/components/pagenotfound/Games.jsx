import React, { useEffect } from 'react'


export const Games = () => {
  useEffect(() => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 400;

    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: 4,
      dy: 3,
      radius: 10,
    };

    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();
    }

    function updateBall() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce off the walls
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
      }
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      updateBall();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();
  }, []);

  return (
    <canvas id="gameCanvas" style={{ border: '1px solid black' }}></canvas>
  );
}
