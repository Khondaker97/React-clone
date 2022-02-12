import './contact.css';
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_19i9b9l', 'template_4z6ejyd', formRef.current, 'user_XPafKd2LB7YLtqVldfmu6')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project.</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="" className="c-icon" />
                        +880 01567890000
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="" className="c-icon" />
                        +contact@email.com
                    </div>
                    <div className="c-info-item">
                        <img src={address} alt="" className="c-icon" />
                        Tejkunipara-nakhalpara road, Tejgoan, Dhaka-1215.
                    </div>
                </div>
                
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                     <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder='Name' name="user_name" />  {/* name attribute is important for adding it to a messaging module*/}
                     <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                     <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder='Email' name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333"}} name="message" placeholder='Message' rows="5" ></textarea>
                    <button >Submit</button>
                    {done && "Thank you ..."}
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
