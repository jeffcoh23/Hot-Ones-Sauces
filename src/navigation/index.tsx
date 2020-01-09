import HotSauceListScreen from "..";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesListScreen from "../../FavoritesListScreen";
import React from "react";
import { Icon } from "native-base";
export const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HotSauceListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor }} type={"FontAwesome"} name="home" />
        )
      }
    },
    Favorites: {
      screen: FavoritesListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ color: tintColor }}
            type={"FontAwesome"}
            name="heart"
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: "#e42f2c",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export const TabNavigator = createAppContainer(TabNavigation);
