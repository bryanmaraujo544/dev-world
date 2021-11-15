export const slowContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
        }
    }
}

export const fastContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        // transition: {
        //     delayChildren: 0.5,
        //     staggerChildren: 0.13
        // }
    }
}

export const xAnimationVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
}

export const xRightAnimationVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
}



export const yAnimationVariants = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
}