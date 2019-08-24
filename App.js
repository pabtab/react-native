import React from 'react';
import {
  Text,
} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';

const App = () => (
  <Home>
    <Header />
    <Text>Buscador</Text>
    <Text>Categorias</Text>
    <Text>Header</Text>
    <Text>Shenlong</Text>
    <SuggestionList />

  </Home>
);

export default App;
