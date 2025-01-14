import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ExpandingBox = () => {
    const [isVisible, setIsVisible] = useState(false);
    const boxRef = useRef(null);

    // Intersection Observer to detect when the box comes into view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            });
        }, {
            threshold: 0.5 // Adjust this value to control when the animation starts
        });

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <div style={{ height: 'auto',top:'100px',position:'relative',display:'inline-block', padding: '0px' }}> {/* Just for scrolling */}
            <motion.div
                ref={boxRef}
                initial={{ width: '300px',aspectRatio:2/3, height: '200px',marginBottom:'200px',position:"relative",left:'0px',display:'block'}}
                animate={isVisible ? { width: '80vw', height: 'auto' } : {}}
                transition={{ duration: 0.5 }}
                style={{
                    background:"url('/5.jpeg') center",
                    backgroundSize:"contain",
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    margin: '0 auto'
                }}
            >
            </motion.div>
        </div>
    );
};

export default ExpandingBox;
