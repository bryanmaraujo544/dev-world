import { useColorModeValue } from '@chakra-ui/react';

export const useDarkLightColors = (light: string, dark: string) => {
     const colorMode = useColorModeValue(light, dark);
     return colorMode;
}