import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import styles from './BreadCrumb.module.scss';

export default function BreadCrumb() {
    return (
        <div className={styles.breadCrumb}>
            <Link to={{ pathname: '/' }} className={styles.dark_text}>
                <BiHomeAlt /> Dashboard
            </Link>
            <span className={styles.arrow}>
                <BsChevronRight />
            </span>
            <Link to={{ pathname: '/' }} className={styles.light_text}>
                Eligibilty letter
            </Link>
        </div>
    );
}
