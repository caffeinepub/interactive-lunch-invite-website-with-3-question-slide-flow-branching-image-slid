import { RotateCcw, Heart } from 'lucide-react';
import { ConfettiEffect } from '../effects/ConfettiEffect';
import { FloatingHearts3D } from '../effects/FloatingHearts3D';
import { FloatingBrokenHearts3D } from '../effects/FloatingBrokenHearts3D';

interface EndScreenProps {
  selection: 'yess' | 'ofc' | 'no';
  onRestart: () => void;
}

export function EndScreen({ selection, onRestart }: EndScreenProps) {
  const getMessage = () => {
    switch (selection) {
      case 'yess':
        return 'letttsss goo';
      case 'ofc':
        return 'yessss';
      case 'no':
        return 'He is anyways gonna take you out';
      default:
        return '';
    }
  };

  const getEmoji = () => {
    switch (selection) {
      case 'yess':
        return '🎉';
      case 'ofc':
        return '💕';
      case 'no':
        return '💔';
      default:
        return '';
    }
  };

  return (
    <div className="relative space-y-8 fade-enter">
      {/* Effects */}
      {selection === 'yess' && <ConfettiEffect variant="celebration" />}
      {selection === 'ofc' && <FloatingHearts3D count={20} />}
      {selection === 'no' && (
        <>
          <ConfettiEffect variant="heartbroken" />
          <FloatingBrokenHearts3D count={15} />
        </>
      )}

      {/* Content */}
      <div className="text-center space-y-6 relative z-10">
        <div className="text-7xl md:text-8xl animate-pulse">
          {getEmoji()}
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          {getMessage()}
        </h2>

        {selection === 'ofc' && (
          <div className="flex justify-center gap-2 text-4xl heartbeat">
            <Heart className="w-12 h-12 fill-primary text-primary" />
            <Heart className="w-12 h-12 fill-accent text-accent" />
            <Heart className="w-12 h-12 fill-primary text-primary" />
          </div>
        )}

        <div className="pt-8">
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-md flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}
