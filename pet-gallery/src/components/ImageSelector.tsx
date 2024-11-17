import React from 'react';
import { ImageSelectorProps } from '../types/ImageSelectorProps';

const ImageSelector: React.FC<ImageSelectorProps> = ({ imageUrl, onSelect, isSelected }) => (
  <div 
    onClick={() => onSelect(imageUrl)} 
    style={{
      cursor: 'pointer', 
      border: isSelected ? '2px solid blue' : 'none'
    }}
  >
    <img src={imageUrl} alt="Pet" style={{ width: '100%', height: 'auto' }} />
  </div>
);

export default ImageSelector;
