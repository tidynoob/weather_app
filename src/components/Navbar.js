import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex
      w="full"
      flexDir="row"
      px="4"
      py="2"
      boxShadow="md"
      borderRadius="base"
      zIndex="sticky"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="h1" size="lg">
        Weather
      </Heading>
      <Flex justifyContent="center" />
    </Flex>
  );
}
