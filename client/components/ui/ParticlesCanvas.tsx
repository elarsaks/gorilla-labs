import React, { useEffect, useRef } from "react";

interface ParticleProps {
  size: number;
  speedX: number;
  speedY: number;
  x: number;
  y: number;
}

class Particle {
  maxSize: number = 5;
  size: number;
  speedX: number;
  speedY: number;
  x: number;
  y: number;

  constructor({ size, speedX, speedY, x, y }: ParticleProps) {
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.x = x;
    this.y = y;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvasWidth || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "aqua";
    ctx.fill();
  }
}

const ParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  let particles: Particle[] = [];

  useEffect(() => {
    const numParticles = window.innerWidth * window.innerHeight * 0.00008;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Set canvas to full viewport size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create and load the image
    imageRef.current = new Image();
    imageRef.current.src = "/assets/logo.png";
    imageRef.current.onload = () => {
      drawImage(ctx);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 1.2;
      const speedY = (Math.random() - 0.5) * 1.2;
      const size = Math.random() * 2 + 1;
      particles.push(new Particle({ size, speedX, speedY, x, y }));
    }

    function drawImage(ctx: CanvasRenderingContext2D) {
      const canvas = canvasRef.current;
      if (!canvas || !imageRef.current) return;

      const img = imageRef.current;
      const maxWidth = canvas.width * 0.5; // 50% of canvas width
      const maxHeight = canvas.height * 0.5; // 50% of canvas height
      const imgRatio = img.width / img.height;
      let imgWidth = img.width;
      let imgHeight = img.height;

      // Scale image to fit within maxWidth and maxHeight, maintaining aspect ratio
      if (imgWidth > maxWidth) {
        imgWidth = maxWidth;
        imgHeight = imgWidth / imgRatio;
      }
      if (imgHeight > maxHeight) {
        imgHeight = maxHeight;
        imgWidth = imgHeight * imgRatio;
      }

      const x = (canvas.width - imgWidth) / 2; // Center horizontally
      const y = (canvas.height - imgHeight) / 2; // Center vertically

      ctx.drawImage(img, x, y, imgWidth, imgHeight);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(5, 4, 13, 1)"); // Dark color at the top
      gradient.addColorStop(1, "rgba(54, 127, 245, 0.5)"); // Lighter color at the bottom

      // Apply gradient as background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (const particle of particles) {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      }

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw the image on top of the particles
      // drawImage(ctx);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, backgroundColor: "black" }}
    />
  );
};

export default ParticlesCanvas;
