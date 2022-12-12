import React, { useState } from 'react'
import { Container, TextField } from '@mui/material';
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ContactMeForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [msgSent, setMsgSent] = useState(false)

    const serviceId = 'service_blm121q'
    const templateId = 'template_q1xckgp'
    const publicKey = 'bzAPO65H3PRCuPUnO'

    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        emailjs.send(serviceId, templateId, form, publicKey)
            .then(res => {
                setMsgSent(true)
                console.log('Success', res.status, res.text)
            })
            .catch(error => {
                console.log('Failed', error)
            })
    }

    return (
        <Container className='contact-me-form' maxWidth='sm'>
            <h1 className='h1-contact-me'>
                Contact Me
            </h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    type='text'
                    name='name'
                    label='Your Name'
                    variant='outlined'
                    value={form.value}
                    onChange={handleChange}
                    size='small'
                    fullWidth
                    margin='dense'
                    required
                />
                <TextField
                    name='email'
                    label='Your E-mail'
                    type='text'
                    variant='outlined'
                    value={form.email}
                    onChange={handleChange}
                    size='small'
                    fullWidth
                    margin='dense'
                    required
                />
                <div>
                    <TextField
                        name='message'
                        label='Type Your Message Here'
                        type='text'
                        variant='outlined'
                        multiline
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        fullWidth
                        margin='dense'
                        required
                    />
                </div>
                <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /> Send Message</button>
            </form>
            {
                msgSent ?
                    <div className='msg-success'>
                        <p>Thank you for getting in touch! <br/>
                        Your message has been successfully sent.</p>
                    </div>
                    :
                    null
            }
        </Container>
    )
}

export default ContactMeForm