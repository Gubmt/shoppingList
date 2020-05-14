import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  height: 45px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 22px;
  margin-bottom: 15px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 5px;
`;

export const ListsContainer = styled.ScrollView`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Lists = styled.TouchableOpacity`
  height: 90px;
  background: #fff;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ListsTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #312e38;
`;

export const AddButton = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background: #00bfff;
  position: absolute;
  bottom: 15px;
  right: 15px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`;
