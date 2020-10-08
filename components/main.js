import React, { Component } from "react";
import { Text, View } from "react-native";
//Conecting redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

//Bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SesionScreen from './main/sesion'
import DocumentScreen from './main/document'
import ChatScreen from './main/chat'
import ProfileScreen from './main/profile'
const Tab = createBottomTabNavigator();
//Material
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export class main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Sesion" component={SesionScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-month' color={color} size={26}/>
          )
        }}
        />
        <Tab.Screen name="Document" component={DocumentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-month' color={color} size={26}/>
          )
        }}
        />
        <Tab.Screen name="Chat" component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-month' color={color} size={26}/>
          )
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-month' color={color} size={26}/>
          )
        }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(main);
