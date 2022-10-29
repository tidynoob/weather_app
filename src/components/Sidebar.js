import { Box } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import LocationInput from './main/LocationInput';

function Sidebar(props) {
  const { handleLocation } = props;
  return (
    <Box
      display="flex"
      flexDir="column"
      borderRightWidth="1px"
      h="100%"
      p={4}
      w="xs"
      bgColor="white"
    >
      <LocationInput handleLocation={handleLocation} />
    </Box>
  );
}

Sidebar.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

export default Sidebar;
