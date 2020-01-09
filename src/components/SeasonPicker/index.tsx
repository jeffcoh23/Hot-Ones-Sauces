import React from "react";
import { Picker, Icon } from "native-base";
import { Seasons } from "../../../data/sauces";

interface Props {
  selectedSeason: Seasons;
  changeSeason: (itemValue: any, itemPosition: any) => void;
}

class SeasonPicker extends React.Component<Props> {
  render() {
    return (
      <Picker
        selectedValue={this.props.selectedSeason}
        onValueChange={this.props.changeSeason}
        style={{
          // borderLeftWidth: 5,
          borderRadius: 5,
          // borderTopLeftRadius: 5,
          // borderBottomLeftRadius: 5,
          height: 50,
          marginLeft: 10,
          backgroundColor: "#ffcf02"
        }}
        iosIcon={<Icon name="arrow-down" />}
        textStyle={{ fontWeight: "bold" }}
        placeholder="Season"
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
      >
        {Object.entries(Seasons).map(([k, v]) => (
          <Picker.Item key={v} label={v.toString()} value={v.toString()} />
        ))}
      </Picker>
    );
  }
}

export default SeasonPicker;
