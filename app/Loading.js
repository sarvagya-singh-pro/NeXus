// WaveLoader.tsx
import React from 'react';
import styles from'./css/wave.module.css'; // Import the CSS for styling

const WaveLoader = () => {
    return (
        <div className={styles.wave}>
            <div className={styles.waveloader}></div>
            <div className={styles.waveloader}></div>
            <div className={styles.waveloader}></div>
            <div className={styles.waveloader}></div>
            <div className={styles.waveloader}></div>
        </div>
    );
};

export default WaveLoader;
