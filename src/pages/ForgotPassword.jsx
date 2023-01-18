import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const ForgotPassword = () => {
    return (
        <>
            <Meta title={'forgot password'} />
            <BreadCrumb title='Reset de Contraseña' />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset de contraseña</h3>
                                <p className='text-center mb-3'>Enviaremos un email con el link para resetear su contraseña </p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <CustomInput type="email" name='email' placeholder='Ingese su email' />
    
                                    <div>
                                        <div className='d-flex justify-content-center flex-column align-items-center'>
                                            <button type='submit' className='button border-0 mb-3'>Enviar</button>
                                            <Link to='/login' className=''>Cancel</Link>
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

export default ForgotPassword