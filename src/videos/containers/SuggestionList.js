import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

export default class SuggestionList extends Component {

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
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    );
  }
}
