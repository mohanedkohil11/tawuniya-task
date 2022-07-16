import React from 'react';
import PropTypes from "prop-types";
import styles from './PrimaryButton.module.scss';

export default function PrimaryButton({ title, onClick }) {
    return (
        <button className={styles.primary_btn} type="button" onClick={onClick}>
            {title}
        </button>
    );
}

PrimaryButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };