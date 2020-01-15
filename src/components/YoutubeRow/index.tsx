import React, { useState } from "react";
import { ListItem, Button, Icon } from "native-base";
import WebView from "react-native-webview";

import { Seasons } from "../../../data/sauces";
import { View, Text } from "react-native";

interface Props {
  item: {
    id: number;
    season: Seasons;
    youtubeTitle: string;
    youtubeUrl: string;
  };
}

const YoutubeRow: React.FC<Props> = ({ item }) => {
  const [playVideo, activateVideo] = useState(false);
  const [viewed, hasViewedVideo] = useState(false);

  const handlePlayToggle = () => {
    activateVideo(false);
    setTimeout(() => {
      activateVideo(true);
    }, 500);
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ListItem
        style={{
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 0.9
          }}
        >
          <Text
            style={{
              alignSelf: "flex-start",

              marginBottom: 5,
              color: "#e42f2c"
            }}
          >
            {item.youtubeTitle}
          </Text>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "gray",
              fontWeight: "400"
            }}
          >
            {item.season}
          </Text>
        </View>
        <View>
          {!viewed ? (
            <Button
              onPress={() => activateVideo(true)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: "#c4302b"
              }}
            >
              <Text
                style={{
                  paddingLeft: 10,
                  fontWeight: "700",
                  color: "white"
                }}
              >
                Watch
              </Text>
              <Icon type={"AntDesign"} name="youtube" />
            </Button>
          ) : (
            <Button
              onPress={handlePlayToggle}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: "#c4302b"
              }}
            >
              <Text
                style={{
                  paddingLeft: 10,
                  fontWeight: "700",
                  color: "white"
                }}
              >
                Watch
              </Text>
              <Icon type={"AntDesign"} name="youtube" />
            </Button>
          )}
        </View>
      </ListItem>
      {playVideo && (
        <WebView
          onLoadStart={() => hasViewedVideo(true)}
          source={{ uri: item.youtubeUrl }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

export default YoutubeRow;
