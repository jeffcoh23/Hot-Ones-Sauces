import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  AsyncStorage
} from "react-native";
import HotSauceListScreen from "./src/screens/HotSauceListScreen";
import { Title } from "native-base";

interface Props {}

interface State {
  favoriteIds: number[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      favoriteIds: []
    };
  }
  async componentDidMount() {
    this.refresh();
  }

  refresh = async () => {
    let ids: number[];
    await AsyncStorage.getAllKeys((e, items) => {
      const numberedItems = items.map(i => parseInt(i));
      this.setState({ favoriteIds: numberedItems });
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Title
          style={{
            fontStyle: "italic",
            fontWeight: "800",
            fontSize: 36,
            color: "#e42f2c"
          }}
        >
          HOT ONES SAUCES
        </Title>
        <HotSauceListScreen
          refresh={this.refresh}
          favoriteIds={this.state.favoriteIds}
        />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
