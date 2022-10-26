import { Component } from 'react';
import {
  Searchbox,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    searchValue: '',
    page: 1,
  };

  handleSearchChange = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue.trim() === '') {
      return toast.error('Please enter any value to search for');
    }

    this.props.onSubmit(this.state.searchValue, this.state.page);

    this.setState({ searchValue: '', page: 1 });
    event.target.reset();
  };

  render() {
    return (
      <Searchbox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch size="2em" />
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
          />
        </SearchForm>
      </Searchbox>
    );
  }
}
