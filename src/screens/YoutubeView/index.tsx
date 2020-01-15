import React from "react";
import WebView from "react-native-webview";

interface Props {
  youtubeLink: string;
}
interface State {
  videoHasBeenPlayed: boolean;
}

class YoutubeView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      videoHasBeenPlayed: false
    };
  }
  onLoadEnd = () => {
    this.setState({ videoHasBeenPlayed: true });
  };
  render() {
    if (this.state.videoHasBeenPlayed) {
      return (
        <WebView
          onLoadEnd={this.onLoadEnd}
          source={{ uri: this.props.youtubeLink }}
          style={{ flex: 0.0001 }}
        />
      );
    }
  }
}

export default YoutubeView;
