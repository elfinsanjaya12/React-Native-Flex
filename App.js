import React from "react";
import { StyleSheet, Text, View } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.perent}>
        {/* memberi nilai flex menjadi 1 maka auto full  */}
        <View
          style={{
            backgroundColor: "blue",
            // flex: 1,
            width: "100%",
            height: 80,
            borderRadius: 4,
            // marginHorizontal: 4,
            // marginLeft: 8,
            flexDirection: "row",
            padding: 10,
            marginBottom: 10,
            position: "relative"
          }}
        >
          <View
            style={{
              backgroundColor: "yellow",
              // flex: 1,
              width: 20,
              height: 20,
              marginHorizontal: 4,
              borderRadius: 100,
              position: "absolute",
              right: -10,
              top: -10
            }}
          />
          {/* <View
            style={{
              backgroundColor: "pink",
              flex: 1,
              marginHorizontal: 4
            }}
          />
          <View
            style={{
              backgroundColor: "yellow",
              flex: 1,
              marginHorizontal: 4
            }}
          /> */}
        </View>
        <View
          style={[
            {
              backgroundColor: "yellow",
              marginHorizontal: 4,
              marginLeft: 0,
              justifyContent: "center",
              alignItems: "center"
            },
            styles.box
          ]}
        >
          <Text>Center</Text>
        </View>
        <View
          style={[
            {
              backgroundColor: "orange",
              marginHorizontal: 4
            },
            styles.box
          ]}
        />
        <View
          style={[
            {
              backgroundColor: "green",
              marginHorizontal: 4,
              marginRight: 0
            },
            styles.box
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  perent: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    // margin: 20
    // marginTop: 8,
    paddingTop: 20,
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginHorizontal: 20
  },
  box: {
    flex: 1,
    height: 80,
    borderRadius: 4,
    marginHorizontal: 4
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
