import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_p399qff', form.current, 'w09ZZIB-ogklbcdGP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mt-20 min-h-screen'>
        <form ref={form} onSubmit={sendEmail} className='justify-center grid grid-flow-row gap-4'>
      <input placeholder='Enter your name' type="text"  className='input input-bordered w-full max-w-xs mt-5 h-10' name="user_name" />
      <input placeholder='Enter your email' type="email" className='input input-bordered w-full max-w-xs h-10' name="user_email" />
      <textarea placeholder='Enter your message' name="message" className='input input-bordered w-full max-w-xs h-20' />
      <input type="submit" className='btn btn-primary' value="Send" />
    </form>
    </div>
  );
};