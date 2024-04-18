import React from 'react'
// import { MdMessage } from "react-icons/md";
import styles from './Button.module.css';
export default function Button({outLine,icons,text}) {
    // const {outLine,icons,text}=props
    return (
        // <button className={styles.primary_btn}><MdMessage fontSize="24px" /> VIA SUPPORT CHAT </button>
        // <button className={styles.primary_btn}>{props.icons} {props.text} </button>
        // <button className={props.outLine?styles.outline_btn:styles.primary_btn}>{props.icons} {props.text} </button>
        <button className={outLine?styles.outline_btn:styles.primary_btn}>{icons} {text} </button>
    )
}
