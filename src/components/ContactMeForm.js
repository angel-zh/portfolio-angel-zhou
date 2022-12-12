import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material';
import emailjs from '@emailjs/browser'

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
        <Container>
            <h1 className='h1-contact'>
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
                    required
                />
                <TextField
                    name='email'
                    label='Your E-mail'
                    type='text'
                    variant='outlined'
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <div>
                <TextField
                    name='message'
                    label='Type Your Message Here'
                    type='text'
                    variant='outlined'
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                </div>
                <Button variant='contained' type='submit'>Send Message</Button>
            </form>
            {
                msgSent ?
                    <div className='msg-success'>Thank you. Your message has been successfully sent!</div>
                    :
                    null
            }

        </Container>
    )
}

export default ContactMeForm