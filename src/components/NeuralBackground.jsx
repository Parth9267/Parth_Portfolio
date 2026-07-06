import { useEffect, useRef } from 'react';
import './NeuralBackground.css';

const NeuralBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let pulses = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create nodes
    const NODE_COUNT = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    const CONNECTION_DIST = 180;
    const MOUSE_INFLUENCE = 120;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        baseRadius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Spawn pulses periodically
    let pulseTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      pulseTimer++;

      // Update & draw nodes
      nodes.forEach((node) => {
        // Mouse influence
        const dx = mx - node.x;
        const dy = my - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_INFLUENCE && dist > 0) {
          const force = (MOUSE_INFLUENCE - dist) / MOUSE_INFLUENCE;
          node.vx += (dx / dist) * force * 0.02;
          node.vy += (dy / dist) * force * 0.02;
          node.radius = node.baseRadius + force * 2;
        } else {
          node.radius += (node.baseRadius - node.radius) * 0.05;
        }

        // Apply velocity with damping
        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Wrap around edges
        if (node.x < -20) node.x = canvas.width + 20;
        if (node.x > canvas.width + 20) node.x = -20;
        if (node.y < -20) node.y = canvas.height + 20;
        if (node.y > canvas.height + 20) node.y = -20;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${node.opacity})`;
        ctx.fill();

        // Node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        gradient.addColorStop(0, `rgba(0, 212, 255, ${node.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Spawn pulses
      if (pulseTimer % 60 === 0 && pulses.length < 15) {
        // Pick a random connection
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST && Math.random() < 0.03) {
              pulses.push({
                from: i,
                to: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.01,
                color: Math.random() > 0.5 ? '127, 90, 240' : '0, 212, 255',
              });
            }
          }
        }
      }

      // Update & draw pulses
      pulses = pulses.filter((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) return false;

        const fromNode = nodes[pulse.from];
        const toNode = nodes[pulse.to];
        const px = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

        const pulseGradient = ctx.createRadialGradient(px, py, 0, px, py, 6);
        pulseGradient.addColorStop(0, `rgba(${pulse.color}, 0.8)`);
        pulseGradient.addColorStop(1, `rgba(${pulse.color}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = pulseGradient;
        ctx.fill();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-background" />;
};

export default NeuralBackground;
