import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../components/navigation/Button'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export default function ContactForm() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [text,setText]=useState("");
    const formSubmit=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        // console.log(event);
        // console.log("name",event.target[0].value);
        // console.log("email",event.target[1].value);
        // console.log("text",event.target[2].value);
    }
    return (
        <div className={`${styles.contact_form} container`}>
            <div className={styles.contact_info}>
                <div className={styles.contact_btn}>
                    <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px" />}></Button>
                    <Button text="VIA CALL" icons={<IoCall fontSize="24px" />}></Button>
                </div>
                <Button outLine={true} text="VIA EMAIL FORM" icons={<MdEmail fontSize="24px" />}></Button>
                <form onSubmit={formSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="10"></textarea>
                    </div>
                    <div style={{display:"flex",justifyContent:"end"}}>
                        <Button text="SUBMIT BUTTON"></Button>
                    </div>
                    <div>
                        {name + " " + email + " " + text}
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="./images/contact.svg" alt="contact image"/>
            </div>
        </div>
    )
}
