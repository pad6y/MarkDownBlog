import { useRef, useState, useEffect } from 'react';
import Notification from '../ui/notification';
import classes from './ContactForm.module.css';

async function sendMessage(msgDetail) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(msgDetail),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'something went wrong');
  }
}

function contactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [notificationStatus, setNotificationStatus] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    if (notificationStatus === 'success' || notificationStatus === 'error') {
      const reset = setTimeout(() => {
        setNotificationStatus('');
        setErrorMsg('');
      }, 3000);

      return () => {
        clearTimeout(reset);
      };
    }
  }, [notificationStatus]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setNotificationStatus('pending');
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;

    try {
      await sendMessage({ email, name, message });
      setNotificationStatus('success');
      emailRef.current.value = '';
      nameRef.current.value = '';
      messageRef.current.value = '';
    } catch (error) {
      setNotificationStatus('error');
      setErrorMsg(error.message);
    }
  };

  let notification;

  if (notificationStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending',
      message: 'Message is sending.',
    };
  }
  if (notificationStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message sent successfully.',
    };
  }
  if (notificationStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: errorMsg,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How may I help you?</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email required" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name required" ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea rows="5" id="message" ref={messageRef} />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationStatus && <Notification {...notification} />}
    </section>
  );
}
export default contactForm;
