import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Container from '../components/Container'
import Meta from '../components/Meta'

const CompareProduct = () => {
  return (
    <>
        <Meta title={'Compare Products'} />
        <BreadCrumb title='Compare Productos' />
        <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Samsung Smart Watch</h5>
                                <h6 className="price mb-3">$ 78500</h6>
                            </div>
                            <div>
                                <div className="product-detail">
                                    <h5>Marca:</h5>
                                    <p>Samsung</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Tipo:</h5>
                                    <p>Smart Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>SKU:</h5>
                                    <p>SKU033</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Disponibilidad:</h5>
                                    <p>En Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Talle:</h5>
                                    <p>S M L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Samsung Smart Watch</h5>
                                <h6 className="price mb-3">$ 78500</h6>
                            </div>
                            <div>
                                <div className="product-detail">
                                    <h5>Marca:</h5>
                                    <p>Samsung</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Tipo:</h5>
                                    <p>Smart Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>SKU:</h5>
                                    <p>SKU033</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Disponibilidad:</h5>
                                    <p>En Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Talle:</h5>
                                    <p>S M L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default CompareProduct