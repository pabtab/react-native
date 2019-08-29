import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';

import api from './src/utils/api';
import Player from './src/player/containers/Player';
import store from './store';

export default class App extends Component {
  async componentDidMount() {
    const suggestionList = await api.getSuggestions(10);
    const categoryList = await api.getMovies();
    console.log(categoryList);

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });

    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <Text>Categorias</Text>
          <Text>Header</Text>
          <CategoryList />
          <SuggestionList />

        </Home>
      </Provider>
    );
  }
}
