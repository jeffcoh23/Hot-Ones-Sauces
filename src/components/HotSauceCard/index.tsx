import React, { Component } from "react";
import { Image, View, Linking, AsyncStorage } from "react-native";
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Sauce } from "../../../data/sauces";
interface Props {
  sauce: Sauce;
  refresh: () => void;
  favoriteIds: number[];
}

class HotSauceCard extends Component<Props> {
  handleAmazonPress = () => {
    Linking.openURL(this.props.sauce.amazonLink);
  };

  toggleFavorite = async () => {
    let ids: number[];
    await AsyncStorage.getAllKeys((e, items) => {
      const numberedItems = items.map(i => parseInt(i));
      ids = numberedItems;
    });
    if (ids.includes(this.props.sauce.id)) {
      AsyncStorage.removeItem(JSON.stringify(this.props.sauce.id));
    } else {
      await AsyncStorage.setItem(JSON.stringify(this.props.sauce.id), "hit");
    }
    this.props.refresh();
  };
  scovilleRating = this.props.sauce.scovilleRating;
  render() {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: "#ffcf02",
          borderRadius: 10,
          marginVertical: 5,
          flex: 1
        }}
      >
        <Card
          style={{ borderWidth: 5, borderColor: "#ffcf02", borderRadius: 100 }}
        >
          <CardItem>
            <Left>
              <Body>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        // maxWidth: 280,
                        fontWeight: "bold",
                        color: "#e42f2c"
                      }}
                    >
                      {this.props.sauce.name}
                    </Text>
                    <Text style={{ fontWeight: "400" }} note>
                      {this.props.sauce.season}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }}
                  >
                    <Button onPress={this.toggleFavorite} transparent>
                      {this.props.favoriteIds.includes(this.props.sauce.id) ? (
                        <Icon
                          active
                          style={{
                            fontSize: 30,
                            color: "#e42f2c"
                          }}
                          type={"AntDesign"}
                          name="heart"
                        />
                      ) : (
                        <Icon
                          active
                          style={{
                            fontSize: 30,
                            color: "#e42f2c"
                          }}
                          type={"AntDesign"}
                          name="hearto"
                        />
                      )}
                    </Button>
                  </View>
                </View>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              resizeMode="contain"
              source={this.props.sauce.imageURL}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center" }}>
                  <Icon
                    active
                    style={{ color: "#e42f2c" }}
                    type="FontAwesome5"
                    name="pepper-hot"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", flexDirection: "column" }}
                >
                  <Text
                    style={{
                      fontFamily: "System",
                      fontWeight: "500",
                      color: "#e42f2c"
                    }}
                  >
                    {this.scovilleRating.toLocaleString()}{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#e42f2c",
                      textTransform: "capitalize",
                      fontSize: 10
                    }}
                  >
                    (Scoville Heat Units)
                  </Text>
                </View>
              </View>
            </Left>
            {/* <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body> */}
            <Right>
              <Button
                // light={!!this.props.sauce.amazonLink}
                disabled={!!!this.props.sauce.amazonLink}
                onPress={this.handleAmazonPress}
                style={{
                  backgroundColor: !!!this.props.sauce.amazonLink
                    ? "lightgray"
                    : "#ffcf02"
                }}
              >
                <Icon
                  style={{ color: "black" }}
                  type="FontAwesome5"
                  name="amazon"
                />
                <Text
                  style={{
                    fontFamily: "System",
                    color: "black"
                  }}
                >
                  Buy Now
                </Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default HotSauceCard;
