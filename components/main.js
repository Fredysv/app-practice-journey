import React, { Component } from "react";
import { Text, View } from "react-native";
//Conecting redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

//Bottom-tabs
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SesionScreen from "./main/sesion";
import DocumentScreen from "./main/document";
import ChatScreen from "./main/chat";
import ProfileScreen from "./main/profile";
import EditScreen from "./main/edit";
const Tab = createMaterialBottomTabNavigator();
//Material
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createStackNavigator } from "@react-navigation/stack";
const DocumentScreenRoute = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="showDocument">
      <Stack.Screen name="showDocuments" component={DocumentScreen} />
      <Stack.Screen name="showEdit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export class main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        activeColor="#d9a458"
        barStyle={{
          backgroundColor: "#fff2e1",
        }}
      >
        <Tab.Screen
          name="Sesion"
          component={SesionScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Document"
          component={DocumentScreenRoute}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="file-document"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
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
