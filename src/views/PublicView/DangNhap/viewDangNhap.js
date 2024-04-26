import { Link } from 'react-router-dom';
import '../DangNhap/dangNhapStyles.css';

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../authContext';
import { useNavigate } from 'react-router-dom';




const DangNhap = () => {
    const [tenDangNhap, setTenDangNhap] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogin = async (event) => {
        event.preventDefault();

        if (!tenDangNhap || !matKhau) {
            alert('Vui lòng nhập đủ thông tin đăng nhập: Tài khoản và mật khẩu.');
            return;
        }


        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ten_dang_nhap: tenDangNhap, mat_khau: matKhau }),
            });
            const data = await response.json();
            if (data.success) {
                alert('Đăng nhập thành công !');
                console.log(data.message);
                setIsAuthenticated(true);
                // window.location.href = 'http://localhost:3003/trang-chu';
                navigate('/trang-chu');

            } else {
                // Hiển thị thông báo lỗi
                console.error(data.error);
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
        }
    };

    return (
        <div className='main mx-auto'>
            <div className='container-fluid mb-5' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px', marginBottom: '2px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</Link>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Đăng nhập</Link>  <br />
                </div>


                <div className="container d-flex justify-content-center align-items-center">
                    <div className='main mx-auto '>
                        {/* ... */}
                        <div className='container-login rounded-3 mb-5 p-3'>
                            <h3 className='text-center'>ĐĂNG NHẬP</h3>
                            <form onSubmit={handleLogin}>
                                {/* ... */}
                                <div className="mb-3">
                                    <label className="form-label">Tài khoản đăng nhập</label>
                                    <input
                                        className="form-control"
                                        value={tenDangNhap}
                                        onChange={(e) => setTenDangNhap(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        value={matKhau}
                                        onChange={(e) => setMatKhau(e.target.value)}
                                    />
                                </div>
                                {/* ... */}
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary rounded-5">Đăng nhập</button>
                                </div>



                                <p className='or-login mt-3 mb-3 text-center'> Hoặc </p>
                                <span>
                                    <span> Bạn chưa có tài khoản?</span>
                                </span>
                                <Link to={"/register"} className="custom-link-login ms-1 "> Đăng kí ngay</Link>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DangNhap;






