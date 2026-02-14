interface Q2Props {
  onAnswer: (answer: 'random' | 'special' | 'ugly' | 'yuvi') => void;
  disabled: boolean;
}

export function Q2({ onAnswer, disabled }: Q2Props) {
  return (
    <div className="space-y-8 slide-enter">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Guess who is asking you  out for tommorows lunch?
      </h2>
      
      <div className="flex flex-col gap-4 mt-8">
        <button
          onClick={() => onAnswer('random')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Someone random
        </button>
        
        <button
          onClick={() => onAnswer('special')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Someone special
        </button>
        
        <button
          onClick={() => onAnswer('ugly')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Someone ugly
        </button>
        
        <button
          onClick={() => onAnswer('yuvi')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Yuvi ofc
        </button>
      </div>
    </div>
  );
}
