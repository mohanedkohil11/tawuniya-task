import React from 'react';
import { BiHomeAlt, BiBell, BiCheckSquare, BiInfoCircle } from 'react-icons/bi';
import { AiOutlineCreditCard, AiOutlineShop, AiOutlineSetting } from 'react-icons/ai';
import { RiFileEditLine } from 'react-icons/ri';
import { ReactComponent as TawuniyaIcon } from 'assets/tawuniya-icon.svg';
import styles from './LeftSideBar.module.scss';

export default function LeftSideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.main_icon}>
                <TawuniyaIcon />
            </div>
            <div className={styles.icons_list_container}>
                <ul>
                    <li>
                        <BiHomeAlt />
                    </li>
                    <li>
                        <BiBell />
                    </li>
                    <li>
                        <AiOutlineCreditCard />
                    </li>
                    <li>
                        <RiFileEditLine />
                    </li>
                    <li>
                        <BiCheckSquare />
                    </li>
                    <li>
                        <AiOutlineShop />
                    </li>
                    <li>
                        <BiInfoCircle />
                    </li>
                </ul>
                <ul>
                    <li>
                        <AiOutlineSetting />
                    </li>
                </ul>
            </div>
        </div>
    );
}
