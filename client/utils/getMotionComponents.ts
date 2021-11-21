import { motion } from 'framer-motion';
import { BoxProps, FlexProps, HeadingProps, TextProps, GridProps } from '@chakra-ui/layout';
import { Grid, Box, FormControl, Input, Flex, Heading, Text, Button, FormControlProps, InputProps, ButtonProps } from '@chakra-ui/react';

export const MotionBox = motion<BoxProps>(Box);
export const MotionFormControl = motion<FormControlProps>(FormControl);
export const MotionInput = motion<InputProps>(Input);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionHeading = motion<HeadingProps>(Heading);
export const MotionText = motion<TextProps>(Text);
export const MotionButton = motion<ButtonProps>(Button);
export const MotionGrid = motion<GridProps>(Grid);

