import React from 'react';
import { StickerURLProps } from '../types';

const StickerURLDisplay: React.FC<StickerURLProps> = ({ url }) => {
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  };

  const handleOpenClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="line-sticker-url flex gap-2"
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 999
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            position: 'absolute',
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          🔗
        </div>
        <input
          type="text"
          value={url}
          readOnly
          className="input input-bordered input-sm"
          style={{
            width: '600px',
            paddingLeft: '32px'
          }}
          onClick={handleInputClick}
        />
      </div>
      <button
        className="btn btn-soft btn-sm"
        onClick={handleOpenClick}
      >
        Open
      </button>
    </div>
  );
};

export default StickerURLDisplay;
