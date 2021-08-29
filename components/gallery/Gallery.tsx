/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { PhotoGalleryProps } from './types';

export interface GalleryProps {
  photos: PhotoGalleryProps[] | [];
  onClick: (index: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ photos, onClick }) => {

  const { isMobile } = useWindowSize();

  const handleSelected = (index: number) => {
    onClick(index);
  };

  return (
    <div className="row">
      {photos.map((picture, index) => (
        <div
          key={index}
          className={'col-lg-3 col-6'}
          style={{ cursor: 'pointer' }}
          onClick={_ => handleSelected(index)}>
          <img
            src={picture.src}
            style={{ width: isMobile ? picture.width / 3 : picture.width / 1.5 }}
            alt={picture.caption || "zTuber"} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
