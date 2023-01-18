import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Container from '../components/Container'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'


const OurStore = () => {

    const [grid, setGrid] = useState(3)

    return (
        <>
            <Meta title={'Tienda'} />
            <BreadCrumb title='Tienda' />
            <Container className="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        {/* ASIDE BAR */}
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Compre por Categoria</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Filtre por
                                </h3>
                                <div>
                                    <h5 className='sub-title'>Disponibilidad</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="" >
                                                In Stock (5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="">
                                                Out of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Precio</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="desde" placeholder="desde" />
                                            <label htmlFor="desde">Desde</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="hasta" placeholder="hasta" />
                                            <label htmlFor="hasta">Hasta</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colores</h5>
                                    <div>
                                        <div className="d-flex flex-wrap">
                                            <Color />
                                            <Color />
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Talles</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="talle-xs" />
                                            <label className="form-check-label" htmlFor="talle-xs">XS (0)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="talle-s" />
                                            <label className="form-check-label" htmlFor="talle-s">S (0)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="talle-m" />
                                            <label className="form-check-label" htmlFor="talle-m">M (0)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="talle-l" />
                                            <label className="form-check-label" htmlFor="talle-l">L (0)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="talle-xl" />
                                            <label className="form-check-label" htmlFor="talle-xl">XL (0)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Productos por Etiquetas</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className='badge bg-light text-secondary round-3 py-2 px-3'>headphone</span>
                                        <span className='badge bg-light text-secondary round-3 py-2 px-3'>Laptop</span>
                                        <span className='badge bg-light text-secondary round-3 py-2 px-3'>Smart Watch</span>
                                        <span className='badge bg-light text-secondary round-3 py-2 px-3'>Speaker</span>
                                        <span className='badge bg-light text-secondary round-3 py-2 px-3'>TV</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Productos Aleatorios</h3>
                                <div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/speaker.jpg" className='img-fluid' alt="random" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Lorem ipsum dolor sit amet conse.</h5>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                value={2.5}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#F37C20"
                                            />
                                            <b>$15000</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/tv.jpg" className='img-fluid' alt="random" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Lorem ipsum dolor sit amet conse.</h5>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                value={5}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#F37C20"
                                            />
                                            <b>$48000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Filtros Superiores  */}
                        <div className="col-9">
                            <div className="filter-sort-grid mb-3">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0 d-block' style={{ width: '160px'}} >Ordenar por:</p>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="">Más vendido</option>
                                            <option value="">A-Z</option>
                                            <option value="">Z-A</option>
                                            <option value="">Menor precio</option>
                                            <option value="">Mayor precio</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="totalproducts mb-0">21 Products</p>
                                        <div className="d-flex align-items-center gap-10 grid">
                                            <img onClick={() => setGrid(3)} src="images/gr4.svg" alt="grid" className='d-block img-fluid' />
                                            <img onClick={() => setGrid(4)} src="images/gr3.svg" alt="grid" className='d-block img-fluid' />
                                            <img onClick={() => setGrid(6)} src="images/gr2.svg" alt="grid" className='d-block img-fluid' />
                                            <img onClick={() => setGrid(12)} src="images/gr.svg"  alt="grid" className='d-block img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className='d-flex gap-10 flex-wrap'>
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default OurStore