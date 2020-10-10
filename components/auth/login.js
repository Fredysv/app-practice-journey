import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import * as firebase from "firebase";

export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/backgroundMain.png")}
        >
          <View style={styles.input}>
            <TextInput
              placeholder="email"
              onChangeText={(email) => this.setState({ email })}
            />
            <TextInput
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
          <Pressable styles={styles.pressable} onPress={() => this.onSignIn()}>
            <Text style={styles.text}>Log In</Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pressable: {
    height: 50,
    width: 300,
    backgroundColor: "#7A1500",
    alignSelf: "center",
    borderRadius: 10,
    margin: 10,
  },
  title1: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginTop: 15,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff2e1",
    marginTop: 20,
    borderRadius: 15,
    height: 100,
    width: 300,
    borderWidth: 0,
    padding: 5,
    alignSelf: "center",
  },
  textInput: {
    fontSize: 15,
  },
});

export default login;
