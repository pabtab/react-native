import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import api from '../../utils/api';

class Search extends Component {
  handleSubmit = async () => {
    const movie = await api.searchMovie(this.state.text)
    console.log(movie)
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movie[0]
      }
    })
  }

  handleChangeText = (text) => {
    this.setState({text})
  }

  render() {
    return (
      <TextInput
        placeholder="Search your video"
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search)