//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { editSesion } from "../../redux/actions/index";
import { connect } from "react-redux";

// create a component
class Edit extends Component {
  state = {
    objetivos: this.props.route.params.objetivos,
    notas: this.props.route.params.notas,
    logros: this.props.route.params.logros,
    mejoras: this.props.route.params.mejoras,
    fecha: this.props.route.params.fecha,
    key: this.props.route.params.key,
  };

  submit = () => {
    this.props.editSesion(
      this.state.objetivos,
      this.state.notas,
      this.state.logros,
      this.state.mejoras,
      this.state.fecha,
      this.state.key
    );

    this.setState({
      objetivos: "",
      notas: "",
      logros: "",
      mejoras: "",
      key: "",
      fecha: new Date(),
    });

    this.props.navigation.navigate("showDocuments");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title1}>Objetivos</Text>
          <View style={styles.input}>
            <TextInput
              multiline={true}
              placeholder="objetivos"
              onChangeText={(objetivos) => this.setState({ objetivos })}
              value={this.state.objetivos}
            />
          </View>
          <Text style={styles.title1}>Notas</Text>
          <View style={styles.input}>
            <TextInput
              multiline={true}
              placeholder="Notas"
              onChangeText={(notas) => this.setState({ notas })}
              value={this.state.notas}
            />
          </View>
          <Text style={styles.title1}>Logros</Text>
          <View style={styles.input}>
            <TextInput
              multiline={true}
              placeholder="Logros"
              onChangeText={(logros) => this.setState({ logros })}
              value={this.state.logros}
            />
          </View>
          <Text style={styles.title1}>Mejoras</Text>
          <View style={styles.input}>
            <TextInput
              multiline={true}
              placeholder="Mejoras"
              onChangeText={(mejoras) => this.setState({ mejoras })}
              value={this.state.mejoras}
            />
          </View>
          <TouchableOpacity
            style={styles.touchable}
            title="Submit"
            onPress={this.submit}
          >
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              Editar Sesion
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#e08131",
  },
  title1: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginTop: 15,
  },
  input: {
    backgroundColor: "#fff2e1",
    marginTop: 20,
    borderRadius: 15,
    height: 90,
    borderWidth: 1,
    borderWidth: 0,
    padding: 5,
  },
  touchable: {
    backgroundColor: "#a31b00",
    height: 40,
    width: 200,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    margin: 20,
  },
});

//make this component available to the app
export default connect(null, { editSesion })(Edit);
