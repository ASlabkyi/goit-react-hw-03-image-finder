import {
  ImageGalleryItemStyle,
  ImageGalleryItemImageStyle,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, id, openModal }) => {
  return (
    <ImageGalleryItemStyle key={id}>
      <ImageGalleryItemImageStyle
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />
    </ImageGalleryItemStyle>
  );
};
