import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Product from './product/Product';
import Search from './search/Search';
import './Home.css';
import { voucher as voucherData } from '../Voucher-data';

const Home = () => {
    const [vouchers, setVouchers] = useState(voucherData);
    const [search, setSearch] = useState("");
    const [filteredProducts, setfilteredProducts] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setfilteredProducts(
            vouchers.filter((voucher) => voucher.title.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, vouchers]);

    return (

        <div className='demo-1' id='bdy'>
            {/* <!-- Start PreLoader
============================================= --> */}
            <div className="se-pre-con"></div>
            {/* <!-- Start PreLoader--> */}

            <div className="theme_all_wrap" data-magic-cursor=" " data-color="crimson">

                {/* <!-- Document Wrapper   
=============================== --> */}
                <div id="main-wrapper">

                    {/* <!-- Start header
============================================= --> */}
                    <header className="header">
                        <div className="main-navigation">
                            <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
                                <div className="container">
                                    <a className="navbar-brand" href="index.html">
                                        <h2>VoucherAfrica</h2>
                                    </a>
                                    <div className="ttt">
                                        <span> <i className="icofont-ui-call mr-2"></i>Call us-(+234) 8124243442 </span>
                                    </div>
                                    <button className="navbar-toggler toggler-spring">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-sm-end">
                                        <ul className="navbar-nav navbar-mobile ml-auto">

                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#multipurposevoucher">Buy Multipurpose Voucher</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Redeem Voucher</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a href="mailto:aderafat@gmail.com" className="nav-link">Support</a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bsnav-mobile">
                                <div className="bsnav-mobile-overlay"></div>
                                <div className="navbar"></div>
                            </div>
                        </div>
                    </header>
                    {/* <!-- End header --> */}

                    <div className="clearfix"></div>

                    <main className="main home-background">

                        {/* <!-- Start Hero
============================================= --> */}
                        <div id="home" className="hero-section ">
                            <div className="hero-slider">
                                {/* <!-- owl Slider Begin --> */}
                                <div className="hero-single home-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-6 align-item-center justify-content-center">
                                                <div className="hero-content">
                                                    <span className="top-title">We sell gift cards.</span>
                                                    <h2 data-splitting className="site-title-header wow" data-wow-duration=".1s" data-wow-delay=".4s">
                                                        Buy vouchers from some of your favourite stores in naira.
                                                    </h2>

                                                    <Search inputValue={search} onInputChange={handleSearch} />
                                                    <div className="product-container">
                                                        <div className="products --grid-25 py-5 pr-5">

                                                            {filteredProducts.map((voucher) => {
                                                                const { id, title, img, docs } = voucher;

                                                                return (
                                                                    <div key={id}>
                                                                        <Product id={id} img={img} title={title} docs={docs} />
                                                                        {console.log(voucher.id)}
                                                                    </div>
                                                                );
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="hero-right-pic">
                                                    <img src="assets/img/header/hdr-3.png" alt="thumb" className="bounce-animate" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- single Slider End --> */}
                            </div>
                        </div>
                        {/* <!-- End Hero --> */}



                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-text text-center">
                                            <h2>Redeem a voucher</h2>
                                            <p>To redeem your voucher, we will send an OTP to the email address attached to the voucher. Please complete the details below.</p>
                                            <form action="" className='form-group'>
                                                <input type="text" placeholder='Enter Voucher Number' className='form-control' />
                                                <select className='form-control mt-4'>
                                                    <option value=''>Select bank</option>
                                                    <option value='stanbic'>Stanbic Ibtc</option>
                                                    <option value='Gtb'>GT bank</option>
                                                </select>

                                                <input type="text" minLength={10} maxLength={10} placeholder='Enter account number' className='form-control mt-4' />
                                                <button type='submit' className='btn btn-dark form-control mt-5 mb-5' >CONTINUE</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Pop-up modal starts */}

                        {/* <!-- Multipurpose voucher Modal --> */}
                        <div className="modal fade" id="multipurposevoucher" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-text text-center">
                                            <h2>Buy Multipurpose Voucher</h2>
                                            <p>Buy multipurpose gift card that can be use you and yur loved ones can use anywherew!!! Please complete the details below to buy.</p>
                                            <form action="" className='form-group'>
                                                <input type="text" placeholder='NGN 0' className='form-control' required />

                                                <input type="text" placeholder='Enter full name' className='form-control' required />

                                                <input type="email" placeholder='Enter email address' className='form-control' required />

                                                <input type="email" placeholder='Confirm your email address' className='form-control' required />

                                                <input type="email" placeholder='Enter phone number' className='form-control' required />


                                                <button type='submit' className='btn btn-dark form-control mt-5 mb-5' >CONTINUE</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Multipurpose voucher Pop-up modal starts */}
                    </main>

                    <div className="clearfix"></div>

                    {/* <!-- footer Start --> */}
                    <footer className="footer section pt-80 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 mr-auto col-sm-6">
                                    <div className="widget mb-5 mb-lg-0">
                                        <div className="logo mb-4">

                                        </div>
                                        <p className="">We can help! We have completed hundreds of Network Cabling jobs. Our certified techs will run Cat5e, Cat6 or fiber cables for your phone /data connections.</p>

                                        <ul className="list-inline footer-socials mt-4">
                                            <li className="list-inline-item"><a href="https://www.facebook.com/" className="social-link"><i className="icofont-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="https://twitter.com/" className="social-link"><i className="icofont-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.pinterest.com/" className="social-link"><i className="icofont-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6 text-light">
                                    <div className="widget mb-5 mb-lg-0">
                                        <h4 className="text-capitalize mb-3 white-color">Services</h4>
                                        <div className="divider mb-4 quads-primary-color"></div>

                                        <ul className="list-unstyled footer-menu lh-35">
                                            <li><a>Technical Support </a></li>
                                            <li><a>Telecommunication</a></li>
                                            <li><a>Cable Management/Structured Cabling</a></li>
                                            <li><a>Data Migration</a></li>
                                            <li><a>Computer Repairs</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget mb-5 mb-lg-0">
                                        <h4 className="text-capitalize mb-3 white-color">About Us</h4>
                                        <div className="divider mb-4 quads-primary-color"></div>

                                        <ul className="list-unstyled footer-menu lh-35">
                                            <li><a >Terms & Conditions</a></li>
                                            <li><a >Privacy Policy</a></li>
                                            <li><a >FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget-contact mb-5 mb-lg-0">
                                        <h4 className="text-capitalize mb-3 white-color">Get in Touch</h4>
                                        <div className="divider mb-4 quads-primary-color"></div>

                                        <div className="footer-contact-block mb-4">
                                            <div className="icon d-flex align-items-center">
                                                <i className="icofont-email mr-3 white-color"></i>
                                                <span className="h5 mb-0 white-color">Support Available for 24/7</span>
                                            </div>
                                            <h4 className="mt-2"><a className="white-color">support@quadzland.com</a></h4>
                                        </div>

                                        <div className="footer-contact-block">
                                            <div className="icon d-flex align-items-center">
                                                <i className="icofont-support mr-3 white-color"></i>
                                                <span className="h5 mb-0 white-color">Mon to Fri : 09:00am - 6:00pm CST</span>
                                            </div>
                                            <h4 className="mt-2 white-color"><a className="white-color">+17372490925</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-btm py-4 mt-5" style={{ borderTop: '1px solid #ccc' }}>
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-lg-6">
                                        <div className="white-color">
                                            &copy; Copyright Reserved
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </footer>



                    {/* <!-- Start Scroll top */}
                    {/* ============================================= --> */}
                    <a href="#bdy" id="scrtop" className="smooth-menu"><i className="ti-arrow-up"></i></a>
                    {/* <!-- End Scroll top--> */}

                    {/* <!-- CURSOR --> */}
                    <div className="mouse-cursor cursor-outer"></div>
                    <div className="mouse-cursor cursor-inner"></div>
                    {/* <!-- /CURSOR --> */}
                </div>
            </div>
            {/* <!-- Mouse Cursor End -->  */}

        </div>
    )
}

export default Home