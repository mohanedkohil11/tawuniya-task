import React from 'react';
import BreadCrumb from 'shared-components/BreadCrumb/BreadCrumb';
import Footer from 'shared-components/Footer/Footer';
import PrimaryButton from 'shared-components/PrimaryButton/PrimaryButton';
import styles from './styles.module.scss';
import RequestDetails from './RequestDetails';
import ProviderSection from './ProviderSection';

export default function Request() {
    return (
        <main>
            <div>
                <BreadCrumb />
                <div className={styles.section}>
                    <RequestDetails />

                    <ProviderSection />
                </div>

                <PrimaryButton title="Submit Eligibility letter Request" onClick={()=>{}}/>
            </div>

            <Footer />
        </main>
    );
}
