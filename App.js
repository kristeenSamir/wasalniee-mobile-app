// //import React from 'react';
// //import { StyleSheet, Text, View } from 'react-native';
// import { db } from './src/config';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

//import Home from './src/screens/Home';
import { StackNavigator } from 'react-navigation';
import ViewPosts from './src/screens/ViewPosts'
// we will use these two screens later in our AppNavigator
//import AddItem from './src/screens/AddItem';
import SignupUser from "./src/screens/SignupUser";
import Post from './src/screens/Post';
import LogIn from './src/screens/LogIn';
import SplashScreen from './src/screens/SplashScreen';
//import List from './src/screens/List';

// const AppNavigator = createStackNavigator(
 
//     {
//       Post:Post
//     },{
//       ViewPosts:ViewPosts
//     },
//   {
//     SignupUser: SignupUser
//   },
  
  
// {
//   initialRouteName:"LogIn"
// }
// );

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

    // this.state = { isLoading: true }
  
  // performTimeConsumingTask = async() => {
  //   return new Promise((resolve) =>
  //     setTimeout(
  //       () => { resolve('result') },
  //       1000
  //     )
  //   );
  //     }
  //  async componentDidMount() {
  //   // Preload data from an external API
  //   // Preload data using AsyncStorage
  //   const data = await this.performTimeConsumingTask();

  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }
  // }

   render() {
    //if (this.state.isLoading) {
      return (<AppNavigator/>);
    }
    // return  (<AppNavigator/>);
}

