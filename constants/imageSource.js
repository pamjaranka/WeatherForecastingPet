import {
  PET_DOG,
  RAIN,
  SNOW,
  SUNNY,
  TEMP_COLD,
  TEMP_FROSTY,
  TEMP_HOT,
  TEMP_MILD,
  TEMP_WARM,
} from './forecast';

export const IMAGE_PATH = '../assets/images/';
export const IMAGE_EXTENSION = 'gif';

export const IMAGE_SOURCE = {
  [`${PET_DOG}${TEMP_HOT}`]: require('../assets/images/dog_hot.gif'),
  [`${PET_DOG}${TEMP_HOT}${RAIN}`]: require('../assets/images/dog_hot_rain.gif'),
  [`${PET_DOG}${TEMP_HOT}${SUNNY}`]: require('../assets/images/dog_hot_sunny.gif'),
  [`${PET_DOG}${TEMP_HOT}${SUNNY}${RAIN}`]: require('../assets/images/dog_hot_sunny_rain.gif'),
  [`${PET_DOG}${TEMP_WARM}`]: require('../assets/images/dog_warm.gif'),
  [`${PET_DOG}${TEMP_WARM}${RAIN}`]: require('../assets/images/dog_warm_rain.gif'),
  [`${PET_DOG}${TEMP_WARM}${SUNNY}`]: require('../assets/images/dog_warm_sunny.gif'),
  [`${PET_DOG}${TEMP_WARM}${SUNNY}${RAIN}`]: require('../assets/images/dog_warm_sunny_rain.gif'),
  [`${PET_DOG}${TEMP_MILD}`]: require('../assets/images/dog_mild.gif'),
  [`${PET_DOG}${TEMP_MILD}${RAIN}`]: require('../assets/images/dog_mild_rain.gif'),
  [`${PET_DOG}${TEMP_MILD}${SUNNY}`]: require('../assets/images/dog_mild_sunny.gif'),
  [`${PET_DOG}${TEMP_MILD}${SUNNY}${RAIN}`]: require('../assets/images/dog_mild_sunny_rain.gif'),
  [`${PET_DOG}${TEMP_COLD}`]: require('../assets/images/dog_cold.gif'),
  [`${PET_DOG}${TEMP_COLD}${RAIN}`]: require('../assets/images/dog_cold_rain.gif'),
  [`${PET_DOG}${TEMP_COLD}${SNOW}`]: require('../assets/images/dog_cold_snow.gif'),
  [`${PET_DOG}${TEMP_COLD}${SUNNY}`]: require('../assets/images/dog_cold_sunny.gif'),
  [`${PET_DOG}${TEMP_COLD}${SUNNY}${RAIN}`]: require('../assets/images/dog_cold_sunny_rain.gif'),
  [`${PET_DOG}${TEMP_COLD}${SUNNY}${SNOW}`]: require('../assets/images/dog_cold_sunny_snow.gif'),
  [`${PET_DOG}${TEMP_FROSTY}`]: require('../assets/images/dog_frosty.gif'),
  [`${PET_DOG}${TEMP_FROSTY}${RAIN}`]: require('../assets/images/dog_frosty_rain.gif'),
  [`${PET_DOG}${TEMP_FROSTY}${SNOW}`]: require('../assets/images/dog_frosty_snow.gif'),
  [`${PET_DOG}${TEMP_FROSTY}${SUNNY}`]: require('../assets/images/dog_frosty_sunny.gif'),
  [`${PET_DOG}${TEMP_FROSTY}${SUNNY}${RAIN}`]: require('../assets/images/dog_frosty_sunny_rain.gif'),
  [`${PET_DOG}${TEMP_FROSTY}${SUNNY}${SNOW}`]: require('../assets/images/dog_frosty_sunny_snow.gif'),
};
