import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Flex } from '@chakra-ui/react';
import WeatherIcon from '../misc/WeatherIcon';

function ForecastDisplay(props) {
  const { forecast, roundNum, getDate } = props;
  const { list } = forecast;
  const today = new Date().getTime() / 1000 + 86400;

  const filteredList = list.filter(
    (item, index, array) =>
      array.findIndex(
        (d) => getDate(d.dt) === getDate(item.dt) && d.dt > today
      ) === index
  );
  //   console.log(filteredList);

  const forecastList = filteredList.map((item) => {
    const { dt: date, main: forecastMain, weather: forecastWeather } = item;
    const { icon: forecastIcon } = forecastWeather[0];
    const { temp_max: forecastTempMax, temp_min: forecastTempMin } =
      forecastMain;
    return (
      <Box key={date} display="flex" flexDir="column" alignItems="center">
        <Text as="b" textAlign="center">
          {getDate(date)}
        </Text>
        <WeatherIcon iconId={forecastIcon} />
        <Flex justifyContent="space-between" w="75%">
          <Text>H:</Text>
          <Text>{roundNum(forecastTempMax)}°</Text>
        </Flex>
        <Flex justifyContent="space-between" w="75%">
          <Text>L:</Text>
          <Text>{roundNum(forecastTempMin)}°</Text>
        </Flex>
      </Box>
    );
  });

  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      shadow="md"
      bgColor="white"
      borderRadius="md"
      justifyContent={{ base: 'flex-start', md: 'space-evenly' }}
      p={4}
      gap={4}
      overflowX={{ base: 'scroll', md: 'hidden' }}
      w="100%"
    >
      {forecastList}
    </Box>
  );
}

ForecastDisplay.propTypes = {
  forecast: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
        main: PropTypes.shape({
          temp: PropTypes.number,
          temp_max: PropTypes.number,
          temp_min: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
  roundNum: PropTypes.func.isRequired,
  getDate: PropTypes.func.isRequired,
};

export default ForecastDisplay;
