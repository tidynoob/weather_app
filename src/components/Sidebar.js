import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import LocationInput from './main/LocationInput';

function Sidebar(props) {
  const { handleLocation } = props;
  return (
    <Container h="100%" display="flex" flexDir="column">
      <Heading>My Sidebar</Heading>
      <LocationInput handleLocation={handleLocation} />
    </Container>
  );
}

Sidebar.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

export default Sidebar;
