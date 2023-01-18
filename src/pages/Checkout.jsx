import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Meta from '../components/Meta'
import Container from '../components/Container'

const Checkout = () => {
    return (
        <>
            <Meta title='checkout' />
            <Container class1="checkout-wrapper py-5">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">DDL ECOMM</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link className='text-dark' to="/cart">Cart</Link></li>
                                        <li className="breadcrumb-item active"><Link className='text-warning' to="/checkout">Info de Contacto</Link></li>
                                        <li className="breadcrumb-item"><Link className='text-dark' to="/checkout">Envío</Link></li>
                                        <li className="breadcrumb-item"><Link className='text-dark' to="/checkout">Pago</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                                <h4 className='title total'>Información de Contacto</h4>
                                <p className="user-details total">Lucca Lens (lucca86@gmail.com)</p>
                                <h4 className='mb-3'>Dirección de Envío</h4>
                                <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                        <input type='text' className='form-control' name="" id="" placeholder='Dirección de envío' />
                                    </div>
                                    <div className='w-100'><input type="text" className="form-control" placeholder='País' /></div>
                                    <div className='flex-grow-1'><input type="text" className="form-control " placeholder='Nombres' /></div>
                                    <div className='flex-grow-1'><input type="text" className="form-control " placeholder='Apellidos' /></div>
                                    <div className='w-100'><input type="text" className="form-control" placeholder='Calle y Altura' /></div>
                                    <div className='w-100'><input type="text" className="form-control" placeholder='Piso, Departamento, etc' /></div>
                                    <div className='flex-grow-1'><input type="text" className="form-control" placeholder='Provincia' /></div>
                                    <div className='flex-grow-1'><input type="text" className="form-control" placeholder='Ciudad' /></div>
                                    <div className='flex-grow-1'><input type="text" className="form-control" placeholder='CP' /></div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to='/cart' className='text-dark'><HiOutlineArrowLeft className='me-2 fs-5' /> Volver al Carrito</Link>
                                            <Link to='/shipping' className='button'>Ir al Envío</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5 home-wrapper-2">
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div className='w-25 position-relative'>
                                        <span 
                                            className="badge bg-warning text-white rounded-circle p-2 position-absolute"
                                            style={{ top: '-10px', right: '-10px'}}
                                        >1</span>
                                        <img className='img-fluid' src="/images/watch.jpg" alt="watch" />
                                    </div>
                                    <div>
                                        <h5 className='Total'>Amazfit xx15</h5>
                                        <p className='total-price'> s/ klhjkhjkg</p>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='justify-content-end d-flex'>$ 78000</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p total>Subtotal</p>
                                    <p total-price>$ 78000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Envío</p>
                                    <p className='mb-0 total-price'>$ 2500</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center py-4'>
                                <h4 className='total'>Total</h4>
                                <h3 className='total-price'>$ 80500</h3>
                            </div>
                        </div>
                    </div>
            </Container>

        </>
    )
}

export default Checkout