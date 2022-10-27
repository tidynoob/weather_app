import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

function WeatherDisplay(props) {
  const { weather } = props;
  const { weather: weatherData } = weather;
  const { main, name } = weatherData;

  return (
    main && (
      <Box>
        <Heading>{name}</Heading>
        <Flex flexDir="column">
          <Text>{main.temp}</Text>
          <Text>{main.temp_max}</Text>
          <Text>{main.temp_min}</Text>
          <Text>{main.feels_like}</Text>
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
