import React from 'react';
import { Box } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      <p>{new Date().getFullYear()} Naturally Wake Realtor Inc.</p>
    </Box>
  );
};
