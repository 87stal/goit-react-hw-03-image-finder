import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import ImageModal from './components/ImageModal/ImageModal';

import imagesApi from './services/api';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    page: 0,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevImages = prevState.images;
    const nextImages = this.state.images;
    if (prevQuery !== nextQuery) {
      this.fetchImages(nextQuery);
    }
    if (prevImages !== nextImages) {
      this.scroll();
    }
  }
  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  fetchImages = () => {
    this.setState({ isLoading: true });
    imagesApi
      .FetchImagesWithQuery(this.state.searchQuery, this.state.page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  handlerSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(() => ({ largeImage: null }));
  };

  setlargeImage = url => {
    this.setState({ largeImage: url });
  };
  render() {
    const { images, isLoading, largeImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handlerSearchFormSubmit} />

        {images.length > 0 && (
          <ImageGallery images={images} onSetImageLarge={this.setlargeImage} />
        )}
        {isLoading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && <Button fetchImages={this.fetchImages} />}
        {largeImage && (
          <Modal onClose={this.toggleModal}>
            <ImageModal largeImage={largeImage} />
          </Modal>
        )}
      </>
    );
  }
}
