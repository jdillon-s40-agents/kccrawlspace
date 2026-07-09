'use client';
import { useEffect } from 'react';
import { trackFbEvent } from '@/lib/fbPixel';

export default function PixelContactTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a[href^="tel:"]');
      if (target) trackFbEvent('Contact');
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
