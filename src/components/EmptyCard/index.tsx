import React, { Component } from "react";
import { View } from "react-native";
import { Card, Title } from "native-base";
import { Sauce } from "../../data/sauces";
interface Props {}

class EmptyCard extends Component<Props> {
  render() {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: "#ffcf02",
          borderRadius: 10,
          flex: 1,
          marginVertical: 5
        }}
      >
        <Card
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 5,
            borderColor: "#ffcf02",
            flex: 1
          }}
        >
          <Title
            style={{
              fontStyle: "italic",
              fontSize: 28,
              color: "#e42f2c"
            }}
          >
            No favorites added
          </Title>
        </Card>
      </View>
    );
  }
}

export default EmptyCard;
