import React from 'react';
import CollapsibleQuestionBox from 'shared-components/CollapsibleQuestionBox/CollapsibleQuestionBox';
import styles from './styles.module.scss';

export default function FaqSection() {
    return (
        <section className={styles.faq_section}>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.description}>
                Review answers to commonly asked questions at Tawuniya, which
                enable you to be directly involved in improving our support
                experience.
            </p>
            <CollapsibleQuestionBox
                open
                question="What kind of people/Organizations commits insurance fraud?"
                answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident. The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident"
                containerClassName={styles.CollapsibleQuestionBox}
                questionButtonClassName={styles.question}
                answerClassName={styles.answer}
            />
            <CollapsibleQuestionBox
                question="What are some examples of insurance fraud/Abuse?"
                answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident"
                containerClassName={styles.CollapsibleQuestionBox}
                questionButtonClassName={styles.question}
                answerClassName={styles.answer}
            />
            <CollapsibleQuestionBox
                question="What are we doing to prevent fraud?"
                answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident"
                containerClassName={styles.CollapsibleQuestionBox}
                questionButtonClassName={styles.question}
                answerClassName={styles.answer}
            />
            <CollapsibleQuestionBox
                question="Shall I get a reward for reporting medical insurance fraud?"
                answer="The insured is provided with an Insurance Card and Bail Bond approved by the Traffic Police together with SANAD Insurance Policy to prevent the arrest or detainment of the driver causing the accident"
                containerClassName={styles.CollapsibleQuestionBox}
                questionButtonClassName={styles.question}
                answerClassName={styles.answer}
            />
        </section>
    );
}
