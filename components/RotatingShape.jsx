"use client";
import { animate, motion } from "framer-motion";
import React from "react";

const RotatingShape = ({ content, direction, duration }) => {
    // define the rotation animation
    const rotationAnimation = {
        animate: {
            // rotate 360 degree based on the direction
            rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
            transition: {
                duration: duration, // duration of one full rotation
                ease: "linear", // smooth rotation
                repeat: Infinity // repeat infinitely
            }
        }
    };

    return (
        <motion.div variants={rotationAnimation} animate="animate">
            {content}
        </motion.div>
    );
};

export default RotatingShape;