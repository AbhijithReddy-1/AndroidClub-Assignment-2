import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            MOBILES
          </Text>
          <Button
            onPress={() => navigation.navigate('HomeScreenStack')}
            title="Home Stack"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="LAPTOPS"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="EARPHONES"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
        
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;