import React from "react";
import HotSauceCard from "../../components/HotSauceCard";
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
import SeasonPicker from "../../components/SeasonPicker";
import { Item, Icon, Input } from "native-base";
import EmptyCard from "../../components/EmptyCard";
import { NavigationTabProp, BottomTabBarProps } from "react-navigation-tabs";

interface State {
  selectedSeason: Seasons;
  selectedText: string;
  favoriteIds: number[];
}

export const screenWidth = Math.round(Dimensions.get("window").width);

interface Props {
  screenProps: {
    favoriteIds: number[];
    refresh: () => void;
  };
}

class HotSauceListScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedSeason: Seasons.all,
      selectedText: "",
      favoriteIds: []
    };
  }

  refresh = async () => {
    await AsyncStorage.getAllKeys((e, items) => {
      const numberedItems = items.map(i => parseInt(i));
      this.setState({ favoriteIds: numberedItems });
    });
  };
  changeSeason = (itemValue: any, itemPosition) => {
    this.setState({ selectedSeason: itemValue });
  };

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
        {sauces.length === 0 ? (
          <EmptyCard />
        ) : (
          <FlatList
            style={{ flex: 1 }}
            renderItem={({ item }) => (
              <HotSauceCard
                refresh={this.props.screenProps.refresh}
                favoriteIds={this.props.screenProps.favoriteIds}
                sauce={item}
              />
            )}
            keyExtractor={sauce => sauce.id.toString()}
            data={sauces
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
