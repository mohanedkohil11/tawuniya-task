import React from 'react';
import { Link } from 'react-router-dom';
import { BsGlobe2 } from 'react-icons/bs';
import {
    IoDocumentTextOutline,
    IoLocationOutline,
    IoArrowForward,
} from 'react-icons/io5';
import { AiOutlineAppstore } from 'react-icons/ai';
import {
    RiArrowDropDownLine,
    RiSearchLine,
    RiHeadphoneLine,
    RiMessengerLine,
} from 'react-icons/ri';
import CollapsibleQuestionBox from 'shared-components/CollapsibleQuestionBox/CollapsibleQuestionBox';
import googlePlayImg from 'assets/gp.png';
import appGalleryImg from 'assets/ag.png';
import appStoreImage from 'assets/as.png';
import styles from './RightSideBar.module.scss';

export default function RightSideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <section className={styles.topMenu}>
                    <button type="button" className={styles.languageBtn}>
                        <span>EN</span> <BsGlobe2 /> <RiArrowDropDownLine />
                    </button>
                    <button type="button" className={styles.SearchBtn}>
                        <RiSearchLine />
                    </button>
                    <button type="button" className={styles.callBtn}>
                        <RiHeadphoneLine />
                    </button>
                    <button type="button" className={styles.EmergencyBtn}>
                        Emergency?
                    </button>
                    <button type="button" className={styles.accountBtn}>
                        MK
                    </button>
                </section>

                <section className={styles.help}>
                    <h3>How can we help you?</h3>
                    <form>
                        <input
                            type="text"
                            placeholder={"What you're looking for?"}
                        />
                        <RiSearchLine />
                    </form>
                    <div className={styles.buttons}>
                        <button type="button">
                            <RiMessengerLine />
                            <span>Chat Now</span>
                        </button>
                        <button type="button">
                            <IoDocumentTextOutline />
                            <span>Complaints</span>
                        </button>
                        <button type="button">
                            <IoLocationOutline />
                            <span>Locate us</span>
                        </button>
                        <button type="button">
                            <AiOutlineAppstore />
                            <span>All Services</span>
                        </button>
                    </div>
                </section>

                <section className={styles.questions}>
                    <h3>Most Asked Questions</h3>
                    <CollapsibleQuestionBox
                        question="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident?"
                        answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident?"
                        containerClassName={styles.CollapsibleQuestionBox}
                        questionButtonClassName={styles.question}
                        answerClassName={styles.answer}
                    />
                    <hr />
                    <CollapsibleQuestionBox
                        question="The insurance covers all types of cars without specifying their type or model?"
                        answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident?"
                        containerClassName={styles.CollapsibleQuestionBox}
                        questionButtonClassName={styles.question}
                        answerClassName={styles.answer}
                    />
                    <hr />
                    <CollapsibleQuestionBox
                        question="The age restriction can be extended to include the drivers less than 21 years old?"
                        answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident?"
                        containerClassName={styles.CollapsibleQuestionBox}
                        questionButtonClassName={styles.question}
                        answerClassName={styles.answer}
                    />
                    <hr />
                    <CollapsibleQuestionBox
                        question="The expansion of insurance cover to include the accidents caused by the insured vehicle even if the driver is not present at the accident time?"
                        answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident?"
                        containerClassName={styles.CollapsibleQuestionBox}
                        questionButtonClassName={styles.question}
                        answerClassName={styles.answer}
                    />
                    <hr />
                    <Link
                        to={{ pathname: '/' }}
                        className={styles.allQeustionsLink}
                    >
                        View All Questions <IoArrowForward />
                    </Link>
                </section>
            </div>
            <div className={styles.container}>
                <section className={styles.download}>
                    <a href="https://www.tawuniya.com/">
                        <img src={appStoreImage} alt="app store download" />
                    </a>
                    <a href="https://www.tawuniya.com/">
                        <img src={googlePlayImg} alt="google play download" />
                    </a>
                    <a href="https://www.tawuniya.com/">
                        <img src={appGalleryImg} alt="app gallery download" />
                    </a>
                </section>
            </div>
        </div>
    );
}
