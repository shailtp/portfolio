import { useEffect, useState } from "react";

export default function MobileBlock({ children }: { children: React.ReactNode }) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Detect phones specifically (not tablets)
      const isPhoneDevice = 
        // Screen width check - phones are typically < 768px
        width < 768 ||
        // User agent checks for phones (excluding tablets)
        (/android.*mobile|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent) && 
         !/ipad|tablet|playbook|silk/i.test(userAgent));
      
      setIsPhone(isPhoneDevice);
      
      // Override body min-width when on phone
      if (isPhoneDevice) {
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

  if (isPhone) {
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
            This portfolio is optimized for desktop, laptop, and tablet screens. Please visit this site on a computer, laptop, or tablet for the best experience.
          </p>
          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              Minimum screen width: 768px
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
