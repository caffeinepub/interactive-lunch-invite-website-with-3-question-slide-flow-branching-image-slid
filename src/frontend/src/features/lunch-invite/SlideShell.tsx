import { type ReactNode } from 'react';

interface SlideShellProps {
  children: ReactNode;
}

export function SlideShell({ children }: SlideShellProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50">
        {children}
      </div>
    </div>
  );
}
