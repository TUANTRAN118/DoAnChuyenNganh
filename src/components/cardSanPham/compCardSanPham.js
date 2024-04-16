import React from 'react';
import '../cardSanPham/cardSanPhamStyles.css'

const Product = ({productName, price, image, location, stand}) => {
    return (

       
        <div className='col' >
            <div className="card card-products" >
                <img src={image} class="card-img-top p-1" alt="..." />
                <div className="card-body p-0 ps-3 pe-3">
                    <h5 className="card-title mb-4">{productName}</h5>
                    <span className='price' > {price} </span>

                    <div className='location mt-2'>
                        <img src={require('../../assets/img_Product/ic_location.png')} className="Logo" alt="..." style={{}} />
                        <span> {location} </span>
                    </div>

                    <div className='stand mt-1'>
                        <img src={require('../../assets/img_Product/ic_stand.png')} className="Logo" alt="..." style={{}} />
                        <span> {stand} </span>
                    </div>

                    <div className='button d-flex '>
                        <button className="button-add rounded-pill mt-2">Thêm giỏ hàng</button>
                        <button className="button-favourite rounded-circle mt-2 ms-2">
                            <img src={require('../../assets/img_Product/ic_favourite.png')} className="Logo" alt="..." style={{}} />
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Product;




