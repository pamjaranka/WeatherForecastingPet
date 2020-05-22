import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import {FONTS, COLORS, PADDING} from '../../styles/base';

function Item(props) {
  const {
    value: {hours, minutes, day},
    isActive,
    onPress,
    backgroundColor,
    activeColor,
    index,
  } = props;
  // console.log(`this is tab with index ${index}`);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{day ? day : ''}</Text>
      <Button
        transparent
        style={styles.button}
        onPress={onPress}>
        <View style={styles.time}>
          <Text style={styles.hours}>{hours}</Text>
          <Text style={styles.minutes}>{minutes}</Text>
        </View>
      </Button>
      <View style={{
          ...styles.pointer,
          backgroundColor: isActive ? activeColor : backgroundColor}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  button: {
    borderRadius: 0,
    paddingLeft: PADDING.xs,
    paddingRight: PADDING.xs,
    paddingTop: 0,
    paddingBottom: 0,
    height: 30,
  },
  pointer: {
    height: 3,
  },
  date: {
    color: COLORS.grey,
    alignSelf: 'flex-start',
    fontFamily: FONTS.primary,
    fontSize: FONTS.md,
    marginTop: -PADDING.sm,
    marginBottom: PADDING.xs,
    height: 20,
  },
  time: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  hours: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.md,
  },
  minutes: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.xs,
  },
});

export default Item;
