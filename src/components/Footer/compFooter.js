import React from 'react';
import './footerStyles'
import styles from './footerStyles';

const Footer = () => {
    return (

        <div style={styles.headerBottom}>


            <div className='container-fluid'>

                <div className='row'>

                    <div className='col text-center'>

                        <div className='col'>
                            <div style={{ height: '65px', fontSize: '50px', color: '#001251', fontWeight: 'bold' }}>
                                LDFarm
                            </div>

                            <div style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 800, fontStyle: 'italic' }}>
                                Niềm Tin Chăn Nuôi Việt
                            </div>
                        </div>

                        <div className='col d-flex justify-content-center'>
                            <div className='col' >
                                <a href=''>
                                    <img src={require('../../assets/img_footer/ic_fb.png')} alt='Logo' style={{ height: '35px', width: '35px', margin: '8px' }}></img>

                                </a>

                                <a href=''>
                                    <img src={require('../../assets/img_footer/ic_ytb.png')} alt='Logo' style={{ height: '35px', width: '35px', margin: '8px' }}></img>

                                </a>

                                <a href=''>
                                    <img src={require('../../assets/img_footer/ic_tw.png')} alt='Logo' style={{ height: '35px', width: '35px', margin: '8px' }}></img>

                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <hr className='m-1' />


                <div className='col d-flex justify-content-center' style={{ }}>

                    <div className='col-3' >
                        <div style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 700, fontStyle: 'italic' }}>
                            LDFarm
                        </div>
                        <div className='col'>
                            <span style={{ fontSize: '20px', fontWeight:500 }} >Tel1: 0378273708</span> <br />
                            <span style={{ fontSize: '20px', fontWeight:500 }}>Tel1: 0378273708</span>
                        </div>

                    </div>
                    <div className='col-3' >
                        <div style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 700, fontStyle: 'italic' }}>
                            Sản phẩm
                        </div>
                        <div className='col'>
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thức Ăn Cho Gà</a>  <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thức Ăn Cho Heo</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thức Ăn Cho Vịt</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thức Ăn Cho Cút</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thức Ăn Cho Cá</a>  <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thuốc Bổ Trợ </a>   <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500 }}>Thực Phẩm Bổ Sung</a>

                        </div>

                    </div>
                    <div className='col-3' >
                        <div style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 700, fontStyle: 'italic' }}>
                            Về LDFarm
                        </div>
                        <div className='col'>
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Lĩnh Vực Hình Thành</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Lĩnh Vực Hoạt Động</a>  <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Cam kết Chất Lượng</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Liên Hệ</a> <br />


                        </div>
                    </div>

                    <div className='col-2' >
                        <div style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 700, fontStyle: 'italic' }}>
                            Thông tin thêm
                        </div>
                        <div className='col'>
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Tư Vấn Kỹ Thuật</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Tin Tức </a>  <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Thư Viện</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Đối Tác</a> <br />
                            <a href='' style={{ fontSize: '20px', textDecoration: 'none', color: '#333333', fontWeight:500  }}>Hỗ Trợ Khách Hàng</a>  <br />

                        </div>
                    </div>

                </div>
                
                <hr className='m-1' />


                <div className='row text-center'>
                    <div className='col' >
                        <span style={{ fontSize: '18px', color: '#FFFFFF' }}> Copyright </span>
                        <img src={require('../../assets/img_footer/ic_cr.png')} alt='Logo' style={{ height: '14px', width: '14px', marginRight: '2px' }}></img>
                        <span style={{ fontSize: '18px', color: '#FFFFFF' }}> 2020 -2024 </span>
                        <span style={{ fontSize: '20px', color: '#FFFFFF', fontWeight:700 }}> sàn giao dịch sản phẩm chăn nuôi LDFarm </span>

                    </div>
                </div>
            </div>


        </div>




    );
}

export default Footer;











// <div className="header bottom" style={{ backgroundColor: '#5F374B', height: '600px', padding: '6px 0' }}>
//     <div className='container-fluid'>

//     </div>
// </div>


