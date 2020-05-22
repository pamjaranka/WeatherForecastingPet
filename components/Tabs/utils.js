import {MONTH_SHORT_NAMES} from '../../constants/forecast';

export const tabLabels = forecastData => {
  const dateInfo = new Date();
  const dayToday = dateInfo.getDate();
  let tomorrow = false;

  return forecastData.map((value, index) => {
    const date = new Date(value.dt * 1000);
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth();

    const label = {
      hours: index === 0 ? 'now' : hours,
      minutes: index === 0 ? '' : '00',
    };
    if (!tomorrow && day !== dayToday) {
      label.day = `${MONTH_SHORT_NAMES[month]} ${day}`;
      tomorrow = true;
    }
    return label;
  });
};
