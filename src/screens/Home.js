import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default Home = () => {
  const smurfData = useSelector((state)=> state.smurfData);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{smurfData.length > 0 ? smurfData[1].title: 'No records found!'}</Text>
    </View>
  );
}

