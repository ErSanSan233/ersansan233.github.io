import React, { useRef, useEffect } from 'react';
import LiquidGlass from 'liquid-glass-react';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // 设置Canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // 正方形类 - 添加旋转属性
    class Square {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 10;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = Math.random() > 0.5 ? '#E6A235' : '#E4E4E4';
        this.alpha = Math.random() * 0.7 + 0.3;
        // 新增旋转相关属性
        this.rotation = Math.random() * Math.PI * 2; // 初始旋转角度(0-360度)
        this.rotationSpeed = Math.random() * 0.04 - 0.02; // 旋转速度(-0.02到0.02弧度/帧)
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed; // 更新旋转角度

        // 边界检测
        if (this.x < -this.size) this.x = canvas.width;
        if (this.x > canvas.width) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height;
        if (this.y > canvas.height) this.y = -this.size;
      }

      draw() {
        ctx.save(); // 保存当前绘图状态
        
        // 移动到正方形中心并旋转
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.rotation);
        
        // 设置颜色和透明度
        ctx.fillStyle = this.color + Math.round(this.alpha * 255).toString(16).padStart(2, '0');
        
        // 绘制正方形（以中心为原点）
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        
        ctx.restore(); // 恢复绘图状态
      }
    }

    // 创建20个正方形色块
    const squares = Array.from({ length: 20 }, () => new Square());

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      squares.forEach(square => {
        square.update();
        square.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} className="canvas-container"></canvas>
      
      {/* 直接使用单一居中容器 */}
      <LiquidGlass
        cornerRadius={40}
        padding="2rem"
        className="liquid-glass-container"
      >
        <div className="glass-content">
          <h1 className="glass-title">ErSanSan233</h1>
          <p>@良我叫什么</p>
        </div>
      </LiquidGlass>
    </div>
  );
}

export default App;
