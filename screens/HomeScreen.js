import React from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import {Content} from 'native-base';
import ContentContainer from '../components/ContentContainer';
import FooterContainer from '../components/FooterContainer';
import {COLORS, PADDING} from '../styles/base';
import useWeatherPhrases from '../hooks/useWeatherPhrases';

function HomeScreen({navigation, route}) {
  console.log('HomeScreen');
  console.log(route);
  const {
    isError,
    isLoaded,
    isLoading,
    isCityError,
    data,
    city,
    forecast,
  } = route.params;

  const weatherPhrase = useWeatherPhrases('Good boy!', forecast);
  console.log(`weatherPhrase ${weatherPhrase}`);

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Content style={styles.container}>
            <ScrollView>
              <ContentContainer
                city={city}
                data={data}
                forecast={forecast}
              />
            </ScrollView>
          </Content>
          <FooterContainer phrase={weatherPhrase} />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingLeft: PADDING.md,
    paddingRight: PADDING.md,
  },
});

export default HomeScreen;
