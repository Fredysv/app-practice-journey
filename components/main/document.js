//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { getSesion, deleteSesion } from "../../redux/actions/index";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import _ from "lodash";

class Sesion extends Component {
  componentDidMount() {
    this.props.getSesion();
  }

  render() {
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
                        this.props.navigation.navigate("Edit", { ...item })
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
