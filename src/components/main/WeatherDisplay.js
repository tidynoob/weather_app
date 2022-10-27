import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import WeatherIcon from '../misc/WeatherIcon';

function WeatherDisplay(props) {
  const { weather } = props;
  const { weather: weatherData, forecast } = weather;
  const { main, name, weather: weatherArray } = weatherData;
  const { temp, temp_max: tempMax, temp_min: tempMin } = main;
  const { description, icon } = weatherArray[0];
  // eslint-disable-next-line
  const { list } = forecast;

  const roundNum = (num) => (Math.round(num * 10) / 10).toFixed(1);

  return (
    main && (
      <Box display="flex" flexDir="column" alignItems="center">
        <Heading size="3xl" textAlign="center">
          {name}
        </Heading>
        <WeatherIcon iconId={icon} desc={description} />
        <Flex flexDir="column" alignItems="center">
          <Text as="b" fontSize="5xl">
            {roundNum(temp)}°
          </Text>
          <Flex justifyContent="space-between" w="75%">
            <Text as="b">High:</Text>
            <Text ml="auto">{roundNum(tempMax)}°</Text>
          </Flex>
          <Flex justifyContent="space-between" w="75%">
            <Text as="b">Low:</Text>
            <Text ml="auto">{roundNum(tempMin)}°</Text>
          </Flex>
        </Flex>
      </Box>
    )
  );
}

WeatherDisplay.propTypes = {
  weather: PropTypes.shape({
    weather: PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number,
        feels_like: PropTypes.number,
      }),
      name: PropTypes.string,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
    }),
    forecast: PropTypes.shape({
      list: PropTypes.arrayOf(
        PropTypes.shape({
          dt: PropTypes.number,
          main: PropTypes.shape({
            temp: PropTypes.number,
            temp_max: PropTypes.number,
            temp_min: PropTypes.number,
            feels_like: PropTypes.number,
          }),
          weather: PropTypes.arrayOf(
            PropTypes.shape({
              main: PropTypes.string,
              description: PropTypes.string,
              icon: PropTypes.string,
            })
          ),
        })
      ),
    }),
  }).isRequired,
};

export default WeatherDisplay;
