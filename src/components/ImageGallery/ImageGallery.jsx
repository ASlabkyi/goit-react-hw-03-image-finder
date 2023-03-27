import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ hits, isLoading }) => {
  return (
    <ImageGalleryStyle>
      {hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          tags={tags}
          isLoading={isLoading}
        />
      ))}
    </ImageGalleryStyle>
  );
};
