import React from "react";
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";

export default function landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/landingscreen.png")}
      >
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.pressable}
        >
          <Text style={styles.text}>Iniciar Sesión</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={styles.pressable}
        >
          <Text style={styles.text}>Registrarme</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
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
});
