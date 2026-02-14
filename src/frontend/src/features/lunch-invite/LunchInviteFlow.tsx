import { useState, useCallback } from 'react';
import { SlideShell } from './SlideShell';
import { Q1 } from './slides/Q1';
import { Q2 } from './slides/Q2';
import { Q3 } from './slides/Q3';
import { ImageSlide } from './slides/ImageSlide';
import { EndScreen } from './slides/EndScreen';
import { imageSlideMap } from './slides/imageSlideMap';

type SlideType = 
  | 'intro'
  | 'q1' 
  | 'q1-image' 
  | 'q2' 
  | 'q2-image' 
  | 'q3' 
  | 'end';

type Q2Option = 'random' | 'special' | 'ugly' | 'yuvi';
type Q3Option = 'yess' | 'ofc' | 'no';

export function LunchInviteFlow() {
  const [currentSlide, setCurrentSlide] = useState<SlideType>('intro');
  const [q2Selection, setQ2Selection] = useState<Q2Option | null>(null);
  const [q3Selection, setQ3Selection] = useState<Q3Option | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = useCallback((slide: SlideType) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(slide);
      setIsTransitioning(false);
    }, 100);
  }, [isTransitioning]);

  const handleQ1Answer = useCallback((answer: 'yes' | 'no') => {
    if (answer === 'no') {
      navigateTo('q1-image');
    } else {
      navigateTo('q2');
    }
  }, [navigateTo]);

  const handleQ2Answer = useCallback((answer: Q2Option) => {
    setQ2Selection(answer);
    navigateTo('q2-image');
  }, [navigateTo]);

  const handleQ3Answer = useCallback((answer: Q3Option) => {
    setQ3Selection(answer);
    navigateTo('end');
  }, [navigateTo]);

  const handleRestart = useCallback(() => {
    setQ2Selection(null);
    setQ3Selection(null);
    navigateTo('intro');
  }, [navigateTo]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 'intro':
        return (
          <SlideShell>
            <div className="text-center space-y-8 fade-enter">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Hey There! 💕
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  15th February 2026
                </p>
              </div>
              <p className="text-xl md:text-2xl text-foreground/80">
                I have something special to ask you...
              </p>
              <button
                onClick={() => navigateTo('q1')}
                disabled={isTransitioning}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Let's Go! ✨
              </button>
            </div>
          </SlideShell>
        );

      case 'q1':
        return (
          <SlideShell>
            <Q1 onAnswer={handleQ1Answer} disabled={isTransitioning} />
          </SlideShell>
        );

      case 'q1-image':
        return (
          <SlideShell>
            <ImageSlide
              imagePath="/assets/generated/q1-no-anyways.dim_1200x800.png"
              onNext={() => navigateTo('q2')}
              disabled={isTransitioning}
            />
          </SlideShell>
        );

      case 'q2':
        return (
          <SlideShell>
            <Q2 onAnswer={handleQ2Answer} disabled={isTransitioning} />
          </SlideShell>
        );

      case 'q2-image':
        return (
          <SlideShell>
            <ImageSlide
              imagePath={imageSlideMap[q2Selection!]}
              onNext={() => navigateTo('q3')}
              disabled={isTransitioning}
            />
          </SlideShell>
        );

      case 'q3':
        return (
          <SlideShell>
            <Q3 onAnswer={handleQ3Answer} disabled={isTransitioning} />
          </SlideShell>
        );

      case 'end':
        return (
          <SlideShell>
            <EndScreen selection={q3Selection!} onRestart={handleRestart} />
          </SlideShell>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {renderSlide()}
    </div>
  );
}
