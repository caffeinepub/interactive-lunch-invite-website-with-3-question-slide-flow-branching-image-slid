interface Q3Props {
  onAnswer: (answer: 'yess' | 'ofc' | 'no') => void;
  disabled: boolean;
}

export function Q3({ onAnswer, disabled }: Q3Props) {
  return (
    <div className="space-y-8 slide-enter">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Will you be my foodie foodie soul for tommorows lunch?
      </h2>
      
      <div className="flex flex-col gap-4 mt-8">
        <button
          onClick={() => onAnswer('yess')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Yess
        </button>
        
        <button
          onClick={() => onAnswer('ofc')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Ofc yes
        </button>
        
        <button
          onClick={() => onAnswer('no')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          No
        </button>
      </div>
    </div>
  );
}
