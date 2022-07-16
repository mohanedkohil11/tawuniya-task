import React from 'react';
import styles from './styles.module.scss';

export default function StepsSection() {
    return (
        <section className={styles.steps_section}>
            <h2>How do I benefit from the service?</h2>
            <p>3 simple steps to reimburse the expenses</p>
            <div className={styles.setps_container}>
                <div className={styles.step}>
                    <span>1</span>
                    <h5>Submit Request</h5>
                    <p>
                        In case there is any reason that prevents you from
                        obtaining treatment from the approved service provider,
                        contact Tawuniya on 8001249990, or submit a request
                        through Tawuniya App. or send an SMS to 0501492222,
                        including the member ID number.
                    </p>
                </div>
                <div className={styles.step}>
                    <span>2</span>
                    <h5>Get Eligibility letter</h5>
                    <p>
                        Tawuniya will issue an immediate eligibility letter
                        addressed to the service provider stating that Tawuniya
                        has agreed to provide you the necessary treatment.
                    </p>
                </div>
            </div>
        </section>
    );
}
