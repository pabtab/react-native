import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import Player from './player/containers/Player';
import SuggestionList from './videos/containers/SuggestionList';
import CategoryList from './videos/containers/CategoryList';
import Movie from './screens/containers/Movie';
import api from './utils/api';
import Search from './sections/containers/Search';

export class AppContainer extends Component {
  async componentDidMount() {
    const suggestionList = await api.getSuggestions(10);
    const categoryList = await api.getMovies();
    console.log(categoryList);

    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });

    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />;
    }

    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />

      </Home>
    );
  }
}

const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = {

};


export default connect(mapStateToProps)(AppContainer);
