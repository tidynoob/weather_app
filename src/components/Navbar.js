import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import LocationInput from './main/LocationInput';

export default function Navbar(props) {
  const { handleLocation } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w="full"
        flexDir="row"
        px="4"
        py="2"
        // boxShadow="md"
        borderBottomWidth={1}
        // borderRadius="base"
        zIndex="sticky"
        justifyContent="space-between"
        alignItems="center"
        bgColor="gray.800"
        color="gray.100"
      >
        <Heading as="h1" size="lg">
          Weather
        </Heading>
        <Flex justifyContent="center">
          <IconButton
            variant="solid"
            aria-label="Menu"
            colorScheme="teal"
            icon={<SearchIcon />}
            onClick={onOpen}
            display={{ base: 'flex', md: 'none' }}
          />
        </Flex>
      </Flex>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <Box display="flex" flexDir="column">
                <LocationInput
                  handleLocation={handleLocation}
                  closeDrawer={onClose}
                  isDrawerOpen={isOpen}
                />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

Navbar.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};
