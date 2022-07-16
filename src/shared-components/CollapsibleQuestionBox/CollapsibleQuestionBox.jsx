import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { HiMinus, HiPlus } from 'react-icons/hi';
import styles from './CollapsibleQuestionBox.module.scss';

export default function CollapsibleQuestionBox({
    question,
    answer,
    open,
    containerClassName = '',
    questionButtonClassName = '',
    answerClassName = '',
}) {
    const [isCollapsed, setIsCollapsed] = useState(!open);
    const [answerHeight, setAnswerHeight] = useState(undefined);
    const answerHeightRef = useRef(undefined);
    const collpaseDivRef = useRef();

    useEffect(() => {
        const { height } = collpaseDivRef.current.getBoundingClientRect();
        setAnswerHeight(height);
        answerHeightRef.current = height;
        if (!open) {
            setAnswerHeight(0);
            answerHeightRef.current = height;
            setIsCollapsed(true);
        }
    }, []);

    const questionClickHandler = () => {
        setIsCollapsed(!isCollapsed);
        if (answerHeight) {
            answerHeightRef.current = answerHeight;
            setAnswerHeight(0);
        } else {
            setAnswerHeight(answerHeightRef.current);
            answerHeightRef.current = undefined;
        }
    };

    return (
        <div className={containerClassName}>
            <button
                onClick={questionClickHandler}
                type="button"
                className={questionButtonClassName}
            >
                {isCollapsed ? (
                    <HiPlus
                        style={{ backgroundColor: '#F0F5F8', color: '#679AB4' }}
                    />
                ) : (
                    <HiMinus />
                )}{' '}
                <span>{question}</span>
            </button>

            <div
                ref={collpaseDivRef}
                className={styles.collpase}
                style={{ height: answerHeight }}
            >
                <p className={answerClassName}>{answer}</p>
            </div>
        </div>
    );
}

CollapsibleQuestionBox.defaultProps = {
    open: false,
    containerClassName: '',
    questionButtonClassName: '',
    answerClassName: '',
};
CollapsibleQuestionBox.propTypes = {
    open: PropTypes.bool,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    containerClassName: PropTypes.string,
    questionButtonClassName: PropTypes.string,
    answerClassName: PropTypes.string,
};
