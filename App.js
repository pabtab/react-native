import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';

import api from './src/utils/api';

export default class App extends Component {

  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await api.getSuggestions(10);
    const categories = await api.getMovies();
    console.log(categories)
    this.setState({ suggestionList: movies, categoryList: categories })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Header</Text>
        <Text>Shenlong</Text>
        <CategoryList 
          list={this.state.categoryList}
        />
        <SuggestionList 
          list={this.state.suggestionList}
        />

      </Home>
    );
  }
}
