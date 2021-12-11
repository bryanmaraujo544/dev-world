import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Logo } from './Logo';
import { Box, Flex, useColorMode, Text, Button } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { BoxProps, FlexProps } from '@chakra-ui/layout';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

type Props = {
    isHome?: boolean
}

export const Header = ({ isHome }: Props) => {
    const sunControls = useAnimation();
    const moonControls = useAnimation();
    // Function that return the currently color mode and one function to toggle that
    const { colorMode, toggleColorMode } = useColorMode();
    const MotionBox = motion<BoxProps>(Box);
    const MotionFlex = motion<FlexProps>(Flex);

    const variants = {
        visible: { opacity: 1, zIndex: 2 },
        hidden: { opacity: 0, zIndex: 1 }
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleIcon = (icon: string) => {
        // If moon icon got clicked, we hide him and show the sun icon. And change the color mode from dark to light. or vice versa
        if (icon === 'moon') {
            sunControls.start('visible');
            moonControls.start('hidden');
        } else {
            sunControls.start('hidden');
            moonControls.start('visible');
        }
        toggleColorMode();
    }

    const router = useRouter();

    const handleLogout = () => {
        destroyCookie(null, '@token');
        setModalIsOpen(false);
        router.push('/login');
    }


    return (
        <>
            <Flex
                as='header'
                align='center'
                justify='space-between'
                py={8}
            >
                <Flex w={['125px', '200px']} position="relative">
                    <Logo
                        isLight={colorMode === 'light' ? true : false}
                    />
                </Flex>
                <MotionFlex>
                    <MotionFlex
                        position="relative"
                        align="center"
                        justify="end"
                        cursor="pointer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MotionBox
                            position="absolute"
                            initial={{ opacity: colorMode === 'dark' ? 1 : 0 }}
                            animate={sunControls}
                            variants={variants}
                            onClick={() => handleIcon('sun')}
                            w="26px"
                            h="26px"
                        >
                            <FaSun size="100%" />
                        </MotionBox>
                        <MotionBox
                            position="absolute"
                            animate={moonControls}
                            initial={{ opacity: colorMode === 'light' ? 1 : 0 }}
                            variants={variants}
                            onClick={() => handleIcon('moon')}
                            whileHover={{ scale: 1.05 }}
                            w="26px"
                            h="26px"
                        >
                            <BsFillMoonStarsFill size="100%" />
                        </MotionBox>
                    </MotionFlex>
                    {isHome && (
                        <MotionBox
                            w="28px"
                            h="28px"
                            ml={3}
                            cursor="pointer"
                            whileHover={{ x: 3 }}
                            onClick={() => setModalIsOpen(true)}
                        >
                            <HiOutlineLogout size="100%" />
                        </MotionBox>

                    )}
                </MotionFlex>
            </Flex>
        <Modal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Text>Do you really want to get out?</Text>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleLogout}>
                    Yes
                </Button>
                <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}