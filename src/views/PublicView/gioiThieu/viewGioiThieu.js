import React from 'react';
import { Link } from 'react-router-dom';


const GioiThieu = () => {

    const imageUrl = require('../../../assets/img_gt/gt1.png');
    const backgroundUrl = require('../../../assets/img_gt/Rectangle.png');

    return (


        <div>
            <div className='main mx-auto'>
                <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '200px', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>


                        <ul class="nav">
                            <li class="nav-item">
                                <h1 style={{ fontSize: "80px", color: "#001251", marginRight: "30px" }}> <b>LDFarm</b>  </h1>
                            </li>
                            <li class="nav-item">
                                <ul style={{ listStyleType: "none", fontSize: "30px" }}>
                                    <li><b>SÀN GIAO DỊCH SẢN PHẨM CHĂN NUÔI</b></li>
                                    <li><b>UY TÍN SỐ MỘT TẠI LÂM ĐỒNG</b></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    backgroundImage: `url(${backgroundUrl})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '270px',
                    width: '270px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ul style={{ listStyleType: "none", fontSize: "35px", marginTop: "35px", marginRight: "7%", textAlign: "center" }}>
                        <li><b>MIỄN PHÍ</b></li>
                        <li><b>100%</b></li>
                    </ul>
                </div>
                <div style={{ marginLeft: "10%" }}>
                    <b style={{ fontSize: "40px" }}>Tham gia bán hàng<br /></b>
                    <b style={{ fontSize: "80px" }}>Hoàn toàn miễn phí</b>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '180px' }}>
                <ul style={{ padding: '10px', flex: 1 }}>
                    <li style={{ listStyle: 'none', fontSize: '18px' }}>
                        <div style={{ display: 'flex' }}>
                            <img src={require('../../../assets/img_gt/check-mark-icon.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                            <p style={{ margin: '10px' }}>Miễn phí mở gian hàng</p>
                        </div>
                    </li>
                    <li style={{ listStyle: 'none', fontSize: '18px' }}>
                        <div style={{ display: 'flex' }}>
                            <img src={require('../../../assets/img_gt/check-mark-icon.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                            <p style={{ margin: '10px' }}>Miễn phí quảng cáo, thu hút khách hàng</p>
                        </div>
                    </li>
                </ul>
                <ul style={{ padding: '10px', flex: 1 }}>
                    <li style={{ listStyle: 'none', fontSize: '18px' }}>
                        <div style={{ display: 'flex' }}>
                            <img src={require('../../../assets/img_gt/check-mark-icon.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                            <p style={{ margin: '10px' }}>Miễn phí đào tạo kinh doanh trực tuyến</p>
                        </div>
                    </li>
                    <li style={{ listStyle: 'none', fontSize: '18px' }}>
                        <div style={{ display: 'flex' }}>
                            <img src={require('../../../assets/img_gt/check-mark-icon.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                            <p style={{ margin: '10px' }}>Có cơ hội tiếp cận thị trường quốc tế</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='main mx-auto'>
                <div className='container-fluid' style={{ maxWidth: '1300px', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '100%', wordWrap: 'break-word', fontSize: '18px' }}>
                        <b style={{ fontSize: '25px', color: '#61886C' }}>Sản phẩm</b>
                        <p style={{ margin: '30px 0px' }}>Chúng tôi luôn lấy chất lượng sản phẩm làm giá trị cốt lõi cho sự phát triển của mình, cam kết đưa ra thị trường những sản phẩm có chất lượng cao và đảm bảo an toàn cho vật nuôi và an toàn cho cộng đồng</p>

                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require('../../../assets/img_gt/suabo.png')} className="d-block w-100" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../../../assets/img_gt/thit.png')} className="d-block w-100" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../../../assets/img_gt/camgiasuc.png')} className="d-block w-100" alt="Third slide" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#009F10', margin: '0px 80px' }}>
                            <div style={{ display: 'flex' }}>
                                <img src={require('../../../assets/img_gt/like.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{ margin: '10px' }}>Giá rẻ bất ngờ</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img src={require('../../../assets/img_gt/tick.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{ margin: '10px' }}>Chất lượng như mơ</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img src={require('../../../assets/img_gt/delivery.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{ margin: '10px' }}>Giao hàng thần tốc</p>
                            </div>
                        </div>

                        <b style={{ fontSize: '25px', color: '#61886C' }}>Sứ mệnh</b>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ height: '300px', width: '400px' }}>
                                    <p style={{ margin: '100px 20px' }}>
                                        <span>Cung cấp một{' '}
                                            <span style={{ color: '#FFAA04' }}>kênh đầu tư an toàn, nhanh chóng, minh bạch và mang lại lợi nhuận cao</span>
                                        </span>
                                    </p>
                                </div>
                                <img src={require('../../../assets/img_gt/goal.png')} alt='' style={{ height: '300px', width: '400px' }}></img>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={require('../../../assets/img_gt/ranking 1.png')} alt='' style={{ height: '300px', width: '400px' }}></img>
                                <div style={{ height: '300px', width: '400px' }}>
                                    <p style={{ margin: '150px 20px' }}>
                                        <span>Trở thành một trong những{' '}
                                            <span style={{ color: '#FFAA04' }}>website hàng đầu</span> về lĩnh vực{' '}
                                            <span style={{ color: '#FFAA04' }}>tư vấn đầu tư giao dịch phái sinh hàng hóa</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className='mb-5' style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ height: '300px', width: '400px' }}>
                                    <p style={{ margin: '100px 20px' }}>
                                        <span>Phát triển thông qua{' '}
                                            <span style={{ color: '#FFAA04' }}>hợp tác</span>dựa trên nền tảng công nghệ hiện đại, phương thức quản trị mới nhằm tạo ra sự tăng trưởng sáng tạo, ổn định và bền vững
                                        </span>
                                    </p>
                                </div>
                                <img src={require('../../../assets/img_gt/strategy.png')} alt='' style={{ height: '300px', width: '400px' }}></img>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default GioiThieu;





