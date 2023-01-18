import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
      {/* HOME 1 SECTION START */}
      <Container class1='home-wrapper-1 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className='img-fluid rounded-3'
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCARGHER FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Desde $999.00 <br /> o $41.62 por mes</p>
                  <Link className='button'>Comprar</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    className='img-fluid rounded-3'
                    src="images/catbanner-01.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Lo más vendido</h4>
                    <h5>Compre un iPad Air</h5>
                    <p>Desde $999.00 <br />o $41.62 por mes</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className='img-fluid rounded-3'
                    src="images/catbanner-02.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Recientes.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>Desde $999.00 <br />o $41.62 por mes</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className='img-fluid rounded-3'
                    src="images/catbanner-03.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Recientes.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>Desde $999.00 <br />o $41.62 por mes</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className='img-fluid rounded-3'
                    src="images/catbanner-04.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Recientes.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>Desde $999.00 <br />o $41.62 por mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* HOME 1 SECTION END */}
      {/* HOME 2 SERVICES START */}
      <Container class1='home-wrapper-2 py-5'>
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {
                  services?.map((service, i) => (
                    <div className='d-flex align-items-center gap-15' key={i}>
                      <img src={service.image} alt="services" />
                      <div>
                        <h6>{service.title}</h6>
                        <p className='mb-0'>{service.tagline}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
      </Container>
      {/* HOME 2 SERVICES END */}
      {/* HOME 2 SECTION */}
      <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Camaras</h6>
                    <p className='mb-0'>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p className='mb-0'>6 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smartwatchs</h6>
                    <p className='mb-0'>8 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p className='mb-0'>15 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Camaras</h6>
                    <p className='mb-0'>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p className='mb-0'>6 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smartwatchs</h6>
                    <p className='mb-0'>8 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camaras" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p className='mb-0'>15 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camaras" />
                </div>
              </div>
            </div>
          </div>
      </Container>
      {/* HOME 2 SECTION END*/}
      {/* COLLECTION SECTION START */}
      <Container class1="feature-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Colecciones Destacadas</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      {/* COLLECTION SECTION END */}
      {/* FAMOUS PRODUCTS START */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/smartwatch.jpg" className="img-fluid" alt="smart" />
                <div className="famous-content position-absolute">
                  <h5>Pantalla grande</h5>
                  <h3>Smart Watch Series 7</h3>
                  <p>desde $39850 <br /> o cuotas sin interés </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-2.jpg" className="img-fluid bg-white" alt="smart" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Laptops</h5>
                  <h3 className='text-dark'>Pantalla de alto brillo</h3>
                  <p className='text-dark'>27" - 5k Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-3.png" className="img-fluid bg-white" alt="smart" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Smartphones</h5>
                  <h3 className='text-dark'>Samsung S10 Edge</h3>
                  <p className='text-dark'>New color</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-4.jpg" className="img-fluid bg-white" alt="smart" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Home Speakers</h5>
                  <h3 className='text-dark'>Bose 300</h3>
                  <p className='text-dark'>Sonido que enamora </p>
                </div>
              </div>
            </div>
          </div>
      </Container>
      {/* FAMOUS PRODUCTS END */}
      {/* SPECIAL PRODUCTS START */}
      <Container class1='special-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Productos Especiales
              </h3>
            </div>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
      </Container>
      {/* POPULAR SECTION START */}
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
                <p className=''>Desde 6530 <br/> o 6 cuotas s/interes</p>
              </div>
            </div>
            <ProductCard />
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
      </Container>
      {/* POPULAR SECTION END */}
      {/* MARQUEE SECTION START */}
      <Container class1="marquee-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      {/* MARQUEE SECTION START */}
      {/* BLOG SECTION START */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Últimas entradas de Blog</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
      </Container>
      {/* BLOG SECTION END */}
    </>
  )
}

export default Home