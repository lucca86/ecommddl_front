import React from 'react'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Registrese para recibir información</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Ingrese su dirección e correo"
                  aria-label="Ingrese su dirección e correo"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-3"
                  id="basic-addon2"
                >
                  Subscribirse
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='mb-4 text-white'>Contactáctenos</h4>
              <div>
                <address className='text-white fs-6'>
                  Tte. Cundom 1460, <br /> 3400 - Corrientes <br/> Argentina
                </address>
                <a href="tel: +54 3794331143" className="mt-3 d-block mb-1 text-white">
                  +54 3794331143
                </a>
                <a href="mailto:lucca86@gmail.com" className="mt-3 d-block mb-0 text-white">
                  lucca86@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="www.linkedin.com" className='text-white'><BsLinkedin className=' fs-4' /></a>
                  <a href="www.github.com" className='text-white'><BsGithub className=' fs-4' /></a>
                  <a href="www.youtube.com" className='text-white'><BsYoutube className=' fs-4' /></a>
                  <a href="www.instagram.com" className='text-white'><BsInstagram className=' fs-4' /></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Información</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Políticas de Privacidad</Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Politicas de Financiación</Link>
                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Políticas de Envío</Link>
                <Link to='/terms-and-conditions' className='text-white py-2 mb-1'>Términos y Condiciones</Link>
                <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Cuenta</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Sobre Nosotros</Link>
                <Link className='text-white py-2 mb-1'>Consultas?</Link>
                <Link to='/contact' className='text-white py-2 mb-1'>Contactos</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='mb-4 text-white'>Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watchs</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()} Powered by Developer's Corner modified by Lucca{" "} </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer