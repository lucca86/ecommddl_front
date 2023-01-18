import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    // <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img 
                    className='img-fluid w-100'
                    src="/images/blog-1.jpg" 
                    alt="blog" 
                />
            </div>
            <div className="blog-content">
                <p className='date'>09 ene 2023</p>
                <h5 className='title'>Lo último en realidad virtual </h5>
                <p className='description'>Anímate a vivir una realidad diferente</p>
                <Link to='/blog/:id' className='button'>Ver más...</Link>
            </div>
        </div>
    // </div>
  )
}

export default BlogCard