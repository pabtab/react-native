import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import api from './src/utils/api';

export default class App extends Component {

  state = {
    suggestionList: []
  }

  async componentDidMount() {
    const movies = await api.getSuggestions(10);
    this.setState({ suggestionList: movies })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Header</Text>
        <Text>Shenlong</Text>
        <SuggestionList 
          list={this.state.suggestionList}
        />

      </Home>
    );
  }
}
