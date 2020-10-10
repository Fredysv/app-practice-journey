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
import { postSesion } from "../../redux/actions/index";
import { connect } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// create a component
class Post extends Component {
  state = {
    objetivos: "",
    notas: "",
    logros: "",
    mejoras: "",
    fecha: "",
    visibility: false,
    DateDisplay: "",
  };

  submit = () => {
    this.props.postSesion(
      this.state.objetivos,
      this.state.notas,
      this.state.logros,
      this.state.mejoras,
      this.state.fecha
    );
    this.setState({
      objetivos: "",
      notas: "",
      logros: "",
      mejoras: "",
      fecha: new Date().toUTCString,
    });
    this.props.navigation.navigate("Document");
  };
  handleConfirm = (date) => {
    this.setState({ DateDisplay: date.toUTCString() });
    this.setState({ fecha: date.toUTCString() });
    console.log(date);
  };
  onPressCancel = () => {
    this.setState({ visibility: false });
  };
  onPressButton = () => {
    this.setState({ visibility: true });
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
            onPress={this.onPressButton}
            style={[styles.touchable, { height: 65 }]}
          >
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              Selecciona la fecha de la sesión
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              {this.state.DateDisplay}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            title="date"
            isVisible={this.state.visibility}
            onConfirm={this.handleConfirm}
            onCancel={this.onPressCancel}
            onChange={(fecha) => this.setState({ fecha })}
          />
          <TouchableOpacity
            style={styles.touchable}
            title="Submit"
            onPress={this.submit}
          >
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              Nueva Sesion
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
export default connect(null, { postSesion })(Post);
