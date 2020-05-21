import {MONTH_SHORT_NAMES} from '../../constants/forecast';

export const tabLabels = forecastData => {
  const dateInfo = new Date();
  const dayToday = dateInfo.getDate();
  const monthToday = dateInfo.getMonth();
  let tomorrow = false;

  const result = forecastData.map(value => {
    const {dt: {day, month, hours}} = value;
    const label = {
      hours: `${hours}`,
      minutes: '00',
    };
    if (!tomorrow && day !== dayToday && month !== monthToday) {
      label.day = `${MONTH_SHORT_NAMES[value.dt.month - 1]} ${value.dt.day}`;
      tomorrow = true;
    }
    return label;
  });

  return [
    {
      hours: 'now',
    },
    ...result,
  ];
};
