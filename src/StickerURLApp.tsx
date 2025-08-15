import React, { useEffect } from 'react';
import StickerURLDisplay from './components/StickerURLDisplay';
import { useStickerURL } from './hooks/useStickerURL';

const StickerURLApp: React.FC = () => {
  const { currentURL, showURL } = useStickerURL();

  useEffect(() => {
    const handleImageClick = (event: Event) => {
      const target = event.currentTarget as Element;
      showURL(target);
    };

    const removeExistingElements = () => {
      const head = document.querySelector('.LyHead');
      if (head) {
        head.querySelectorAll('.line-sticker-url').forEach((element) => {
          element.parentNode?.removeChild(element);
        });
      }
    };

    const setupEventListeners = () => {
      removeExistingElements();

      const images = document.querySelectorAll('.FnImage');
      images.forEach((image) => {
        image.addEventListener('click', handleImageClick);
      });

      return () => {
        images.forEach((image) => {
          image.removeEventListener('click', handleImageClick);
        });
      };
    };

    const cleanup = setupEventListeners();

    const observer = new MutationObserver((mutations) => {
      let shouldSetup = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const hasNewImages = Array.from(mutation.addedNodes).some(node =>
            node instanceof Element && (node.classList.contains('FnImage') || node.querySelector('.FnImage'))
          );
          if (hasNewImages) {
            shouldSetup = true;
          }
        }
      });

      if (shouldSetup) {
        cleanup();
        setupEventListeners();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, [showURL]);

  return (
    <>
      {currentURL && (
        <StickerURLDisplay
          url={currentURL}
        />
      )}
    </>
  );
};

export default StickerURLApp;
