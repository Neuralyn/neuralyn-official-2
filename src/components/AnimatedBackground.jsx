import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ type }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = type === 'hope' ? '#2de0fc' : '#ffffff';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${type === 'hope' ? '45, 224, 252' : '255, 255, 255'}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          opacity: { duration: 1 },
          backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }
        }}
        style={{
          background: type === 'hope' 
            ? 'linear-gradient(120deg, rgba(35, 37, 38, 0.8) 0%, rgba(109, 213, 237, 0.4) 100%)'
            : 'linear-gradient(120deg, rgba(35, 37, 38, 0.9) 0%, rgba(65, 67, 69, 0.7) 100%)',
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 