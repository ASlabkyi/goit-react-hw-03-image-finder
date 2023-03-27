import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ hits, isLoading, openModal }) => {
  return (
    <ImageGalleryStyle>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          tags={tags}
          isLoading={isLoading}
          openModal={() => {
            openModal(largeImageURL);
          }}
        />
      ))}
    </ImageGalleryStyle>
  );
};
