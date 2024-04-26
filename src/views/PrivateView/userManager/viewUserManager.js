import React from 'react';
import { Link } from 'react-router-dom';


const QuanLyNguoiDung = () => {
    return (
        <div className='main mx-auto'>
            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px', marginBottom: '2px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</Link>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Quản lý người dùng</Link>  <br />
                </div>


                <h2 className='text-center mb-5'>Quản lý người dùng</h2>

            </div>
        </div>


    );
}

export default QuanLyNguoiDung;





