import React from 'react'
import Meta from '../components/Meta'
import BreadCrum from '../components/BreadCrumb'
import Container from '../components/Container'

const Wishlist = () => {
  return (
    <>
        <Meta title={'wishlist'} />
        <BreadCrum title='Lista de Deseos' />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" alt="whish" />
                            </div>
                            <h5 className="title">Samsung Smart Watch</h5>
                            <h6 className="price mb-3">$ 78500</h6>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" alt="whish" />
                            </div>
                            <h5 className="title">Samsung Smart Watch</h5>
                            <h6 className="price mb-3">$ 78500</h6>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" alt="whish" />
                            </div>
                            <h5 className="title">Samsung Smart Watch</h5>
                            <h6 className="price mb-3">$ 78500</h6>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Wishlist