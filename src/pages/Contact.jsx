import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
      <Meta title={'Contact'} />
      <BreadCrumb title='Contacto' />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5952.589139567822!2d-58.83732660357514!3d-27.486978399773605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1673473350229!5m2!1ses!2sar" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contacto</h3>
                  <form className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Nombre' />
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type="text" className='form-control' placeholder='Número de celular' />
                    </div>
                    <div>
                      <textarea className='w-100 form-control' rows="10" cols="10" placeholder='Comentarios'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Formas de comunicarnos</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Tte. Cundom 1460, Corrientes, Argentina</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel:+543794331143">+54 379-4331143</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:lucca86@gmail.com">DDL - Developer</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Lunes a Viernes de 7:30 a 12:30 y de 15:30 a 19:30</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact