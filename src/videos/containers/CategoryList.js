/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Empty from '../components/Empty';
import CategoryListLayout from '../components/CategoryListLayout';
import HorizontalSeparator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Cateogry';
import {connect} from 'react-redux'
export class CategoryList extends Component {
  keyExtractor = (item) => item.id.toString()

  itemSeparator = () => <HorizontalSeparator />

  renderEmpty = () => <Empty text="No recommendatios" />

  renderItem = ({item}) => {
    return (
      <Category {...item} />
    )
  }

  render() {
    return (
      <View>
        <CategoryListLayout
          title="Categories"
        >
          <FlatList
            horizontal
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
          />
        </CategoryListLayout>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.categoryList
  }
}

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps)(CategoryList)