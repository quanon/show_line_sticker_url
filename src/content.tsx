import React from 'react';
import { createRoot } from 'react-dom/client';
import StickerURLApp from './StickerURLApp';
import './styles.css';

const init = () => {
  const appContainer = document.createElement('div');
  appContainer.id = 'line-sticker-url-app';
  document.body.appendChild(appContainer);

  const root = createRoot(appContainer);
  root.render(<StickerURLApp />);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}