import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
    onAccept();
  };

  const handleAcceptEssentials = () => {
    localStorage.setItem('cookie-consent', 'essentials');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex flex-col md:flex-row items-center justify-center md:justify-between z-[1000] text-center md:text-left">
      <p className="text-sm text-muted-foreground mb-4 md:mb-0 md:mr-4">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={handleAcceptAll} className="w-full sm:w-auto">Accept All</Button>
        <Button onClick={handleAcceptEssentials} variant="outline" className="w-full sm:w-auto">Essentials Only</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
