'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react"
import styles from "./ContactForm.module.css"
import ReactConfetti from "react-confetti"
import { useWindowSize } from 'react-use'


export const ContactForm = () => {
    const [isSumitted, setSubmitted] = useState(false)
    const [errMsg, setErrMsg] = useState('error null')
    const [errorEnable, setErrorEnable] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setSubmitting] = useState(false)
    const { width, height } = useWindowSize()

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log("data", name, email, message);
        setSubmitting(true)
        try {
            const res = await fetch('/api/contact',{
                method: 'POST',
                body: JSON.stringify({
                name, email, message
                }),
                headers:{
                    'content-type': 'application/json',
                }
            })
            if(res.status === 200){
                setSubmitted(true)
                setErrorEnable(false)
                setErrMsg('Message Sent Successfully!')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                const data = await res.json()
                setErrMsg(data.error || 'Failed to send message!')
                setErrorEnable(true)
            }
            
        } catch(error:any){
            console.error('error', error)
            setErrorEnable(true)
            setErrMsg(error)
        }
         finally {
            setSubmitting(false)
        }
    }

    return(
        <div className={styles.body}>
            <div className={styles.leftBody}>
                
            <p className={styles.contactText}><strong>For commissions and project inquiries</strong>, you can email or Send a message via this form</p>
          
            </div>
             
        <form onSubmit={onSubmit}>
            <input 
            className={styles.input} 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"/>

            <input  
            className={styles.input} 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"/>

            <textarea 
            className={styles.textarea} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a Message"></textarea>
            <div 
            className={styles.button}>
                {isSumitted && <p className={styles.sentMsg}>Message Sent!</p>}
                {errorEnable && <p className={styles.errorMsg}>{errMsg}</p>}
            {!isSumitted ? <button 
            type="submit"
            className={styles.buttonSend}
            disabled={isSubmitting}
            >{isSubmitting ? 'Sending...' : 'Send Message'}</button> : <button className={styles.buttonSent}
            disabled={isSubmitting}>Send Message</button>}
            {isSumitted && <ReactConfetti
            className={styles.confetti}
      width={width}
      height={height}
    />}
            </div>
        </form>
        </div>
    )
}