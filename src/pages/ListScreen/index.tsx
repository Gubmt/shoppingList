import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  SearchBar,
  SearchInput,
  ListsContainer,
  ListBox,
  ListsTitle,
  AddButton,
  AddButtonText,
} from './styles';

const ListScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([
    {
      title: 'Supermercado',
    },
    {
      title: 'Farmacia',
    },
    {
      title: 'Feira',
    },
    {
      title: 'Suprimentos',
    },
  ]);
  const [filteredList, setFilteredList] = useState(list);

  const navigation = useNavigation();

  function listFilter(filter) {
    if (filter !== '')
      setFilteredList(
        list.filter((item) => item.title.includes(filter.trim()))
      );
    else setFilteredList(list);
  }

  return (
    <Container>
      <SearchBar>
        <Icon name="search" size={20} color="#312e38" />
        <SearchInput
          placeholder="Buscar lista"
          onChangeText={(text) => listFilter(text)}
        />
      </SearchBar>
      <ListsContainer showsVerticalScrollIndicator={false}>
        <FlatList
          data={filteredList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListBox onPress={() => navigation.navigate('Produtos')}>
              <ListsTitle>{item.title}</ListsTitle>
            </ListBox>
          )}
        />
      </ListsContainer>
      <AddButton>
        <AddButtonText>+</AddButtonText>
      </AddButton>
    </Container>
  );
};

export default ListScreen;
