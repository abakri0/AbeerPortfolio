import React from 'react'
import '../styles/ContactSection.css'
import contactImg from '../../assets/img/contactImg.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactSection() {
    return (
        <div className='Contactheader'>
       
        <div className='ContactSection'>
                 

            <div className='contactText'>
               
                <Form>
                    <Form.Group className="mb-3 " controlId="formBasicName">

                        <Form.Control type="text" placeholder="اسمك" className='FieldArea' />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="ايميلك" className='FieldArea' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
                        <Form.Control as="textarea" rows={3} placeholder='رسالتك' className='FieldArea' />
                    </Form.Group>
                    <Button variant="" type="submit" className='FieldBtn'>
                        ارسلها
                    </Button>
                </Form>
            </div>
           

            <img src={contactImg} alt=' Contact' className='contactImg' />
 </div>
        </div>
    )
}
