import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  SearchBar,
  SearchInput,
  ListsContainer,
  Lists,
  ListsTitle,
  AddButton,
  AddButtonText,
} from './styles';

const ProductScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <SearchBar>
        <Icon name="search" size={20} color="#312e38" />
        <SearchInput placeholder="Buscar lista" />
      </SearchBar>
      <ListsContainer showsVerticalScrollIndicator={false}>
        <Lists>
          <ListsTitle>Produto 1</ListsTitle>
        </Lists>
        <Lists>
          <ListsTitle>Produto 2</ListsTitle>
        </Lists>
        <Lists>
          <ListsTitle>Produto 3</ListsTitle>
        </Lists>
        <Lists>
          <ListsTitle>Produto 4</ListsTitle>
        </Lists>
        <Lists>
          <ListsTitle>Produto 5</ListsTitle>
        </Lists>
        <Lists>
          <ListsTitle>Produto 6</ListsTitle>
        </Lists>
      </ListsContainer>
      <AddButton>
        <AddButtonText>+</AddButtonText>
      </AddButton>
    </Container>
  );
};

export default ProductScreen;
