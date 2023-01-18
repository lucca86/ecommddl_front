import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const Signup = () => {
    return (
        <>
            <Meta title={'signup'} />
            <BreadCrumb title='Crear Cuenta' />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Crear Cuenta</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <CustomInput 
                                        type='text'
                                        name='firstname'
                                        placeholder='Ingrese su Nombre'
                                    />
                                    <CustomInput 
                                        type='text'
                                        name='lastname'
                                        placeholder='Ingrese su Apellido'
                                    />
                                    <CustomInput 
                                        type='email'
                                        name='email'
                                        placeholder='Dirección de Correo'
                                    />
                                    <CustomInput 
                                        type='text'
                                        name='mobile'
                                        placeholder='Número de Celular'
                                    />
                                    <CustomInput 
                                        type='password'
                                        name='password'
                                        placeholder='Ingrese su Contraseña'
                                    />
                                    <div>
                                        <div className='d-flex justify-content-center gap-15 align-items-center'>
                                            <button type='submit' className='button border-0'>Crear</button>
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

export default Signup