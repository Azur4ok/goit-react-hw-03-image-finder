import React from 'react';

import {
  Button,
  Modal,
  Searchbar,
  Loader,
  ImageGallery,
} from './components/index';
import fetchData from './helpers/index';

export class App extends React.PureComponent {
  state = {
    page: 1,
    totalImages: 0,
    isLoading: false,
    showModal: false,
    images: [],
    largeImage: {},
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.query !== this.state.query) {
        this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
        const { imagesArray, totalImages } = await fetchData({
          query: this.state.query,
        });
        return this.setState({
          images: imagesArray,
          totalImages: totalImages,
          isLoading: false,
        });
      }
      if (prevState.page !== this.state.page && this.state.page !== 1) {
        this.setState({ isLoading: true });
        const { imagesArray } = await fetchData({
          query: this.state.query,
          page: this.state.page,
        });
        return this.setState(({ images, isLoading }) => ({
          images: [...images, ...imagesArray],
          isLoading: !isLoading,
        }));
      }
    } catch (error) {
      console.log(error);
      return alert('failed');
    }
  }

  handeleSubmit = query => this.setState({ query });

  onLoadMore = () => this.setState(({ page }) => ({ page: page + 1 }));

  onCloseModal = () => this.setState({ showModal: !this.state.showModal });

  onOpenModal = e => {
    const currentImage = e.target.dataset.modal_version;
    const currentAlt = e.target.alt;
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        largeImage: {url: currentImage, alt: currentAlt},
        
      }));
  };

  render() {
    const imagesOnPage = this.state.images.length;

    const handeleSubmit = this.handeleSubmit;
    const openModal = this.onOpenModal;
    const closeModal = this.onCloseModal;

    return (
      <div className='App'>
        {this.state.showModal && (
          <Modal onClose={closeModal} largeImage={this.state.largeImage} />
        )}
        <Searchbar onSubmit={handeleSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.images && (
          <ImageGallery images={this.state.images} onOpenModal={openModal} />
        )}
        {this.state.totalImages > imagesOnPage && imagesOnPage >= 12 && (
          <Button onLoad={this.onLoadMore} />
        )}
      </div>
    );
  }
}
