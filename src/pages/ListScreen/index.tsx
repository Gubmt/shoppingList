import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, SearchBar, SearchInput } from './styles';

const ListScreen: React.FC = () => (
  <Container>
    <SearchBar>
      <Icon name="search" size={20} color="#333" />
      <SearchInput />
    </SearchBar>
  </Container>
);

export default ListScreen;
