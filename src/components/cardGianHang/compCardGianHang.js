import React from 'react';
import '../../components/cardGianHang/cardGianHangStyles.css'
const Product = ({ Name, phone, image, amount }) => {
    return (


        <div className='col' >
            <div className="card card-stands" >
                <img src={image} class="card-img-top" alt="..." />
                <div className="card-body p-0 ps-3 pe-3">
                    <h5 className="card-title mb-2 text-center">{Name}</h5>

                    <div className='phone ms-4'>
                        <img src={require('../../assets/img_stands/ic_phone.png')} className="Logo" alt="..." style={{}} />
                        <span className='ms-3'> {phone} </span>
                    </div>

                    <div className='product mt-1 ms-4 '>
                        <div className='col'>
                            <img src={require('../../assets/img_stands/ic_product.png')} className="Logo" alt="..." style={{}} />
                            <span className='ms-3'> {amount} </span>
                        </div>
                    </div>

                    <div className='button d-flex mt-1 text-center'>
                        <button className="button-detail rounded-pill mt-2">Chi tiết gian hàng</button>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Product;




