//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { editSesion } from "../../redux/actions/index";
import { connect } from "react-redux";

// create a component
class Edit extends Component {
  state = {
    objetivos: this.props.navigation.state.params.objetivos,
    notas: this.props.navigation.state.params.notas,
    logros: this.props.navigation.state.params.logros,
    mejoras: this.props.navigation.state.params.mejoras,
    key: this.props.navigation.state.params.key,
  };

  submit = () => {
    this.props.editSesion(
      this.state.objetivos,
      this.state.notas,
      this.state.logros,
      this.state.mejoras,
      this.state.key
    );

    this.setState({
      objetivos: "",
      notas: "",
      logros: "",
      mejoras: "",
      key: "",
    });

    this.props.navigation.navigate("Sesions");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Post</Text>
        <TextInput
          style={{
            marginTop: 20,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="title"
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
        />
        <TextInput
          style={{
            marginTop: 20,
            height: 90,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="content"
          onChangeText={(content) => this.setState({ content })}
          value={this.state.content}
        />
        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default connect(null, { editSesion })(Edit);
