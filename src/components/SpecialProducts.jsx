import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const SpecialProducts = () => {
    return (
        <div className='col-4'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Samsung</h5>
                        <h6 className='title'>Samsung Galaxy Note10+ Mobile Phone Sim...</h6>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            value={3.5}
                            isHalf={true}
                            edit={false}
                            activeColor="#F37C20"
                        />
                        <p className="price">
                            <span className='red-p'>$35000</span> &nbsp; <strike>$37800</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className='mb-0'><b>5</b> días</p>
                            <div className="d-flex gap-10">
                                <span className='badge rounded-circle p-2 bg-danger'>01</span>
                                :
                                <span className='badge rounded-circle p-2 bg-danger'>12</span>
                                :
                                <span className='badge rounded-circle p-2 bg-danger'>43</span>
                            </div>
                        </div>
                        <div className="product-count my-3">
                            <p>Productos: 5</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                        <Link to='/' className='button mt-3'>
                            Agregar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProducts