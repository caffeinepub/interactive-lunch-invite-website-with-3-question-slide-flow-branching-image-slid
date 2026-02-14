import { ArrowRight } from 'lucide-react';

interface ImageSlideProps {
  imagePath: string;
  onNext: () => void;
  disabled: boolean;
}

export function ImageSlide({ imagePath, onNext, disabled }: ImageSlideProps) {
  return (
    <div className="space-y-6 fade-enter">
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
          src={imagePath}
          alt="Response"
          className="w-full h-auto"
        />
      </div>
      
      <button
        onClick={onNext}
        disabled={disabled}
        className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
      >
        Next <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
