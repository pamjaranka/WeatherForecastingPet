import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {tabLabels} from './utils';
import Item from './Item';

function Tabs(props) {
  const [active, setActive] = useState(0);
  const {forecastData, backgroundColor, activeColor} = props;
  const labels = tabLabels(forecastData);
  console.log('TABS4');

  const onPress = index => {
    return () => setActive(index);
  };
  const tabs = () => {
    const items = [];
    labels.forEach((val, i) => {
      items.push(
        <Item
          value={val}
          isActive={active === i}
          key={`slider_${i}`}
          onPress={onPress(i)}
          backgroundColor={backgroundColor}
          activeColor={activeColor}
        />
      );
    });
    return items;
  };

  return (
    <View
      style={{
        ...styles.container,
        // paddingLeft: LRPadding,
        // paddingRight: LRPadding,
      }}>
      {tabs()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  scale: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // justifyContent: 'stretch',
  },
});

export default Tabs;
