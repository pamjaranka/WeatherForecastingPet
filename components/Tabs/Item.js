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
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{day ? day : ''}</Text>
      <Button
        transparent
        style={styles.button}
        onPress={onPress}>
        <View style={styles.time}>
          <Text style={isActive ? styles.hoursActive : styles.hours}>
            {hours}
          </Text>
          <Text style={isActive ? styles.minutesActive : styles.minutes}>
            {minutes}
          </Text>
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
    marginLeft: PADDING.xs,
    marginRight: PADDING.xs,
  },
  date: {
    color: COLORS.grey,
    alignSelf: 'flex-start',
    fontFamily: FONTS.primary,
    fontSize: FONTS.sm,
    paddingLeft: PADDING.xs,
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
  hoursActive: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.md,
  },
  minutes: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.xs,
  },
  minutesActive: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.xs,
  },
});

export default Item;
