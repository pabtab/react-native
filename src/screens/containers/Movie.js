import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Animated, View } from 'react-native';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';

export class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  } 

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000
      }
    ).start()
  }

  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }
  
  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity
        }}
      >
        <MovieLayout>
          <Header>
            <Close 
              onPress={this.closeVideo}
            />
          </Header>
          <Player />
          <Details {...this.props.movie}/>
        </MovieLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.selectedMovie
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps)(Movie)
