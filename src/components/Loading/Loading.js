import React from 'react'
import { motion } from "framer-motion";

import './Loading.scss'

const loadingContainer = {
    width: "210px",
    height: "4rem",
    display: "flex",
    justifyContent: "space-around",
};
const loadingCircle = {
    display: "block",
    width: "50px",
    height: "50px",
    backgroundColor: "#A55862",
    borderRadius: "50%",
    margin: '10px'
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "60%",
    },
};
const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeInOut'
}
function Loading({ opacity = 0.7 }) {

    return (
        <div className='wrapper-loading' style={{
            backgroundColor: `rgba(217, 178, 183, ${opacity})`
        }}>
            <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
            <div className="flex fixed w-full justify-center items-center h-screen">
                <motion.div
                    style={loadingContainer}
                    variants={loadingContainerVariants}
                    initial="start"
                    animate="end"
                >
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                </motion.div>
            </div>
        </div >
    )
}

export default Loading
