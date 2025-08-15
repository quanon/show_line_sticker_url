import { useState, useCallback } from 'react';
import { StickerImage } from '../types';

export const useStickerURL = () => {
  const [currentURL, setCurrentURL] = useState<string | null>(null);

  const extractURL = useCallback((image: Element): string => {
    const span = image.querySelector('span');
    if (!span?.style.backgroundImage) {
      throw new Error('Background image not found');
    }

    const match = span.style.backgroundImage.match(/(https:\/\/.*)\?/);
    if (!match || !match[1]) {
      throw new Error('URL not found in background image');
    }

    return match[1];
  }, []);

  const showURL = useCallback((image: Element) => {
    try {
      const url = extractURL(image);
      setCurrentURL(url);
    } catch (error) {
      console.error('Failed to extract URL:', error);
    }
  }, [extractURL]);

  const hideURL = useCallback(() => {
    setCurrentURL(null);
  }, []);

  return {
    currentURL,
    showURL,
    hideURL
  };
};
