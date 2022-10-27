import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Flex,
  useBoolean,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import DeleteIcon from '../misc/DeleteIcon';

function LocationInput(props) {
  const [hasText, setHasText] = useBoolean();
  const { handleLocation } = props;

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

export default LocationInput;
