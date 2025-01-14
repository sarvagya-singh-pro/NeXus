import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './css/carousel.module.css'; // Import CSS Module

const NeonCarousel = () => {
    const images = [
        '/1.jpeg',
        '/2.jpeg',
        '/3.jpeg',
        '/4.jpeg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageStatus, setImageStatus] = useState(Array(images.length).fill(true)); // Track image loading status

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleError = (index) => {
        const updatedStatus = [...imageStatus];
        updatedStatus[index] = false; // Mark the image as failed to load
        setImageStatus(updatedStatus);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.carouselContainer}>
            <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>❮</button>
            <div className={styles.carousel}>
                <AnimatePresence>
                    {/* Previous Image */}
                    <motion.img
                        key={currentIndex === 0 ? images.length - 1 : currentIndex - 1}
                        src={imageStatus[currentIndex === 0 ? images.length - 1 : currentIndex - 1] ? images[currentIndex === 0 ? images.length - 1 : currentIndex - 1] : fallbackImage}
                        alt={`Previous Slide`}
                        className={`${styles.carouselImage} `}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onError={() => handleError(currentIndex === 0 ? images.length - 1 : currentIndex - 1)} // Handle error event
                    />
                    
                    {/* Current Image */}
                    <motion.img
                        key={currentIndex}
                        src={imageStatus[currentIndex] ? images[currentIndex] : fallbackImage}
                        alt={`Current Slide`}
                        className={`${styles.carouselImage} ${styles.greyed}`}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: "150%", opacity: 0.5}}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onError={() => handleError(currentIndex)} // Handle error event
                    />
                    
                    {/* Next Image */}
                    <motion.img
                        key={currentIndex === images.length - 1 ? 0 : currentIndex + 1}
                        src={imageStatus[currentIndex === images.length - 1 ? 0 : currentIndex + 1] ? images[currentIndex === images.length - 1 ? 0 : currentIndex + 1] : fallbackImage}
                        alt={`Next Slide`}
                        className={`${styles.carouselImage} ${styles.greyed}`}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: "-100%", opacity: 0.5 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onError={() => handleError(currentIndex === images.length - 1 ? 0 : currentIndex + 1)} // Handle error event
                    />
                </AnimatePresence>
            </div>
            <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>❯</button>

            {/* Indicators */}
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`} 
                      onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default NeonCarousel;
