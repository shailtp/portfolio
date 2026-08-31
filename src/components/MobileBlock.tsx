import { useEffect, useState } from "react";

export default function MobileBlock({ children }: { children: React.ReactNode }) {
  const [isUnsupportedViewport, setIsUnsupportedViewport] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isUnsupported = window.innerWidth < 1024;

      setIsUnsupportedViewport(isUnsupported);

      if (isUnsupported) {
        document.body.style.minWidth = '0';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
      } else {
        document.body.style.minWidth = '';
        document.body.style.overflowX = '';
        document.documentElement.style.overflowX = '';
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => {
      window.removeEventListener('resize', checkDevice);
      // Reset styles on unmount
      document.body.style.minWidth = '';
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  if (isUnsupportedViewport) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-background"
        style={{ 
          width: '100vw', 
          maxWidth: '100vw', 
          overflowX: 'hidden',
          padding: '1rem'
        }}
      >
        <div 
          className="text-center space-y-4"
          style={{ 
            width: '100%', 
            maxWidth: '100%',
            boxSizing: 'border-box',
            padding: '0 0.5rem'
          }}
        >
          <h1 className="text-2xl font-bold leading-tight break-words">
            Desktop Experience Required
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed break-words">
            This portfolio is designed for desktop and laptop screens. Please visit on a screen at least 1024 pixels wide.
          </p>
          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              Minimum screen width: 1024px
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
