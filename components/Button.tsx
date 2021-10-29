import React from 'react';
import { Button as CButton, ButtonProps } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Button = (props: any) => {
  const MotionButton = motion<ButtonProps>(CButton);
  return (
    <MotionButton {...props} w="100%" mt={8} p={6} bgGradient="linear(to-r, blue.primary, blue.secondary)" color="text.dark" fontWeight="bold" rounded="16px">
      {props.children}
    </MotionButton>
  );
};
