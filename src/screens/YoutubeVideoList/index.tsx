import React from "react";
import { FlatList, View } from "react-native";
import YoutubeRow from "../../components/YoutubeRow";
import { episodes } from "../../../data/sauces";
import { screenWidth } from "../HotSauceListScreen";
import MoreEpisodesToCome from "../../components/MoreEpisodesToCome";

interface State {
  showWebview: boolean;
  item: any;
  videoHasBeenPlayed: boolean;
}

interface Props {}

class YoutubeVideoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showWebview: false,
      item: undefined,
      videoHasBeenPlayed: false
    };
  }

  handleButtonPressToYoutube = (item: any) => {
    this.setState({ item });
  };

  render() {
    return (
      <>
        <View style={{ marginTop: 5, width: screenWidth, flex: 1 }}>
          <FlatList
            style={{
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              width: screenWidth,
              flex: 1
            }}
            renderItem={({ item }) => <YoutubeRow key={item.id} item={item} />}
            keyExtractor={item => item.youtubeTitle}
            data={episodes}
          />
        </View>
        <MoreEpisodesToCome />
      </>
    );
  }
}

export default YoutubeVideoList;
