import React from "react";
import { SafeAreaView, StatusBar, AsyncStorage, View } from "react-native";
import { Title } from "native-base";
import { TabNavigator } from "./src/navigation";

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
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
          <Title
            style={{
              fontWeight: "800",
              fontSize: 36,
              color: "#e42f2c"
            }}
          >
            HOT ONES FANS
          </Title>
        </SafeAreaView>
        <TabNavigator
          screenProps={{
            refresh: this.refresh,
            favoriteIds: this.state.favoriteIds
          }}
        />
      </View>
    );
  }
}

export default App;
