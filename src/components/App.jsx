import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';

import { Searchbar } from './Searchbar/Searchbar';
import { Global } from '@emotion/react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { getData } from './services/postService';

import { Container, globalStyles, AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    hits: [],
    isLoading: false,
    search: '',
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      try {
        const data = await getData(this.state.search, this.state.page);
        this.setState(prevState => ({
          hits: prevState.hits.concat(data.hits),
        }));
      } catch (error) {
        alert(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleChangeSearch = async search => {
    this.setState({ search });
    this.setState({ isLoading: true });
    try {
      const data = await getData(search, 1);
      this.setState({ hits: data.hits });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { hits, isLoading } = this.state;

    return (
      <Container>
        <Global styles={globalStyles} />
        <AppWrapper>
          <Searchbar onSubmit={this.handleChangeSearch}></Searchbar>
          <ImageGallery hits={hits} />

          {isLoading && <Loader />}
          {hits.length > 0 && (
            <LoadMoreBtn title="Load More" onClick={this.handleChangePage} />
          )}
        </AppWrapper>
      </Container>
    );
  }
}
