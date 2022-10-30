import React from 'react';
import { Box, GridItem, useToast } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import Sidebar from './components/Sidebar';

const defaultWeather = {
  weather: {
    main: {
      temp: 0,
      tempMax: 0,
      tempMin: 0,
      feelsLike: 0,
    },
    name: '',
    weather: [
      {
        description: '',
        icon: '',
      },
    ],
  },
  forecast: {
    list: [
      {
        dt: 0,
        main: {
          temp: 0,
          tempMax: 0,
          tempMin: 0,
          feelsLike: 0,
        },
        weather: [
          {
            main: '',
            description: '',
            icon: '',
          },
        ],
      },
    ],
  },
};

function App() {
  const [location, setLocation] = React.useState('San Diego, US');
  const [weather, setWeather] = React.useState(defaultWeather);
  const errToast = useToast();
  const units = 'imperial';

  const getWeather = async (type) => {
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/${type}?q=${location}&units=${units}&appid=be52ad8c25d5b3d1fd27e03eb45e817d`
      );
      const resJSON = await apiRes.json();
      setWeather((prev) => ({
        ...prev,
        [type]: resJSON,
      }));

      // eslint-disable-next-line
      console.log(resJSON)

      return resJSON;
    } catch (err) {
      // eslint-disable-next-line
      // alert(err);
      setWeather(defaultWeather);
      errToast({
        title: 'Error',
        description: 'Please enter a valid location',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return err;
    }
  };

  React.useEffect(() => {
    getWeather('weather');
    getWeather('forecast');
    // eslint-disable-next-line
  }, [location]);

  return (
    <Box
      id="App"
      display="grid"
      gridTemplateRows="auto 1fr"
      gridTemplateColumns={{ base: 'auto', md: 'auto 1fr' }}
      h="100vh"
      bgColor="gray.100"
    >
      <GridItem rowStart={1} colSpan={{ base: '1', md: '2' }}>
        <Navbar handleLocation={setLocation} />
      </GridItem>
      <GridItem
        rowStart={2}
        visibility={{ base: 'hidden', md: 'visible' }}
        display={{ base: 'none', md: 'block' }}
      >
        <Sidebar handleLocation={setLocation} />
      </GridItem>
      <GridItem rowStart={2} colStart={{ base: '1', md: '2' }}>
        <Main weather={weather} />
      </GridItem>
    </Box>
  );
}

export default App;
