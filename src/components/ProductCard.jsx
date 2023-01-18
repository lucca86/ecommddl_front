import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
//import wishlist from '../images/wishlist.svg'
//import watch from '../images/watch.jpg'
// import watch2 from '../images/watch2.svg'
//import addcart from '../images/add-cart.svg'
//import view from '../images/view.svg'


const ProductCard = ({ grid }) => {
    let location = useLocation()
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //   };

    return (
        <>
            <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
                <Link to='/product/:id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src="/images/wish.svg" alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src="/images/camera.jpg" alt="product img" />
                        <img src="/images/laptop.jpg" alt="product img" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">
                            Canon
                        </h6>
                        <h5 className="product-title">
                            Cámara digital 20MP
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            value={2.5}
                            isHalf={true}
                            edit={false}
                            activeColor="#F37C20"
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque at quis error maiores cupiditate accusantium sed sunt expedita! Asperiores, suscipit. Ex, molestiae nobis? Ab, excepturi atque est nam porro nemo.</p>
                        <p className="price">$15620</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap'>
                            <button className='border-0 bg-transparent'>
                                <img src="/images/prodcompare.svg" alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="/images/view.svg" alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="/images/add-cart.svg" alt="cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
                <Link to='/product/:id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src="/images/camera.jpg" alt="product img" />
                        <img src="/images/laptop.jpg" alt="product img" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">
                            Canon
                        </h6>
                        <h5 className="product-title">
                            Cámara digital 20MP
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            value={2.5}
                            isHalf={true}
                            edit={false}
                            activeColor="#F37C20"
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque at quis error maiores cupiditate accusantium sed sunt expedita! Asperiores, suscipit. Ex, molestiae nobis? Ab, excepturi atque est nam porro nemo.</p>
                        <p className="price">$15620</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="/images/view.svg" alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="/images/add-cart.svg" alt="cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard