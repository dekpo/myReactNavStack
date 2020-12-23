import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
    <Text>HOME</Text>
    <Button title="Got to Detail"
    onPress={() => { navigation.navigate('Detail',{
      id: 544, param2: 'coucou machin'
    }
    )}} 
    />
  </View>
  )
}

const Detail = ({route, navigation}) => {

  const { id, param2 } = route.params;

  return(
    <View style={styles.container}>

    <Text>DETAIL</Text>
    <Text>{ id }</Text>
    <Text>{ param2 }</Text>
    <Button title="Change Options"
    onPress={() => { navigation.setOptions({title: 'Title Changed'})}} 
    />

    <Button title="Change params"
    onPress={() => { navigation.setParams({id: 123, param2: 'YO'})}} 
    />

    <Button title="Got to Home"
    onPress={() => { navigation.navigate('Home')}} 
    />
    <Button title="Got to another Detail page"
    onPress={() => { navigation.push('Detail',
    {
      id: Math.round(Math.random() * 1000)
    }
    )}} 
    />
    <Button title="Got Back"
    onPress={() => { navigation.goBack()}} 
    />
     <Button title="Got to first screen"
    onPress={() => { navigation.popToTop()}} 
    />
  </View>
  )
}

const TopRight = () => {
  return(
  <Button
  onPress={()=>{
    alert('Yo HE IS ALIVE !!!')
  }} 
  title="Info" />
  )
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{title: 'My Title',

      headerStyle: styles.headerScreen,
      headerTintColor: '#000',
      headerTitleStyle:{
        fontWeight: 'bold'
      },
      headerRight: () => TopRight()
      
      }} />
      <Stack.Screen name="Detail" component={Detail}
      options={
        ({ route }) => ({
          title: 'Detail ' + route.params.id + ' ' + route.params.param2
        }),{
      headerStyle: styles.headerScreen
        }  
      }
      initialParams={{ id: 1234 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerScreen: {
    backgroundColor: '#EEEEEE',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
