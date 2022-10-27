import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import LocationInput from './main/LocationInput';
import WeatherDisplay from './main/WeatherDisplay';

function Main(props) {
  const { handleLocation, handleWeather, weather } = props;

  return (
    <Box
      mt={6}
      maxW="sm"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      px={4}
      gap={4}
    >
      <LocationInput
        handleLocation={handleLocation}
        handleWeather={handleWeather}
      />
      <WeatherDisplay weather={weather} />
    </Box>
  );
}

Main.propTypes = {
  handleLocation: PropTypes.func.isRequired,
  handleWeather: PropTypes.func.isRequired,
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
  }),
};

Main.defaultProps = {
  weather: {
    weather: {
      main: {
        temp: null,
        temp_max: null,
        temp_min: null,
        feels_like: null,
      },
      name: null,
      weather: [
        {
          description: null,
          icon: null,
        },
      ],
    },
    forecast: {
      list: [
        {
          dt: null,
          main: {
            temp: null,
            temp_max: null,
            temp_min: null,
            feels_like: null,
          },
          weather: [
            {
              main: null,
              description: null,
              icon: null,
            },
          ],
        },
      ],
    },
  },
};

export default Main;
