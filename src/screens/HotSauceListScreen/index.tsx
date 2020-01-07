import React from "react";
import HotSauceCard from "../../../components/HotSauceCard";
import {
  View,
  FlatList,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  Dimensions,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { sauces, Seasons } from "../../../data/sauces";
import SeasonPicker from "../../../components/SeasonPicker";
import { Item, Icon, Input, Button, Segment, Text } from "native-base";
import EmptyCard from "../../../components/EmptyCard";

interface State {
  selectedSeason: Seasons;
  selectedText: string;
  selectedPage: "All Sauces" | "Favorites";
}

export const screenWidth = Math.round(Dimensions.get("window").width);

interface Props {
  refresh: () => void;
  favoriteIds: number[];
}

class HotSauceListScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedPage: "All Sauces",
      selectedSeason: Seasons.all,
      selectedText: ""
    };
  }
  changeSeason = (itemValue: any, itemPosition) => {
    this.setState({ selectedSeason: itemValue });
  };

  filteredSauces = () =>
    this.state.selectedPage === "All Sauces"
      ? sauces
      : sauces.filter(sauce => this.props.favoriteIds.includes(sauce.id));
  render() {
    return (
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            borderRadius: 5,
            marginVertical: 5,
            // paddingHorizontal: 10,
            flexDirection: "row"
          }}
        >
          <Item
            style={{
              backgroundColor: "#ffcf02",
              paddingLeft: 10,
              flex: 1,
              borderRadius: 5
            }}
          >
            <Icon name="ios-search" />
            <Input
              style={{ fontWeight: "bold" }}
              onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
                this.setState({ selectedText: e.nativeEvent.text })
              }
              placeholder="Search"
            />
          </Item>
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <SeasonPicker
              selectedSeason={this.state.selectedSeason}
              changeSeason={this.changeSeason}
            />
          </View>
        </View>
        <Segment
          style={{
            // width: screenWidth / 2,
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "black"
          }}
        >
          <Button
            onPress={() => this.setState({ selectedPage: "All Sauces" })}
            style={
              this.state.selectedPage === "All Sauces"
                ? styles.activeButton
                : styles.inactiveButton
            }
            first
          >
            <Text
              style={
                this.state.selectedPage === "All Sauces"
                  ? styles.activeText
                  : styles.inactiveText
              }
            >
              All Sauces
            </Text>
          </Button>
          <Button
            onPress={() => this.setState({ selectedPage: "Favorites" })}
            style={
              this.state.selectedPage === "Favorites"
                ? styles.activeButton
                : styles.inactiveButton
            }
            last
          >
            <Text
              style={
                this.state.selectedPage === "Favorites"
                  ? styles.activeText
                  : styles.inactiveText
              }
            >
              Favorites
            </Text>
          </Button>
        </Segment>
        {this.filteredSauces().length === 0 ? (
          <EmptyCard />
        ) : (
          <FlatList
            style={{ flex: 1 }}
            renderItem={({ item }) => (
              <HotSauceCard
                refresh={this.props.refresh}
                favoriteIds={this.props.favoriteIds}
                sauce={item}
              />
            )}
            keyExtractor={sauce => sauce.id.toString()}
            data={this.filteredSauces()
              .filter(
                sauce =>
                  this.state.selectedSeason === Seasons.all ||
                  sauce.season === this.state.selectedSeason
              )
              .filter(
                sauce =>
                  sauce.name.includes(this.state.selectedText) ||
                  this.state.selectedText.length === 0
              )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeText: {
    color: "white"
  },
  inactiveText: {
    color: "black"
  },
  activeButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#e42f2c"
  },
  inactiveButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white"
  }
});

export default HotSauceListScreen;
