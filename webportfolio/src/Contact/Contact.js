import "./Contact.css"
import {useState} from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    console.log(message)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
    const serviceId = "service_g6cns1m"
    const templateId = "template_5c4iejv"
    const publicKey = "9KU5jdLthGiLChAHF"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Terry",
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) =>{
      console.log("Email sent successfully", response)
      setName('')
      setEmail('')
      setMessage('')
    }).catch((error) => {
      console.error('Error sending email:', error)
    })

  }

  return (
    <section id="contact-me">
      <h2>Contact Me</h2>
      <h3>Contact me directly at terrylu794@gmail.com</h3>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={handleNameChange}
          required
        />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="What's your email?"
          value={email}
          onChange={handleEmailChange}
          required
        />
        </div>

        <div>
        <label htmlFor="message">Message</label>
        <input
          id="message"
          type="textarea"
          placeholder="What's your message?"
          value={message}
          onChange={handleMessageChange}
          className="message"
          required
        />
        </div>
        <button type = "Submit" className="send-button">Send</button>
      </form>
      </div>

    </section>
  )
}

export default Contact
