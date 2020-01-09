import React from "react";
import HotSauceCard from "../../../components/HotSauceCard";
import { View, FlatList } from "react-native";
import { sauces } from "../../../data/sauces";
import EmptyCard from "../../../components/EmptyCard";

interface Props {
  screenProps: {
    favoriteIds: number[];
    refresh: () => void;
  };
}
interface State {}

class FavoritesListScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        {sauces.filter(sauce =>
          this.props.screenProps.favoriteIds.includes(sauce.id)
        ).length === 0 ? (
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
            data={sauces.filter(sauce =>
              this.props.screenProps.favoriteIds.includes(sauce.id)
            )}
          />
        )}
      </View>
    );
  }
}

export default FavoritesListScreen;
