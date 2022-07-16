/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CalendarSVG } from 'assets/calendar.svg';
import { ReactComponent as CardSVG } from 'assets/card.svg';
import { ReactComponent as MaleSVG } from 'assets/male.svg';
import { ReactComponent as FemaleSVG } from 'assets/female.svg';

import styles from './styles.module.scss';

export default function MemberCard({
    id,
    name,
    gender,
    cardNumber,
    birthDate,
}) {
    return (
        <label htmlFor={id} className={styles.member_card_container}>
            <CardItem subtitle="Member Name" title={name} icon={<CardSVG />} />
            <CardItem
                subtitle="Member Card"
                title={cardNumber}
                icon={gender === 'male' ? <MaleSVG /> : <FemaleSVG />}
            />
            <CardItem
                subtitle="Date of Birth"
                title={birthDate}
                icon={<CalendarSVG />}
            />
            <input type="radio" id={id} name="selectedMember" />
        </label>
    );
}

function CardItem({ icon, subtitle, title }) {
    return (
        <div className={styles.card_item_container}>
            {icon}
            <div>
                <p className={styles.card_item_subtitle}>{subtitle}</p>
                <p className={styles.card_item_title}>{title}</p>
            </div>
        </div>
    );
}

CardItem.propTypes = {
    icon: PropTypes.object.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

MemberCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
};
