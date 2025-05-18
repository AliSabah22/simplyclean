'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full" style={{ minWidth: '320px', height: '700px' }}>
      <div
        className="calendly-inline-widget w-full h-full"
        data-url="https://calendly.com/amplifyace/premium-auto-detailing"
      />
    </div>
  );
};

export default CalendlyEmbed; 