import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
  const [location, setLocation] = React.useState('San Diego, US');
  const [weather, setWeather] = React.useState({});
  // const [units, setUnits] = React.useState('imperial');
  const units = 'standard';

  const getWeather = async () => {
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=be52ad8c25d5b3d1fd27e03eb45e817d`
      );
      const resJSON = await apiRes.json();
      setWeather(resJSON);
      // eslint-disable-next-line
      console.log(resJSON)
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  };

  React.useEffect(() => {
    getWeather();
    // eslint-disable-next-line
    console.log(location);
    // eslint-disable-next-line
  }, [location]);

  return (
    <Box id="App">
      <Navbar />
      <Main
        handleLocation={setLocation}
        weather={weather}
        handleWeather={getWeather}
      />
    </Box>
  );
}

export default App;
