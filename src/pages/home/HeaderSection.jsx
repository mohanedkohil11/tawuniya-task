import React from 'react';
import backgroundImage from 'assets/bg.png';
import styles from './styles.module.scss';

export default function HeaderSection() {
    return (
        <section className={styles.header_section}>
            <img
                className={styles.background_image}
                src={backgroundImage}
                alt="Eligibilty letter"
            />
            <h1>Eligibilty letter</h1>
            <p>
                Your right to obtain treatment is reserved in case you have any
                problem while visting the approved medical service provider,
                Tawuniya will issue an eligibilty letter, confirming your right
                to get the necessary treatment.
            </p>
        </section>
    );
}
