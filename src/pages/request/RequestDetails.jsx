/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { ReactComponent as ArrowSVG } from 'assets/arrow.svg';
import MemberCard from 'shared-components/MemberCard';
import members from './members';
import styles from './styles.module.scss';

export default function RequestDetails() {
    const [showAll, setShowAll] = useState(false);

    const handleViewAll = () => {
        setShowAll(prevState => !prevState);
    };
    return (
        <>
            <h2>Request details</h2>
            <div className={styles.members_list}>
                {members
                    .slice(0, showAll ? members.length : 3)
                    .map((member, idx) => (
                        <MemberCard {...member} key={idx} />
                    ))}
                <div
                    onClick={handleViewAll}
                    className={styles.view_button}
                    aria-disabled={showAll}
                >
                    {showAll ? 'View less' : 'View all'}
                    <ArrowSVG />
                </div>
            </div>
        </>
    );
}
