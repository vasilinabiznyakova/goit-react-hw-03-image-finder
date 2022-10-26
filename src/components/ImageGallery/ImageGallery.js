import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ searchData }) => {
  return (
    <Gallery>
      {searchData.map(({ webformatURL, tags, id, largeImageURL }) => (
        <ImageGalleryItem
          weburl={webformatURL}
          tag={tags}
          largeImageURL={largeImageURL}
          key={id}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  searchData: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
