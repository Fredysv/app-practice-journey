//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { editSesion } from "../../redux/actions/index";
import { connect } from "react-redux";

// create a component
class Edit extends Component {
  state = {
    objetivos: this.props.route.params.objetivos,
    notas: this.props.route.params.notas,
    logros: this.props.route.params.logros,
    mejoras: this.props.route.params.mejoras,
    key: this.props.route.params.key,
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

    this.props.navigation.navigate("showDocuments");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sesion</Text>
        <TextInput
          style={{
            marginTop: 20,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="Objetivos"
          onChangeText={(objetivos) => this.setState({ objetivos })}
          value={this.state.objetivos}
        />
        <TextInput
          style={{
            marginTop: 20,
            height: 90,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="notas"
          onChangeText={(notas) => this.setState({ notas })}
          value={this.state.notas}
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
