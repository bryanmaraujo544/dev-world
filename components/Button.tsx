import React from 'react';
import { Button as CButton, ButtonProps } from "@chakra-ui/react";
import { motion } from 'framer-motion';

export const Button = (props: any) => {
  const MotionButton = motion<ButtonProps>(CButton);
  return (
    <MotionButton {...props} w="100%" mt={8} p={8} bgGradient="linear(to-r, blue.primary, blue.secondary)" color="text.dark" fontSize="xl" fontWeight="bold" rounded="16px">
      {props.children}
    </MotionButton>
  );
};
