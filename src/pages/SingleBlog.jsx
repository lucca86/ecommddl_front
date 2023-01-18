import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={'Blog'} />
            <BreadCrumb title='Blog' />
            <Container class1="blog-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <h3 className='title'>Lo último en realidad virtual</h3>
                                <img src="/images/blog-1.jpg" className='img-fluid my-4 w-100' alt="blog" />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Libero expedita impedit magni molestias! Accusantium eveniet quae ut, 
                                    ratione ex a doloremque debitis qui dignissimos laborum quibusdam praesentium, 
                                    quod itaque sed.</p>
                                <Link to='/blogs'><HiOutlineArrowLeft /> Volver a Blogs</Link>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default SingleBlog