import { useEffect, useState } from 'react';

interface FloatingHearts3DProps {
  count: number;
}

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  driftX: number;
  rotateZ: number;
  emoji: string;
}

export function FloatingHearts3D({ count }: FloatingHearts3DProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const emojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    const newHearts: Heart[] = [];
    
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
        driftX: (Math.random() - 0.5) * 100,
        rotateZ: (Math.random() - 0.5) * 360,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart heart-3d"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            // @ts-ignore - CSS custom properties
            '--drift-x': `${heart.driftX}px`,
            '--rotate-z': `${heart.rotateZ}deg`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
