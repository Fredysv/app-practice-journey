//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableHighlight,
  Alert,
} from "react-native";
import { getSesion, deleteSesion } from "../../redux/actions/index";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import _ from "lodash";
import * as MailComposer from "expo-mail-composer";

class Sesion extends Component {
  componentDidMount() {
    this.props.getSesion();
  }
  render() {
    const sendEmail = (sesioninfo) => {
      console.log(sesioninfo);
      //var line = "<br>";
      MailComposer.composeAsync({
        recipients: [],
        subject: "Sesion",
        body:
          "\n\n Objetivos:\n" +
          sesioninfo[0] +
          "\n\n Notas:\n" +
          sesioninfo[1] +
          "\n\n Logros:\n" +
          sesioninfo[2] +
          "\n\n Mejoras:\n" +
          sesioninfo[3],
      });
    };
    return (
      <View style={styles.container}>
        {this.props.loadingReducer ? (
          <Text>Loading Please Wait</Text>
        ) : (
          <FlatList
            style={{ width: "100%" }}
            data={this.props.listOfSesion}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    elevation: 8,
                    marginBottom: 15,
                    borderRadius: 15,
                    backgroundColor: "#a31800",
                    padding: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#fff",
                      marginBottom: 10,
                    }}
                  >
                    {" "}
                    {item.objetivos}
                  </Text>
                  <Text style={{ fontSize: 20, lineHeight: 30, color: "#fff" }}>
                    {item.notas}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      marginTop: 25,
                    }}
                  >
                    <TouchableHighlight
                      onPress={() =>
                        Alert.alert(
                          "Enviar correo",
                          "Seguro que quieres enviar esta sesion?",
                          [
                            {
                              text: "Cancel",
                              style: "cancel",
                            },
                            {
                              text: "OK",
                              onPress: () =>
                                sendEmail([
                                  item.objetivos,
                                  item.notas,
                                  item.logros,
                                  item.mejoras,
                                ]),
                            },
                          ],
                          { cancelable: false }
                        )
                      }
                    >
                      <View style={{ marginRight: 15 }}>
                        <Icon size={30} color="white" name="send" />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate("showEdit", { ...item })
                      }
                    >
                      <View style={{ marginRight: 15 }}>
                        <Icon size={30} color="white" name="edit" />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => this.props.deleteSesion(item.key)}
                    >
                      <View>
                        <Icon size={30} color="white" name="close" />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
});

function mapStateToProps(state) {
  const listOfSesion = _.map(state.sesionList.sesionList, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    listOfSesion,
    loadingReducer: state.loadingReducer.loadingReducer,
  };
}

export default connect(mapStateToProps, { getSesion, deleteSesion })(Sesion);
