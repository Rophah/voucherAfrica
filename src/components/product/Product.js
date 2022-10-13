import React from 'react';
import './Product.css';

const Product = ({ id, title, img, docs }) => {
    return (
        <div>
            <div className='product'>
                <img src={img} alt="Gift card customer" data-bs-toggle="modal" data-bs-target={`#` + id} />
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-text">
                                <h2 className='text-center'>{title}</h2>
                                <p style={{ width: '100%' }}>To redeem your voucher, we will send an OTP to the email address attached to the voucher. Please complete the details below.</p>
                                {docs}
                                <form action="" className='form-group'>
                                    <input type="text" placeholder='NGN 0' className='form-control mb-4 mt-5' required />

                                    <input type="text" placeholder='Enter full name' className='form-control mb-4' required />

                                    <input type="email" placeholder='Enter email address' className='form-control mb-4' required />

                                    <input type="email" placeholder='Confirm your email address' className='form-control mb-4' required />

                                    <input type="email" placeholder='Enter phone number' className='form-control' required />


                                    <button type='submit' className='btn btn-dark form-control mt-5 mb-5' >CONTINUE</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product 