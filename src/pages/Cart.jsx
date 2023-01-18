import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Cart = () => {
  return (
    <>
      <Meta title='cart' />
      <BreadCrumb title='Carrito de Compras' />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                <h4 className='cart-col-1'>Producto</h4>
                <h4 className='cart-col-2'>Precio</h4>
                <h4 className='cart-col-3'>Cantidad</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
                <div className='cart-col-1 d-flex gap-15 align-items-center'>
                  <div className='w-25'>
                    <img className='img-fluid' src="/images/watch.jpg" alt="product" />
                  </div>
                  <div className='w-25'> 
                    <p>Watch</p>
                    <p>Color: Plata</p>
                    <p>Talle: M</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className="price">$ 78000</h5>
                </div>
                <div className='cart-col-3'>
                <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">
                    <div className="quantity">
                      <input
                        className='form-control'
                        type='number'
                        name=''
                        min={1}
                        style={{ width: '70px' }}
                      />
                    </div>
                  <div>
                    <FaTrashAlt className='fs-4 text-danger' />
                  </div>
                  </div>
                </div>
                <div className='cart-col-4'>
                  <h5 className="price">$ 78000</h5>
                </div>
              </div>
              <div className="col-12 py-2">
                <Link to='/store' className='button'>Continuar Comprando</Link>
              </div>
              <div className="col-12 py-2 d-flex justify-content-between">
                <div className="col-8">
                  <textarea className='border-0' placeholder='Recomendaciones Especiales' rows="4" cols="30"></textarea>
                </div>
                <div className="col-4">
                  <h4>Subtotal: $ 78000</h4>
                  <h6>Impuestos y envíos se calculan en el pago</h6>
                <div className='d-flex flex-column justify-content-end mt-3'>
                  <Link to='/checkout' className='button text-center'>Pagar</Link>
                </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Cart