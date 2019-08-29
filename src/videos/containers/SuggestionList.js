import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import {connect} from 'react-redux'
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

export class SuggestionList extends Component {

  keyExtractor = (item) => item.id.toString()

  itemSeparator = () => <VerticalSeparator />

  renderEmpty = () => <Empty text="No recommendatios" />

  renderItem = ({item}) => {
    return (
      <Suggestion {...item} />
    )
  }

  render() {
    const list = [
      {
        title: 'pabtab',
        key: '1',
      },
      {
        title: 'goku',
        key: '2',
      },
    ];

    return (
      <SuggestionListLayout title="Recomendations for you">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.suggestionList
  }
}

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps)(SuggestionList)