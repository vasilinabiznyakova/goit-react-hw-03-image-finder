import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Application } from './App.styled';
import { Button } from '../Button/Button';

// import { Component } from 'react';
// import { Gallery } from './ImageGallery.styled';

import { ErrorView } from 'components/ErrorView/ErrorView';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import picturesApi from '../../servises/pictures-api';

export class App extends Component {
  state = {
    searchValue: '',
    searchData: [],
    page: 1,
    pageTotal: 1,
    error: null,
    status: 'idle',
  };

  handleFormSubmit = (searchValue, page) => {
    this.setState({ searchValue, page });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchValue !== this.state.searchValue
    ) {
      this.setState({ status: 'pending' });
      const page = this.state.page;
      const searchValue = this.state.searchValue;
      picturesApi
        .fetchPictures(searchValue, page)
        .then(response => {
          if (response.data.total === 0) {
            return Promise.reject(
              new Error(
                `No results for search value ${searchValue}, please try another search value!`
              )
            );
          }
          const result = response.data.hits;
          const pageTotal = Math.ceil(result / 12);

          this.setState(prevState => ({
            status: 'resolved',
            searchData: [...prevState.searchData, ...result],
            pageTotal: pageTotal,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { searchData, error, status, page, pages } = this.state;

    return (
      <Application>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <p>Enter search value</p>}

        {status === 'rejected' && <ErrorView message={error.message} />}
        {status === 'resolved' && <ImageGallery searchData={searchData} />}
        {status === 'pending' && <Loader />}

        {searchData.length > 0 && page !== pages && (
          <Button loadMore={this.loadMore} buttonName="Load more" />
        )}
        <ToastContainer />
      </Application>
    );
  }
}
