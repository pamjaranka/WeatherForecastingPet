import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Content} from 'native-base';
import ContentContainer from '../components/ContentContainer';
import FooterContainer from '../components/FooterContainer';
import LoadingHome from '../components/LoadingHome';
import {COLORS} from '../styles/base';
import useWeatherPhrases from '../hooks/useWeatherPhrases';

function HomeScreen({route}) {
  console.log('HomeScreen');
  console.log(route.params);
  const {
    isError,
    isLoading,
    currentData,
    forecastData,
    city,
    forecast,
  } = route.params;

  const weatherPhrase = useWeatherPhrases('Good boy!', forecast);
  console.log(`weatherPhrase ${weatherPhrase}`);

  return (
    <>
      {isLoading ? (
        <LoadingHome />
      ) : isError ? (
        <Text>Something went wrong...</Text>
      ) : (
        <>
          <Content style={styles.container}>
            <ScrollView>
              <ContentContainer
                city={city}
                currentData={currentData}
                forecastData={forecastData}
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
    backgroundColor: COLORS.lightGrey,
  },
});

export default HomeScreen;
