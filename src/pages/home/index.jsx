import React from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from 'shared-components/BreadCrumb/BreadCrumb';
import Footer from 'shared-components/Footer/Footer';
import PrimaryButton from 'shared-components/PrimaryButton/PrimaryButton';
import StepsSection from './StepsSection';
import HeaderSection from './HeaderSection';
import FaqSection from './FaqSection';

export default function Home() {
    const navigate = useNavigate();
    const requestClickHandler = () => {
        navigate('/request');
    };
    return (
        <main>
            <div>
                <BreadCrumb />

                <HeaderSection />

                <StepsSection />

                <FaqSection />

                <PrimaryButton
                    title="Request this Service"
                    onClick={requestClickHandler}
                />
            </div>

            <Footer />
        </main>
    );
}
