import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../DangKy/dangKyStyles.css';


function RegisterForm() {
    // lưu trữ dữ liệu form
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        cccd: ''
    });

    // form được submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            console.error('Mật khẩu và xác nhận mật khẩu không khớp.');
            return;
        }

        const registerData = {
            ho_va_ten: formData.name,
            ten_dang_nhap: formData.username,
            email: formData.email,
            so_dien_thoai: formData.phone,
            mat_khau: formData.password,
            can_cuoc: formData.cccd
        };

        // Gửi yêu cầu đăng ký đến sv
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });

            const data = await response.json();
            if (data.success) {
                console.log(data.message);
                // Đặt lại form sau khi đăng ký 
                setFormData({
                    name: '',
                    username: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    cccd: ''
                });
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu đăng ký:', error);
        }
    };

    //thay đổi trên form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (

        <div className='main mx-auto'>
            <div className='container-fluid mb-5' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px', marginBottom: '2px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</Link>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Đăng Ký</Link>  <br />
                </div>


                <div className="container d-flex justify-content-center align-items-center">



                    <div className='container-register rounded-3 mb-5 p-3'>
                        <h3 className='text-center mb-5'> ĐĂNG KÝ</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="name" className="form-label">Họ và Tên</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nhập họ và tên của bạn" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Tên Đăng Nhập</label>
                                <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Nhập tên đăng nhập" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Địa Chỉ Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Nhập địa chỉ email của bạn" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cccd" className="form-label">Căn cước công dân</label>
                                <input type="text" className="form-control" id="cccd" name="cccd" value={formData.cccd} onChange={handleChange} placeholder="Nhập căn cước công dân" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Số Điện Thoại</label>
                                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Nhập số điện thoại của bạn" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mật Khẩu</label>
                                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Nhập mật khẩu" required />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Nhập Lại Mật Khẩu</label>
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Nhập lại mật khẩu" required />
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary mb-5">Đăng Ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default RegisterForm;






