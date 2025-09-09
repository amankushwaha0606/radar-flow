// Mock for Next.js Image component
import React from 'react';

const NextImage = (props: any) => {
  const { src, alt, ...otherProps } = props;
  
  // Handle static imports
  const imageSrc = src?.src || src || '';
  
  return React.createElement('img', {
    src: imageSrc,
    alt: alt || '',
    ...otherProps,
  });
};

export default NextImage;
