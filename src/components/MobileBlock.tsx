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
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isPhone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
        <div className="text-center w-full max-w-sm space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Desktop Experience Required
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
            This portfolio is optimized for desktop, laptop, and tablet screens. Please visit this site on a computer, laptop, or tablet for the best experience.
          </p>
          <div className="pt-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Minimum screen width: 768px
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
