import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <hr className={styles.hr} />
            <p className={styles.coptright}>
                Copyright © Tawuniya 2022, all rights reserved
            </p>
            <div className={styles.footerLinks}>
                <Link to={{ pathname: '/' }}>
                    <span>Terms and Conditions</span>
                </Link>
                <Link to={{ pathname: '/' }}>
                    <span>Privacy Policy</span>
                </Link>
                <Link to={{ pathname: '/' }}>
                    <span>Cookie Policy</span>
                </Link>
            </div>
        </footer>
    );
}
