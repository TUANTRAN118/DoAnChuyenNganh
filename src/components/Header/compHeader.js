import React from 'react';
import '../../components/Header/headerStyles.css'

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header fixed-top" style={{ height: '165px' }}>
            <div className='container-fluid'>

                <div className='row ' style={{ backgroundColor: '#FFD37E', Height: '40px', padding: '2px' }}  >
                    <div className="col d-flex justify-content-center " style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={require('../../assets/img_header/Lam-Dong-Logo.png')} alt='Logo header' style={{ height: '37px', width: '37px', objectFit: 'fill' }}></img>

                        <div style={{ fontSize: '18px', color: '#288966', fontWeight: 'bold', marginLeft: '20px' }}>
                            Sàn giao dịch sản phẩm chăn nuôi Lâm Đồng

                        </div>
                    </div>
                </div>


                <div className='row ' style={{ height: '80px', backgroundColor: "#FFFFFF" }}  >

                    <div className='col-3 d-flex justify-content-end'>
                        <img src={require('../../assets/img_header/LogoHeader.png')} alt='Logo header' style={{ height: '80px', width: '80px' }}></img>

                        <div style={{ fontSize: '50px', color: '#001251', fontWeight: 'bold', marginLeft: '20px' }}>
                            LDFarm
                        </div>
                    </div>

                    {/* searchBar */}

                    <div className='col-6 d-flex justify-content-center' style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row ">

                            <div className='col p-0'>
                                <button type="button" className='rounded-start-pill border-end-0    d-flex justify-content-between align-items-center' style={{ width: '125px', height: '40px', fontSize: '16px', backgroundColor: '#fff' }}>
                                    <p className='m-0 ms-1' > Danh mục</p>
                                    <img className='mx-0 mt-1' src={require('../../assets/img_header/ic_dropdown.png')} alt='dropdown' style={{ height: '13px', width: '13px' }}></img>

                                </button>

                            </div>


                            <div className='col p-0 position-relative'>

                                <input className='rounded-end-pill border-1' type="text" placeholder="   Nhập từ khóa tìm kiếm" style={{ width: '440px', height: '40px', borderColor: 'black' }} />

                                <button type="button" className='rounded-circle border  position-absolute  translate-middle d-flex justify-content-center align-items-center ' style={{ width: '35px', height: '35px', backgroundColor: '#FFD37E', left: '419.2px', top: '19.2px' }}>
                                    <img src={require('../../assets/img_header/ic_search.png')} alt='*' style={{ height: '20px', width: '20px' }}></img>
                                </button>
                            </div>

                        </div>

                    </div>


                    {/* Giỏ hàng/ đăng kí đăng nhập */}
                    <div className='col-3 d-flex justify-content-start align-items-center ' style={{}}>
                        <a href='#' className='rounded-circle border   d-flex justify-content-center align-items-center ' style={{ width: '40px', height: '40px', backgroundColor: '#FFD37E', marginLeft: '20px' }}>
                            <img src={require('../../assets/img_header/Variant5.png')} alt='*' style={{ height: '26px', width: '26px' }}></img>
                        </a>

                        <a href='#' className=' d-flex  align-items-center ' style={{ marginLeft: '35px', marginTop: '5px', textDecoration: 'none' }}>
                            <img src={require('../../assets/img_header/user.png')} alt='*' style={{ height: '30px', width: '30px' }}></img>
                            <p className='' style={{ marginLeft: '10px', marginTop: '8px', color: '#6c757d' }}> Đăng ký/Đăng nhập</p>

                        </a>
                    </div>
                </div>


                {/* Navbar */}
                <div className='row ' style={{ backgroundColor: '#FFD37E', height: '50px', padding: '2px' }}  >
                    <div className="col d-flex justify-content-center " style={{ display: 'flex', alignItems: 'center' }}>
                        <ul className="nav">


                            <li className="nav-item-2 d-flex justify-content-end mt-1" style={{ width: '240px' }}>
                                <Link to={"/tat-ca-san-pham"} className='rounded-pill  d-flex justify-content-center ' style={{ width: '220px', height: '39px', textDecoration: 'none' }}>
                                    <img className='mt-2' src={require('../../assets/img_header/ic_list.png')} alt='*' style={{ height: '23px', width: '40px' }}></img>
                                    <p className='m-0 ms-2 mt-1' style={{ fontSize: '20px', fontWeight: '600', color: '#FFFFFF' }}> Tất cả sản phẩm</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"trang-chu"} class="nav-link">Trang chủ </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/gioi-thieu"} className="nav-link">Giới thiệu</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/tin-tuc"} class="nav-link">Tin tức</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"huong-dan-giao-dich"} class="nav-link" href="#">Hướng dẫn giao dịch</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"lien-he"} class="nav-link" >Liên hệ</Link>
                            </li>

                        </ul>
                    </div>
                </div>




            </div>
        </div>



    );

}

export default Header;





