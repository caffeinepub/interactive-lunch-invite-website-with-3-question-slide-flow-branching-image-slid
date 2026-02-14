import { useEffect, useState } from 'react';

interface ConfettiEffectProps {
  variant: 'celebration' | 'heartbroken';
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  shape: string;
}

export function ConfettiEffect({ variant }: ConfettiEffectProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = variant === 'celebration' 
      ? ['oklch(0.65 0.18 15)', 'oklch(0.88 0.12 340)', 'oklch(0.75 0.12 50)', 'oklch(0.70 0.15 340)']
      : ['oklch(0.55 0.22 25)', 'oklch(0.45 0.15 20)', 'oklch(0.35 0.10 15)'];
    
    const shapes = variant === 'celebration' 
      ? ['●', '■', '▲', '★']
      : ['💔', '😢', '💔', '😔'];

    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2.5 + Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setPieces(newPieces);
  }, [variant]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            color: piece.color,
            fontSize: piece.shape.length > 1 ? '1.5rem' : '1rem',
          }}
        >
          {piece.shape}
        </div>
      ))}
    </div>
  );
}
