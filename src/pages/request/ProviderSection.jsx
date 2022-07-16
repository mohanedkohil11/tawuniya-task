import React from 'react';
import { ReactComponent as MapSVG } from 'assets/map.svg';
import styles from './styles.module.scss';

export default function ProviderSection() {
    return (
        <div className={styles.provider_section}>
            <h4>Provider</h4>

            <div>
                <MapSVG />
            </div>
        </div>
    );
}
