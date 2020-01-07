import HotSauceListScreen from "..";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export const TabNavigator = createBottomTabNavigator({
  Home: HotSauceListScreen,
  Settings: HotSauceListScreen
});

export default createAppContainer(TabNavigator);
