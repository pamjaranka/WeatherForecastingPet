import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Content} from 'native-base';
import ContentContainer from '../components/ContentContainer';
import FooterContainer from '../components/FooterContainer';
import LoadingHome from '../components/LoadingHome';
import {COLORS} from '../styles/base';
import useWeatherPhrases from '../hooks/useWeatherPhrases';

function HomeScreen({route}) {
  console.log('HomeScreen');
  // console.log(route.params);
  const {
    isError,
    isLoading,
    forecastData,
    city,
  } = route.params;

  const [activeForecastIndex, setActiveForecastIndex] = useState(0);

  const onTabPress = index => {
    return () => setActiveForecastIndex(index);
  };
  const weatherPhrase = useWeatherPhrases({
    init: 'Good boy!',
    params: forecastData[activeForecastIndex].params,
  });
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
                activeForecastIndex={activeForecastIndex}
                onTabPress={onTabPress}
                forecastData={forecastData}
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
