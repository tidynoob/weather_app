import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Box,
  Flex,
  useBoolean,
  Button,
  InputRightElement,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import DeleteIcon from './DeleteIcon';

function LocationInput(props) {
  const [hasText, setHasText] = useBoolean();
  const { handleLocation } = props;
  //   const { handleWeather } = props;

  const formik = useFormik({
    initialValues: {
      location: '',
    },
    onSubmit: (values) => {
      handleLocation(values.location);
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    if (e.target.value.length > 0) {
      setHasText.on();
    } else {
      setHasText.off();
    }
  };

  const handleClear = () => {
    formik.setFieldValue('location', '');
    setHasText.off();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit();
    // handleWeather();
  };

  const deleteIconBtn = (
    <DeleteIcon
      as="button"
      onClick={handleClear}
      color="gray.100"
      w="1.25rem"
      h="1.25rem"
      ml="2"
      cursor="pointer"
    />
  );

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDir="column" gap={4}>
        <InputGroup>
          <InputLeftAddon children="City, Country" />
          <Input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            value={formik.values.location}
            placeholder="San Diego, US"
          />
          {hasText && <InputRightElement children={deleteIconBtn} />}
        </InputGroup>
        <Button type="submit" disabled={!hasText} w="full" colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </form>
  );
}

LocationInput.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

function WeatherDisplay(props) {
  const { weather } = props;
  const { main, name } = weather;

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
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
      feels_like: PropTypes.number,
    }),
    name: PropTypes.string,
  }).isRequired,
};

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
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
      feels_like: PropTypes.number,
    }),
    name: PropTypes.string,
  }),
};

Main.defaultProps = {
  weather: {
    main: {
      temp: null,
      temp_max: null,
      temp_min: null,
      feels_like: null,
    },
    name: null,
  },
};

export default Main;
