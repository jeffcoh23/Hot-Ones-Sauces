import React from "react";
import { View } from "react-native";
import { Title } from "native-base";
import { screenWidth } from "../../screens/HotSauceListScreen";

interface Props {}

const MoreEpisodesToCome: React.FC<Props> = () => (
  <View style={{ backgroundColor: "white", width: screenWidth }}>
    <Title>More Episodes Coming Soon!</Title>
  </View>
);

export default MoreEpisodesToCome;
