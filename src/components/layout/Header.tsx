import { FadeIn } from '../animations';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8 px-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center">
        <FadeIn>
          <img src="/logo.png" alt="GOMAU" className="h-28 md:h-40 w-auto object-contain pointer-events-auto" />
        </FadeIn>
      </div>
    </header>
  );
};
