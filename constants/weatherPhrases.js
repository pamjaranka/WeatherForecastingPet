import {
  RAIN,
  SNOW,
  SUNNY,
  CLOUDS,
  WIND,
  TEMP_COLD,
  TEMP_FROSTY,
  TEMP_HOT,
  TEMP_MILD,
  TEMP_WARM,
} from './forecast';

export const PHRASE = 'Phrase';

export const WEATHER_PHRASES = {
  [`${PHRASE}${RAIN}`]: [
    'Take a rain check', // как-нибудь в другой раз
    'Right as rain', //в полном порядке
    'It’s raining cats and dogs',
    'It’s just drizzling',
  ],
  [`${PHRASE}${SUNNY}`]: [
    'Red sky at night, sailor’s delight',
    'There’s not a cloud in the sky',
    'A patch of sunlight',
    'Caught the sun',
  ],
  [`${PHRASE}${SNOW}`]: [
    'Blanket of snow',
    'Snowed in',
    'Let It Snow',
  ],
  [`${PHRASE}${WIND}`]: [
    'The wind’s picking up',
    'I can’t believe this weather!',
    'A gust of wind',
  ],
  [`${PHRASE}${CLOUDS}`]: [
    'Head in the clouds', //витать в облаках
    'Every cloud has a silver lining', //нет худа без добра
    'The sun is trying to come out',
  ],
  [`${PHRASE}${TEMP_HOT}`]: [
    'Dog days of summer',
    'We’re having quite a heatwave!',
    'It sure is a scorcher today',
    'It’s boiling hot!',
  ],
  [`${PHRASE}${TEMP_WARM}`]: [
    'As warm as toast',
    'Warm and fuzzy', //белый и пушистый
    'The body is still warm',
  ],
  [`${PHRASE}${TEMP_MILD}`]: [
    'The calm before the storm',
    'Rainbow in the morning gives you fair warning',
    'The climate here is very mild',
    'As mild as milk',
  ],
  [`${PHRASE}${TEMP_COLD}`]: [
    'It might drop below freezing tonight',
    'Baby, it’s cold outside',
    'Brace yourself, winter is coming',
    'Cold hands, warm heart',
  ],
  [`${PHRASE}${TEMP_FROSTY}`]: [
    'It’s freezing out there – make sure to bundle up!',
    'It’s freezing outside',
    'Jack Frost nipping at your nose',
  ],
};
