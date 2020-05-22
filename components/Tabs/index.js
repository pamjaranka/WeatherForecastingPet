import React from 'react';
import {StyleSheet, View} from 'react-native';
import {tabLabels} from './utils';
import Item from './Item';
import PropTypes from 'prop-types';

Tabs.propTypes = {
  forecastData: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  activeTab: PropTypes.number.isRequired,
  onTabPress: PropTypes.func.isRequired,
};

function Tabs(props) {
  const {
    forecastData,
    backgroundColor,
    activeColor,
    activeTab,
    onTabPress,
  } = props;
  const labels = tabLabels(forecastData);
  console.log('TABS');
  // console.log(`activeTab is ${activeTab}`);

  const tabs = () => {
    const items = [];
    labels.forEach((val, i) => {
      items.push(
        <Item
          value={val}
          isActive={activeTab === i}
          key={`slider_${i}`}
          onPress={onTabPress(i)}
          backgroundColor={backgroundColor}
          activeColor={activeColor}
        />
      );
    });
    return items;
  };

  return (
    <View
      style={styles.container}>
      {tabs()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scale: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default Tabs;
