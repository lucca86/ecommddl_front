import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const Login = () => {
  return (
    <>
      <Meta title={'login'} />
      <BreadCrumb title='Login Page' />
      <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Login</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <CustomInput type='email' name='email' placeholder='Ingese su email' />
                  <CustomInput type='password' name='password' placeholder='Ingese su Password' />
                  <div>
                    <Link to='/forgot-password' className='mb-3'>¿Olvidó su contraseña?</Link>
                    <div className='d-flex justify-content-center gap-15 align-items-center'>
                      <button className='button border-0'>Login</button>
                      <Link to='/signup' className='button signup'>SignUp</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>

    </>
  )
}

export default Login