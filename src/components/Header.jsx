import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0 '>Envío gratis por compras de más de $5000</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0 '>
                Teléfono: <a className='text-white' href='tel:+54 08105551234'>(0810) - 5555 - 1234</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to='/' className='text-white'>
                  DDL-Ecomm
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Buscar producto"
                  aria-label="Buscar producto"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-3"
                  id="basic-addon2"
                >
                  <BsSearch className='text-white fs-4' />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end">
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src='/images/compare.svg' alt='compare' />
                    <p className='mb-0'>Compare <br />Productos</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src='/images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Lista de <br />Favoritos</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src='/images/user.svg' alt='user' />
                    <p className='mb-0'>Login <br />Mi Cuenta</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                    <img src='/images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$50,0000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-10 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='/images/menu.svg' alt='menu' />
                      <span className='me-5 inline-block'>Categoria de Productos</span>  
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link to='' className="dropdown-item text-white" >Action</Link></li>
                      <li><Link to='' className="dropdown-item text-white" >Another action</Link></li>
                      <li><Link to='' className="dropdown-item text-white" >Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Tienda</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contacto</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header