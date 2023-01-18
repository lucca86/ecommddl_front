import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const ResetPassword = () => {
    return (
        <>
            <Meta title={'reset password'} />
            <BreadCrumb title='Reset de Contraseña' />
            <Container className="login-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset de Contraseña</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <CustomInput type="password" name='password' placeholder='Ingese su Contraseña' />
                                    <CustomInput type="password" name='confirmPassword' placeholder='Confirme su Contraseña' />
                                    <div>
                                        <div className='d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0'>Aceptar</button>
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

export default ResetPassword