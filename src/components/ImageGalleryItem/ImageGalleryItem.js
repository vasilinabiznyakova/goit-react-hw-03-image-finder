import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { weburl, tag, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <GalleryItem onClick={this.toggleModal}>
          <GalleryImage src={weburl} alt={tag} />
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} alt={tag} />
            </Modal>
          )}
        </GalleryItem>
      </div>
    );
  }
}
ImageGalleryItem.propTypes = {
  weburl: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
