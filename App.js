import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import { Text, View } from "react-native";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

//Firebase config
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMeCDbeHUwJLPFPk_TzAH5CrAqHdjwcwg",
  authDomain: "practicejourneyapp.firebaseapp.com",
  databaseURL: "https://practicejourneyapp.firebaseio.com",
  projectId: "practicejourneyapp",
  storageBucket: "practicejourneyapp.appspot.com",
  messagingSenderId: "308592350050",
  appId: "1:308592350050:web:76fc9d9cfe2c91bd02d23b",
  measurementId: "G-QF3G8QDKD8",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
//Screens
import LandingScreen from "./components/auth/landing";
import RegisterScreen from "./components/auth/register";
import LoginScreen from "./components/auth/login";
import MainScreen from "./components/main";
const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  //Verifica si hay un usuario logeado o no
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  //
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: true, title: "Practice Journey" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

//----- YELLOW LOGS WARNS ------
//Navigate to your node_modules/react-native/Libraries/Core/Timers/JSTimers.js file.
//Look for the variable MAX_TIMER_DURATION_MS
//Change its value to 10000 * 1000
// the changes (with auto format turned off) and re-build your app.
