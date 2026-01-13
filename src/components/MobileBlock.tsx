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
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="text-center max-w-md space-y-6">
          <h1 className="text-3xl font-bold">Desktop Experience Required</h1>
          <p className="text-muted-foreground text-lg">
            This portfolio is optimized for desktop, laptop, and tablet screens. Please visit this site on a computer, laptop, or tablet for the best experience.
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              Minimum screen width: 768px
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
