import React from 'react';
import { Link } from 'react-router-dom';

const HuongDanGiaoDich = () => {
    return (
        <div className='main mx-auto'>

            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px', marginBottom: '2px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</Link>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Hướng dẫn giao dịch</Link>  <br />
                </div>




                <h3 style={{ color: 'red' }}><b>A. Hướng dẫn giao dịch</b></h3>
                <div style={{ maxWidth: '100%', wordWrap: 'break-word', fontSize: '18px' }}>
                    <p>Sàn giao dịch sản phẩm chăn nuôi Lâm Đồng cho phép người truy cập tìm kiếm, xem chi tiết, đánh giá sản phẩm, đăng nhập tài khoản, thêm sản phẩm vào giỏ hàng và liên hệ với người bán.</p>
                    <h4><b>1. Hướng dẫn chi tiết đăng ký đăng nhập</b></h4>
                    <p>Người dùng nhấn vào phần Đăng ký/Đăng nhập tại góc trên bên phải màn hình, trang Đăng nhập sẽ hiển thị.Khách hàng chưa có tài khoản kéo xuống phần đăng ký để tạo tài khoản.</p>
                    <h5><b>1.1. Đăng ký tài khoản</b></h5>
                    <p>Người dùng điền đầy đủ vào các trường thông tin</p>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/dk.png')} alt="Trang đăng ký" style={{ height: '600px', width: '700px' }} />
                    </div>
                    <h5><b>1.2. Đăng nhập</b></h5>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/dn.png')} alt="Trang đăng nhập" style={{ height: '450px', width: '575px' }} />
                    </div>
                    <p>Người dùng cần nhập đúng "Tên đăng nhập" và "Mật khẩu" đã đăng ký trước đó
                        <br />Giao diện sau khi đăng nhập thành công, tên đăng nhập hiển thị tại góc màn hình.</p>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/dntc.png')} alt="Trang đăng nhập thành công" style={{ height: '400px', width: '575px' }} />
                    </div>
                    <h4><b>2. Các thao tác trên trang</b></h4>
                    <h5><b>2.1. Tìm kiếm sản phẩm</b></h5>
                    <p>Người dùng gõ từ khóa vào ô tìm kiếm, trang web sẽ hiển thị đề xuất các sản phẩm chứa từ khóa có trên trang. Khách hàng nhấn OK/Enter để hiển thị tất cả kết quả tìm kiếm.
                        <br />Ngoài ra, người dùng có thể lọc theo ngành hàng bằng cách nhấn vào mũi tên bên trái ô từ khóa</p>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/timkiem.png')} alt="Thanh tìm kiếm" style={{ height: '100px', width: '575px' }} />
                    </div>
                    <h5><b>2.2. Mua hàng</b></h5>
                    <p>Người mua xem chi tiết sản phẩm, thông tin mô tả và các thông tin công khai của người bán.
                        <br />Để mua sản phẩm, người mua lựa chọn sản phẩm muốn mua và nhấn vào Liên hệ chủ shop hoặc Thêm vào giỏ hàng để liên hệ đặt mua sau.</p>
                    <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>Chi tiết sản phẩm</div>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/sanpham.png')} alt="Trang giỏ hàng" style={{ height: '400px', width: '575px' }} />
                    </div>
                    <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>Giỏ hàng</div>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/giohang.png')} alt="Trang giỏ hàng" style={{ height: '400px', width: '575px' }} />
                    </div>
                    <p>Số điện thoại và các thông tin của người bán sẽ được công khai trên trang, người mua và người bán tự do thỏa thuận.</p>
                </div>
                <h3 style={{ color: 'red' }}><b>B. Hướng dẫn bán hàng</b></h3>
                <div style={{ maxWidth: '100%', wordWrap: 'break-word', fontSize: '18px' }}>
                    <p>Khi tạo tài khoản trên sàn TMĐT Kim Hưng là người dùng đã có quyền tạo gian hàng nông sản thực phẩm trực tuyến, để truy cập gian hàng, di chuyển chuột/chọn vào phần tên đăng nhập trên cùng bên phải màn hình</p>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/gianhang.png')} alt="Trang giỏ hàng" style={{ height: '400px', width: '575px' }} />
                    </div>
                    <p>Chọn phần Quản lý gian hàng, giao diện Thông tin gian hàng sẽ hiển thị, người dùng cần thiết lập thông tin gian hàng, sau đó chọn Thêm sản phẩm</p>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../../assets/img_hdgd/themsanpham.png')} alt="Trang giỏ hàng" style={{ height: '700px', width: '575px' }} />
                    </div>
                    <p>Người bán điền đầy đủ thông tin mô tả sản phẩm và kết thúc bằng Tạo sản phẩm.
                        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img src={require('../../../assets/img_hdgd/tinhtranggiohang.png')} alt="Trang giỏ hàng" style={{ height: '400px', width: '575px' }} />
                        </div>
                        <br />Sàn giao dịch sản phẩm chăn nuôi Lâm Đồng sẽ xem xét và quyết định phê duyệt/hủy bỏ sản phẩm, thời gian phê duyệt tối đa 24h.</p>
                </div>
            </div>
        </div>

    );
}

export default HuongDanGiaoDich;





