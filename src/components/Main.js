import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
// import LocationInput from './main/LocationInput';
import WeatherDisplay from './main/WeatherDisplay';
import ForecastDisplay from './main/ForecastDisplay';

function Main(props) {
  const { weather } = props;
  // console.log(weather.forecast);
  const roundNum = (num) => (Math.round(num * 10) / 10).toFixed(1);
  const getDate = (date) => {
    const newDate = new Date(date * 1000);
    const day = newDate.getDate();
    // const month = newDate.getMonth() + 1;
    const monthName = newDate.toLocaleString('default', { month: 'short' });
    // const year = newDate.getFullYear();
    return `${monthName}-${day}`;
  };

  const getDateTimestamp = (date) => {
    const newDate = new Date(date * 1000);
    const day = newDate.getDate();
    // const month = newDate.getMonth() + 1;
    const monthName = newDate.toLocaleString('default', { month: 'short' });
    // const year = newDate.getFullYear();
    const time = newDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
    return `${monthName} ${day} ${time}`;
  };

  return (
    <Box
      // bgColor="white"
      mt={4}
      maxW={{ base: '95%', md: 'sm' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      // p={4}
      gap={4}
      // borderRadius="md"
      // boxShadow="md"
    >
      {/* <LocationInput handleLocation={handleLocation} /> */}
      <WeatherDisplay
        weather={weather}
        getDateTimestamp={getDateTimestamp}
        roundNum={roundNum}
      />
      <ForecastDisplay
        forecast={weather.forecast}
        getDate={getDate}
        roundNum={roundNum}
      />
    </Box>
  );
}

Main.propTypes = {
  // handleLocation: PropTypes.func.isRequired,
  weather: PropTypes.shape({
    weather: PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number,
        feels_like: PropTypes.number,
      }),
      name: PropTypes.string,
      dt: PropTypes.number,
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
