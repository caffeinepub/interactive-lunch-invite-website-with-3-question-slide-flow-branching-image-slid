interface Q1Props {
  onAnswer: (answer: 'yes' | 'no') => void;
  disabled: boolean;
}

export function Q1({ onAnswer, disabled }: Q1Props) {
  return (
    <div className="space-y-8 slide-enter">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Do you wanna know something?
      </h2>
      
      <div className="flex flex-col gap-4 mt-8">
        <button
          onClick={() => onAnswer('yes')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Yes
        </button>
        
        <button
          onClick={() => onAnswer('no')}
          disabled={disabled}
          className="w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          No im okay
        </button>
      </div>
    </div>
  );
}
