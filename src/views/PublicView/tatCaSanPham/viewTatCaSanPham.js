import React from 'react';
import { useState, useEffect } from 'react';
import CardProduct from '../../../components/cardSanPham/compCardSanPham'
import CardStand from '../../../components/cardGianHang/compCardGianHang'


const TatCaSanPham = () => {

    // data
    const [products, setProducts] = useState([]);
    const [stands, setStands] = useState([]);


    console.log('dataProducts:', products);
    console.log('dataStands:', stands);



    useEffect(() => {
        const fetchProducts = fetch("http://localhost:3001/products").then(response => response.json())
        const fetchStands = fetch("http://localhost:3001/stands").then(response => response.json())

        Promise.all([fetchProducts, fetchStands])
            .then(([products, stands]) => {

                console.log("Response from API:", products); // Kiểm tra dữ liệu trả về từ API
                console.log("Response from API:", stands); // Kiểm tra dữ liệu trả về từ API


                if (Array.isArray(products)) {
                    setProducts(products);
                } else {
                    console.error('Invalid data format from API:', products);
                }

                if (Array.isArray(stands)) {
                    setStands(stands); // Gán dữ liệu vào products nếu là mảng
                } else {
                    console.error('Invalid data format from API:', products);
                }
            })
            .catch(error => {
                console.error('Error data: ', error);
            });
    }, []);




    return (
        <div className='main mx-auto'>
            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px' }}></img>

                    <a href='' style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</a>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <a href='' style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Tất cả sản phẩm</a>  <br />
                </div>


                <h3 className='name'> Tất cả sản phẩm</h3>
                <hr className='line mt-1' />

                <div className='row mb-5'>


                    {products.map(product => (
                        <div className='col mt-5' key={product.id}>
                            <CardProduct
                                productName={product.title}
                                price={product.price}
                                image={product.image}
                                location={product.location}
                                stand={product.stand}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </div>


    );
}

export default TatCaSanPham;





