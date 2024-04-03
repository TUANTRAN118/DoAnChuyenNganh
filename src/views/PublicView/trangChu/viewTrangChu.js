import React from 'react';
import '../trangChu/trangChuStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';



// test
import CardProduct from '../../../components/cardSanPham/compCardSanPham'



const TrangChu = () => {



    // xử lý slide
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        require('../../../assets/img_TrangChu/img_slide4.png'),
        require('../../../assets/img_TrangChu/img_slide2.png'),
        require('../../../assets/img_TrangChu/img_slide3.png'),
        require('../../../assets/img_TrangChu/img_slide5.png'),
        require('../../../assets/img_TrangChu/img_slide1.png')
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    // xử lý thời gian slide
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 4000);
        return () => clearInterval(intervalId);
    }, [currentSlide]);



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

            <div className='container-fluid p-0' style={{ maxWidth: '1300px', marginTop: '168px', overflow: 'hidden' }}>


                <div className='col bg-success rounded-bottom'>
                    <div className='row' style={{ height: '410px', Width: '1300px' }}>


                        <div className='col-9 bg-danger p-0' >
                            <div className="slide-container">
                                <div className="slide ">
                                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                                    <div className="carousel-navigation">
                                        <button className="prev rounded-1" onClick={prevSlide}>&#10094;</button>
                                        <button className="next rounded-1" onClick={nextSlide}>&#10095;</button>
                                    </div>
                                </div>

                                <div className="carousel-indicators">
                                    {slides.map((slide, index) => (
                                        <button
                                            key={index}
                                            className={index === currentSlide ? "active" : ""}
                                            onClick={() => setCurrentSlide(index)}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className='col bg-black' >
                            <div className='row bg-danger p-0' >
                                <img src={require('../../../assets/img_TrangChu/img_banner2.png')} className="d-block p-0 " alt="..." style={{ height: '205px', width: '100%' }} />
                            </div>

                            <div className='row bg-success p-0' >
                                <img src={require('../../../assets/img_TrangChu/img_banner.png')} className="d-block p-0 " alt="..." style={{ height: '205px', width: '100%' }} />
                            </div>
                        </div>

                    </div>
                </div>

                {/* banner */}


                <div className='container banner'>
                    <div className='col text-center' style={{ height: '200px', marginTop: '80px', display: 'flex', alignItems: 'flex-end' }}>
                        <div className='col rounded-4 d-flex justify-content-around position-relative' style={{ marginTop: '100px', height: '120px', backgroundColor: '#F8F7F7' }}>
                            <div className='col-3 image-banner '>
                                <div className='image position-absolute ' style={{ left: '120px' }}>
                                    <img src={require('../../../assets/img_TrangChu/img_shipper.png')} alt="Image" />
                                </div>

                                <div className='content mt-4' >
                                    <h5>Giao dịch nhanh chóng</h5>
                                    <span> Mua hàng chỉ bằng </span> <br />
                                    <span> một cuộc điện thoại</span>
                                </div>
                            </div>

                            <div className='col-3 image-banner'>
                                <div className='image position-absolute ' style={{ left: '452px' }}>
                                    <img src={require('../../../assets/img_TrangChu/img_home.png')} alt="Image" />
                                </div>

                                <div className='content mt-4'>
                                    <h5>Đa dạng nhà cung cấp</h5>
                                    <span> Đối tác trải dài </span> <br />
                                    <span> khắp cả nước</span>
                                </div>
                            </div>
                            <div className='col-3 image-banner'>
                                <div className='image position-absolute' style={{ left: '775px' }}>
                                    <img src={require('../../../assets/img_TrangChu/img_earth.png')} alt="Image" className='' style={{ height: '65px', width: '65px' }} />
                                </div>

                                <div className='content mt-4'>
                                    <h5>Sản phẩm đạt chuẩn</h5>
                                    <span> Không chứa chất bảo quản </span> <br />
                                    <span> Chứng nhận VietGPA</span>
                                </div>
                            </div>
                            <div className='col-3 image-banner'>
                                <div className='image position-absolute ' style={{ left: '1095px' }}>
                                    <img src={require('../../../assets/img_TrangChu/img_shield.png')} alt="Image" />
                                </div>

                                <div className='content mt-4'>
                                    <h5>Chứng thực minh bạch</h5>
                                    <span> Gian hàng chứng thực </span> <br />
                                    <span> rõ ràng, công khai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className='container mt-5'>
                    <h3 className='text-center'> SẢN PHẨM BÁN CHẠY</h3>
                    <hr className='line mt-1' />
                    <div className='row'>


                        {products.slice(0, 5).map(product => (
                            <div className='col' key={product.id}>
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





                <div className='container mt-5'>
                    <h3 className='text-center'> SẢN PHẨM MỚI NHẤT</h3>
                    <hr className='line mt-1' />


                </div>

                <div className='container mt-5'>
                    <h3 className='text-center'> GIAN HÀNG NỔI BẬT</h3>
                    <hr className='line mt-1' />
                    <div className='row'>

                        {stands.map(stand => (
                            <div className='col' key={stand.id}>
                                <CardProduct
                                    productName={stand.name}
                                    image={stand.image}
                                    location={stand.location}
                                />
                            </div>

                        ))}
                    </div>





                </div>

                <div className='container mt-5'>
                    <h3 className='text-center'> TIN TỨC NỔI BẬT</h3>
                    <hr className='line mt-1' />


                </div>







                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>

            </div>

        </div>

    );
}

export default TrangChu;





