import React from 'react';
import CreateRouter from '~/routes';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar } from 'react-native';

getData = async () => {
    const value = await AsyncStorage.getItem('@user');
}

export default function App() {

  state = {
    id: 0,
  };

  const id = getData();

  let isSigned = false;
  if (id != 0)
     isSigned = true;

  const Routes = CreateRouter(isSigned);

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
    <Routes/>
    </>
  );
}
