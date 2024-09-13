'use client'
import React, { useState,} from 'react';
import emailjs from 'emailjs-com';
const formFields = [
    { label: 'Name', type: 'text', name: 'from_name', placeholder:'  E.g. John Doe' },
    { label: 'Email', type: 'email', name: 'from_email', placeholder:'  E.g. John@doe.com' },
    { label: 'Message', type: 'textarea', name: 'message', placeholder:'  Your message' }
  ];
  const emailjsVariable = process.env.NEXT_PUBLIC_EMAILJS
  const emailValue = process.env.NEXT_PUBLIC_EMAIL
  emailjs.init(emailjsVariable)
  const template_key = process.env.NEXT_PUBLIC_TEMPLATE_KEY
  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID
//   //console.log(service_id);
  const emailRegex = new RegExp('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
  const nameRegex = new RegExp('^[a-zA-Z]{1,10}$')
  const messageRegex = new RegExp('^[a-zA-Z0-9 _]{1,150}$')
const ContactForm = () => {
    const [ buttonActive,setButtonActive ]= useState(false)
    const [ user, setUser ] = useState({
        Email:'',
        Name:'',
        Message:'',
    })
    const [ error, setError ] = useState({
        Email:false,
        Name:false,
        Message:false,
    })
  const handleSubmit = () => {
    const templateParams = {
        to_name:user.Name,
        from_name: user.Email ,
        reply_to: emailValue,
        message: user.Message,
      };
    //console.log(service_id, template_key, templateParams);
      emailjs.send(service_id, template_key, templateParams)
        .then(function(response) {
          
        setUser({
          Email:'',
          Name:'',
          Message:'',
      })
        setButtonActive(false)
        }, function(error) {
          console.log('Error sending email:', error);
          // You can add an error message or handle the error condition here
        })
  };
//   handleSubmit()

  const handleChange = (e) => {
    const element = e.target
    const value = element.value
    const field = element.getAttribute('data-field')
    const newUser = {...user}
    newUser[field] = value
    setUser(newUser)
    let ifCompleted
    switch(field) {
        case 'Email':
            ifCompleted = emailRegex.test(value)
            break
        case 'Name':
            ifCompleted = nameRegex.test(value)
            break
        case 'Message':
            ifCompleted = messageRegex.test(value)
            break
    }
    //console.log(error);
        
    if(!ifCompleted) {
        setError( prev => ( { ...prev,[field]:false}))
        setButtonActive(false)
        return
    }
    setError(prev => ({...prev, [field]:true}))
    if( error.Email && error.Message && error.Name ) {
        //console.log('a');
        setButtonActive(true)
    }
    //console.log(user);
  }
  
  return (
    <form action={handleSubmit} className='w-full flex flex-col max-w-130 mx-auto px-10 pb-20'>
        <h2 className='text-3xl text-center font-bold '>Thanks for taking the time to reach out. <br/>How can I help you?</h2>
      {formFields.map((field, index) => (
        <label key={index} className='grid grid-cols-1 gap-2 my-2 w-5/6 mx-auto text-xl'>
          {field.label}:
          {field.type === 'textarea' ? (
            <textarea data-field={field.label} value={user[field.label]} onChange={handleChange} name={field.name} className='rounded-lg h-24' placeholder={field.placeholder} />
          ) : (
            <input data-field={field.label} value={user[field.label]} onChange={handleChange} className='h-10 rounded-lg' type={field.type} name={field.name} placeholder={field.placeholder}  />
          )}
        </label>
      ))}
      <button disabled={!buttonActive} className={`${ buttonActive ? 'bg-red-500 text-white': 'bg-red-300 text-black'}  rounded-lg font-extrabold text-xl px-8 py-3 mt-8 max-w-max self-center`} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
