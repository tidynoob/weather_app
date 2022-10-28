import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [location, setLocation] = React.useState('San Diego, US');
  const [weather, setWeather] = React.useState({
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
  });
  // const [units, setUnits] = React.useState('imperial');
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
      // console.log(resJSON)

      return resJSON;
    } catch (err) {
      // eslint-disable-next-line
      alert(err);
      return err;
    }
  };

  React.useEffect(() => {
    getWeather('weather');
    getWeather('forecast');
    // eslint-disable-next-line
  }, [location]);

  return (
    // <Box id="App">
    //   <Navbar />
    //   <Main
    //     handleLocation={setLocation}
    //     weather={weather}
    //     handleWeather={getWeather}
    //   />
    // </Box>
    <Box id="App" display="grid" gridTemplateRows="auto 1fr">
      <Navbar />
      <Sidebar handleLocation={setLocation} />
      <Main weather={weather} />
    </Box>
  );
}

export default App;
