import logo from './image/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck,FaRulerCombined,FaBed,FaBath,FaPhoneAlt,FaFacebookF,FaTwitter,FaInstagram,FaEnvelope,FaLinkedinIn,FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import b1 from './image/b1.jpeg';
import b2 from './image/b2.jpeg';
import p1 from './image/p1.png';
import p2 from './image/p2.png';
import p3 from './image/p3.png';
import p4 from './image/p4.png';
import p5 from './image/p5.png';
import p6 from './image/p6.png';
import p7 from './image/p7.png';
import p8 from './image/p8.png';
import l1 from './image/l1.jpeg';
import l2 from './image/l2.jpeg';
import l3 from './image/l3.jpeg';
import l4 from './image/l4.jpeg';
import l5 from './image/l5.jpeg';
import l6 from './image/l6.jpeg';
import a1 from './image/a1.jpeg';
import a2 from './image/a2.jpeg';
import a3 from './image/a3.jpeg';
import a4 from './image/a4.jpeg';
import t1 from './image/t1.jpeg';
import t2 from './image/t2.jpeg';
import t3 from './image/t3.jpeg';
import contact from './image/contact.jpeg';
import about from './image/about.jpeg';
const option={
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
  }
}
const option1={
  responsive:{
    0:{
      items:1,
    },
    1000:{
      items:2,
    }
  }
}

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div>

      {/* -start header- */}
      <Container className='nav-bar'>
        <nav class="navbar navbar-expand-lg px-4">
          <a className='logo_img d-flex'>
            <div className='icon p-1 me-2 align-items-center justify-content-center'><img src={logo}></img></div>
            <h1 className='m-0 mt-2'>Makaan</h1>
          </a>
          <Button variant="primary" className="navbar-toggler d-lg-none" onClick={handleShow}>
            <span className='navbar-toggler-icon'></span>
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg" className='z-10'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul class="navbar-nav main_menu ms-auto d-lg-none">
                <li class="nav-item py-2 me-1">
                  <a class="nav-link active" aria-current="page" href="#">Home <span
                    class="fa-solid fa-chevron-down ps-1"></span></a>
                </li>
                <li class="nav-item  py-2 me-1">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item py-2 me-1 dropdown">
                  <a class="nav-link" href="#">Property<i><IoIosArrowDown></IoIosArrowDown></i></a>
                  <ul class="sub_menu ps-3 pe-3">
                    <li><a class="sub_item">Property List</a></li>
                    <li><a class="sub_item">Property Type</a></li>
                    <li><a class="sub_item">Property Agent</a></li>
                  </ul>
                </li>
                <li class="nav-item py-2 me-1 dropdown">
                  <a class="nav-link" href="#">Pages<i><IoIosArrowDown></IoIosArrowDown></i></a>
                  <ul class="sub_menu ps-3 pe-3">
                    <li><a class="sub_item">Testimonial</a></li>
                    <li><a class="sub_item">404-erroe</a></li>
                    <li><a class="sub_item">Pages</a></li>
                  </ul>
                </li>
                <li class="nav-item  py-2">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav main_menu ms-auto">
              <li class="nav-item py-2 me-1">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item  py-2 me-1">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item py-2 me-1 dropdown">
                <a class="nav-link" href="#">Property<i><IoIosArrowDown></IoIosArrowDown></i></a>
                <ul class="sub_menu ps-3 pe-3">
                  <li><a class="sub_item">Property List</a></li>
                  <li><a class="sub_item">Property Type</a></li>
                  <li><a class="sub_item">Property Agent</a></li>
                </ul>
              </li>
              <li class="nav-item py-2 me-1 dropdown">
                <a class="nav-link" href="#">Pages<i><IoIosArrowDown></IoIosArrowDown></i></a>
                <ul class="sub_menu ps-3 pe-3">
                  <li><a class="sub_item">Testimonial</a></li>
                  <li><a class="sub_item">404-erroe</a></li>
                  <li><a class="sub_item">Pages</a></li>
                </ul>
              </li>
              <li class="nav-item  py-2">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
            <a className='h_btn px-3 py-2 d-none d-lg-flex btn-primary'>Add Property</a>
          </div>
        </nav>
      </Container>
      {/* -end header- */}


      {/* -start banner- */}
      <div className='header p-0'>
        <Row className='g-0 align-item flex-column-reverse flex-md-row'>
          <Col md={6} className='mt-lg-5'>
            <Container>
            <h1 className='display-5 pt-5 ps-5 pe-5 mb-4 head'>
              Find A <span className='text-blue'>Perfect Home</span> To Live With Your Family
            </h1>
            <p className='mb-4 pb-2 ps-5 pe-5'>Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <a className='h_btn btn-primary py-3 px-5 me-3 ms-5 mb-4'>Get Started</a>
            </Container>
          </Col>
          <Col md={6} className='pt-0'>
            <OwlCarousel className='owl-theme' id='banner' loop margin={10} nav dots={false} {...option}>
              <div class='item'>
                <img src={b1}></img>
              </div>
              <div class='item'>
                <img src={b2}></img>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </div>
      {/* -start banner- */}


      {/* -start search- */}
      <div className='bgblue mb-5'>
        <Container>
          <Row className='g-2'>
            <Col md={10}>
              <Row className='g-2'>
                <Col md={4}><input type='text' className='form-control border-0 py-3' placeholder='Search Keyword'></input></Col>
                <Col md={4}>
                  <select className='form-select border-0 py-3'>
                      <option selected>Property Type</option>
                      <option value="1">Property Type 1</option>
                      <option value="2">Property Type 2</option>
                      <option value="3">Property Type 3</option>
                  </select>
                </Col>
                <Col md={4}>
                  <select className='form-select border-0 py-3'>
                      <option selected>Location</option>
                      <option value="1">Location 1</option>
                      <option value="2">Location 2</option>
                      <option value="3">Location 3</option>
                  </select>
                </Col>
              </Row>
            </Col>
            <Col md={2}><button className='h_btn border-0 btn-dark w-100 py-3'>Search</button></Col>
          </Row>
        </Container>
      </div>
      {/* -start search- */}


      {/* -start property- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='text-center mx-auto mb-5 title'>
            <h1 className='mb-3'>Property Types</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <Row className='g-4'>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p1} className='img-fluid'></img></div>
                <h6>Apartment</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p2} className='img-fluid'></img></div>
                <h6>Villa</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p3} className='img-fluid'></img></div>
                <h6>Home</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p4} className='img-fluid'></img></div>
                <h6>Office</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p5} className='img-fluid'></img></div>
                <h6>Building</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p6} className='img-fluid'></img></div>
                <h6>Townhouse</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p7} className='img-fluid'></img></div>
                <h6>Shop</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p8} className='img-fluid'></img></div>
                <h6>Garage</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -start property- */}


      {/* -start place- */}
      <div className='container-xxl py-5'>
        <Container>
          <Row className='g-5 align-items-center'>
            <Col lg={6}>
              <div className='about-img position-relative overflow-hidden p-5 pe-0'><img src={about} className='img-fluid w-100'></img></div>
            </Col>
            <Col lg={6}>
              <h1 className='mb-4 h_one'>#1 Place To Find The Perfect Property</h1>
              <p className='mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p><i className='text-blue me-3'><FaCheck></FaCheck></i>Tempor erat elitr rebum at clita</p>
              <p><i className='text-blue me-3'><FaCheck></FaCheck></i>Aliqu diam amet diam et eos</p>
              <p><i className='text-blue me-3'><FaCheck></FaCheck></i>Clita duo justo magna dolore erat amet</p>
              <a className='h_btn btn-primary py-3 px-5 mt-3'>Read More</a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -start place- */}


      {/* -start list- */}
      <div className='container-xxl py-5'>
        <Container>
          <Row className='g-0 gx-5 align-items-end'>
            <Col lg={6}>
              <div className='text-start mx-auto mb-5'>
                <h1 className='mb-3 color-primary'>Property Listing</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
              </div>
            </Col>
            <Col lg={6} className='text-start text-lg-end'>
                <ul className='nav nav-pills d-inline-flex justify-content-end mb-5'>
                  <li className='nav-item me-2'><a className='h_btn py-1 px-2 btn-outline-primary active'>Featured</a></li>
                  <li className='nav-item me-2'><a className='btn py-1 px-2 btn-outline-primary'>For Sell</a></li>
                  <li className='nav-item me-0'><a className='btn py-1 px-2 btn-outline-primary'>For Rent</a></li>
                </ul>
            </Col>
          </Row>
          <div className='tab-cnt'>
            <div className='tab-pane p-0'>
              <Row className='g-4'>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l1} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l2} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l3} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l4} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l5} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l6} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col className='text-center'>
                  <a className='h_btn btn-primary py-3 px-5'>Browse More Property</a>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* -start list- */}


      {/* -start contact- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='bg-light rounded p-3'>
            <div className='bg-light rounded p-4 brd'>
              <Row className='g-5 align-items-center'>
                <Col><img src={contact} className='img-fluid w-100 rounded'></img></Col>
                <Col lg={6}>
                  <div className='mb-4'>
                    <h1 className='mb-3 color-primary'>Contact With Our Certified Agent</h1>  
                    <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                  </div>  
                  <a className='h_btn btn-primary py-3 px-4 me-2'><i className='me-2'><FaPhoneAlt></FaPhoneAlt></i>Make A Call</a>
                  <a className='h_btn btn-dark py-3 px-4'><i className='me-2'><SlCalender></SlCalender></i>Get Appoinment</a>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* -start contact- */}


      {/* -start agent- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='text-center mx-auto mb-5 m-w'>
            <h1 className='mb-3 color-primary'>Property Agents</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <Row className='g-4'>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a1} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a2} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a3} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a4} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -start agent- */}


      {/* -start testimonial- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='text-center mx-auto mb-5 m-w'>
            <h1 className='mb-3 color-primary'>Our Clients Say!</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className='px-5'>
          <OwlCarousel className='owl-theme' id='banner2' loop margin={10} nav dots={false} {...option1}>
              <div class='item'>
                <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                    <div className='d-flex align-items-center'>
                      <img src={t1} className='img-fluid flex-shrink-0 rounded i-w'></img>
                      <div className='ps-3'>
                        <h6 className='mb-0 color-primary'>Client Name</h6>
                        <small className='grey'>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item'>
              <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                    <div className='d-flex align-items-center'>
                      <img src={t2} className='img-fluid flex-shrink-0 rounded i-w'></img>
                      <div className='ps-3'>
                        <h6 className='mb-0 color-primary'>Client Name</h6>
                        <small className='grey'>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item'>
              <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                    <div className='d-flex align-items-center'>
                      <img src={t3} className='img-fluid flex-shrink-0 rounded i-w'></img>
                      <div className='ps-3'>
                        <h6 className='mb-0 color-primary'>Client Name</h6>
                        <small className='grey'>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container>

      </div>
      {/* -start testimonial- */}


      {/* -start footer- */}
      <div class="container-fluid b-dark text-white-50 footer pt-5 mt-5">
        <Container className='py-5'>
          <Row className='g-5'>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Get In Touch</h5>
              <p class="mb-2"><i><FaLocationDot></FaLocationDot></i>123 Street, New York, USA</p>
              <p class="mb-2"><i><FaPhoneAlt></FaPhoneAlt></i>+012 345 67890</p>
              <p class="mb-2"><i><FaEnvelope></FaEnvelope></i>123 Street, New York, USA</p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social"><i><FaTwitter></FaTwitter></i></a>
                <a class="btn btn-outline-light btn-social"><i><FaFacebookF></FaFacebookF></i></a>
                <a class="btn btn-outline-light btn-social"><i><FaInstagram></FaInstagram></i></a>
                <a class="btn btn-outline-light btn-social"><i><FaLinkedinIn></FaLinkedinIn></i></a>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Quick Links</h5>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>About Us</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Contact Us</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Our Services</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Privacy Policy</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Terms & Conditions</a>
            </Col>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Photo Gallery</h5>
              <Row className='g-2 pt-2'>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l1}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l2}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l3}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l4}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l5}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l6}></img></Col>
              </Row>
            </Col>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div class="position-relative mx-auto w-4">
                <input class="t-w form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"></input>
                <button type="button" class="h_btn btn-primary py-2 px-3 border-0 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container></Container>
      </div>
      {/* -start footer- */}

    </div>
  );
}

export default App;
