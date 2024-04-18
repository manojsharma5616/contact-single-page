import React from 'react'
import styles from './Navigation.module.css'
export default function Navigation() {
    // console.log(styles);
    return (
        <div className='container'>
            <nav className={styles.navigation}>
                <div className='logo'>
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
