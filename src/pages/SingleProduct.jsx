import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'
import Zoom from 'react-img-zoom'
import { MdOutlineLocalShipping } from 'react-icons/md'

import Meta from '../components/Meta'
import BreadCrum from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import Container from '../components/Container'

const SingleProduct = () => {

  const [orderedProduct, setOrderedProduct] = useState(true)

  const props = { width: 400, height: 250, zoomWidth: 500, img: "https://mundofixar.vtexassets.com/arquivos/ids/703172-800-auto?v=638092332228100000&width=800&height=auto&aspect=true" };

  return (
    <>
      <Meta title={'Product Page'} />
      <BreadCrum title='Prodcto' />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div><img className='img-fluid' src="https://mundofixar.vtexassets.com/arquivos/ids/703172-800-auto?v=638092332228100000&width=800&height=auto&aspect=true" alt="zoom" /></div>
                <div><img className='img-fluid' src="https://mundofixar.vtexassets.com/arquivos/ids/703172-800-auto?v=638092332228100000&width=800&height=auto&aspect=true" alt="zoom" /></div>
                <div><img className='img-fluid' src="https://mundofixar.vtexassets.com/arquivos/ids/703172-800-auto?v=638092332228100000&width=800&height=auto&aspect=true" alt="zoom" /></div>
                <div><img className='img-fluid' src="https://mundofixar.vtexassets.com/arquivos/ids/703172-800-auto?v=638092332228100000&width=800&height=auto&aspect=true" alt="zoom" /></div>
              </div>
            </div>
            {/* Product Details */}
            <div className="col-6">
              <div className="main-product-details">
                <div className='border-bottom'>
                  <h3 className='title'>Smartwatch Samsung G3</h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>
                    $ 78000
                  </p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#F37C20"
                    />
                    <p className='mb-0'>(2 reseñas)</p>
                  </div>
                  <a href='#review' className='text-dark text-decoration-underline '>Escriba una Reseña</a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center gap-15 py-2">
                    <h3 className='product-heading mb-0'>Tipo: </h3>
                    <p className='product-data mb-0'>Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-15 py-2">
                    <h3 className='product-heading mb-0'>Marca: </h3>
                    <p className='product-data mb-0'>Samsung</p>
                  </div>
                  <div className="d-flex align-items-center gap-15 py-2">
                    <h3 className='product-heading mb-0'>Categoría: </h3>
                    <p className='product-data mb-0'>Smart Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-15 py-2">
                    <h3 className='product-heading mb-0'>Tags: </h3>
                    <p className='product-data mb-0'>Samsung</p>
                  </div>
                  <div className="d-flex align-items-center gap-15 py-2">
                    <h3 className='product-heading mb-0'>Disponibilidad: </h3>
                    <p className='product-data mb-0'>15 in Stock</p>
                  </div>
                  <div className="d-flex flex-column gap-15 py-2">
                    <h3 className='product-heading mb-0'>Talle: </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-black text-dark'>XS</span>
                      <span className='badge border border-black text-dark'>S</span>
                      <span className='badge border border-black text-dark'>M</span>
                      <span className='badge border border-black text-dark'>L</span>
                      <span className='badge border border-black text-dark'>XL</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-15 py-2">
                    <h3 className='product-heading mb-0'>Color: </h3>
                    <Color />
                  </div>
                  <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">
                    <h3 className='product-heading mb-0'>Cantidad: </h3>
                    <div className="quantity">
                      <input
                        className='form-control'
                        type='number'
                        name=''
                        min={1}
                        style={{ width: '70px' }}
                      />
                    </div>
                    <div className='d-flex align-items-center gap-4'>
                      <button className='button border-0'>Agregar al Carrito</button>
                      <Link to='/signup' className='button signup'>Comprar ahora</Link>
                    </div>
                  </div>
                  <div className='d-flex flex-row align-items-center gap-15 '>
                    <div> <Link to='/compare-product' className='text-dark' href=""><img src="/images/prodcompare.svg" alt="compare" /> Comparar</Link></div>
                    <div> <Link to='/wishlist' className='text-dark' href=""><img src="/images/wish.svg" alt="compare" /> Agergar lista de deseos</Link></div>
                  </div>
                </div>
                  {/* ACCORDION START */}
                  <div className='product-heading mb-0 gap-15 py-2'>
                    
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed gap-15" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <MdOutlineLocalShipping /> 
                          Envío y Devolución
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">El envío gratis estará disponible para las compras que superen los $5000 en todo el territorio Argentino</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          
                          Materiales
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Dimenciones
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">12 mm x 60 mm x 40 mm </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-heading-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4" aria-expanded="false" aria-controls="flush-collapseThree">
                          Instrucciones para Uso y Cuidado
                        </button>
                      </h2>
                      <div id="flush-collapse-4" className="accordion-collapse collapse" aria-labelledby="flush-heading-4" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">12 mm x 60 mm x 40 mm </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-heading-5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5" aria-expanded="false" aria-controls="flush-collapseThree">
                          Compartir
                        </button>
                      </h2>
                      <div id="flush-collapse-5" className="accordion-collapse collapse" aria-labelledby="flush-heading-5" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">12 mm x 60 mm x 40 mm </div>
                      </div>
                    </div>

                  </div>
                  </div>
                  {/* ACCORDION END */}
              </div>
            </div>
          </div>
      </Container>
      {/* Description Section */}
      <Container class1='description-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-12">
              <div>
                <h4>Descripción</h4>
                <p className="bg-white p-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt perferendis corporis officiis veniam tenetur quaerat voluptatum velit aperiam, sint incidunt nostrum repudiandae in soluta! Deserunt repellat ratione temporibus illo earum!
                </p>
              </div>
            </div>
          </div>
      </Container>
      {/* Review Section */}
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Reseñas</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Reseña del Cliente</h4>
                    <div className='d-flex gap-10 align-items-center'>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#F37C20"
                      />
                      <p className='mb-0'>Basado en 2 reseñas</p>
                    </div>
                  </div>
                  <div>
                    {orderedProduct && (
                      <Link to='/' className='text-dark text-decoration-underline'>Escriba una Reseña</Link>
                    )}
                  </div>
                </div>
                <div id='review' className="review-form p-4">
                  <h4>Escriba una Reseña</h4>
                  <form className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#F37C20"
                      />
                    </div>
                    <div>
                      <textarea className='w-100 form-control' rows="4" cols="30" placeholder=''></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className='d-flex align-items-center gap-10'>
                      <h6 className='mb-0'>Lucca86</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={2}
                        edit={true}
                        activeColor="#F37C20"
                      />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus cupiditate voluptas aut ducimus deleniti tenetur et, optio quibusdam doloribus molestias dolore reprehenderit voluptatum quidem nihil voluptatem! Dolor, dicta error.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      {/* popular Products Section */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Productos Populares</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="card">
                <p>Smart Watch</p>
                <p>Speekers</p>
                <p>Laptops</p>
              </div>
            </div>
            <div className="col-2">
              <div className="card bg-dark">
                <p>15% descuento</p>
                <h5 className=''>Auriculares</h5>
                <p className=''>Desde 6530 <br /> o 6 cuotas s/interes</p>
              </div>
            </div>
            <ProductCard />
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
      </Container>
    </>
  )
}

export default SingleProduct