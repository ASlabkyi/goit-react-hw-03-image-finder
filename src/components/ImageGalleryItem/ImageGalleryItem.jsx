import {
  ImageGalleryItemStyle,
  ImageGalleryItemImageStyle,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, id }) => {
  return (
    <ImageGalleryItemStyle key={id}>
      <ImageGalleryItemImageStyle src={webformatURL} alt={tags} />
    </ImageGalleryItemStyle>
  );
};
