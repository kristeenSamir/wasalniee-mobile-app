import { createStackNavigator } from 'react-navigation';
import SignupUser from './src/screens/SignupUser';
import LogIn1 from './src/screens/LogIn1'
import ViewPosts from './src/screens/ViewPosts';

import Post from './src/screens/Post'
import {
  
  createAppContainer
} from 'react-navigation';
const AppNavigator= createStackNavigator({
  LogIn1: { screen:LogIn1},

  SignupUser:{screen:SignupUser},



  ViewPosts:{screen:ViewPosts},
  Post:{screen:Post},
});

const Appg = createAppContainer(AppNavigator);


  
  export default Appg ;