import React from 'react';

const TrangChu = () => {
    const imageTT1Url = require('../../../assets/img_TinTuc/tt1.png');

    return (
        <div className='main mx-auto'>
            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '200px', overflow: 'hidden' }}>
                <h3><b>Tin tức nổi bật</b></h3>
                <div style={{ margin:'10px 0px',width:'400px', height:'5px', backgroundColor:'black',borderRadius:'5px' }}/>
                <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
                    <div style={{ width: '100%', height:'500px' ,display:'flex',fontSize:'18px' }}>
                        <div style={{ flex:'2' ,marginRight:'100px' ,backgroundImage: `url(${imageTT1Url})`, backgroundSize: 'cover' , height: '450px', width: '100%',}}>
                            <div style={{ width: '100%' ,height:'100px',marginTop:'300px' , backgroundColor:'rgba(217, 217, 217, 0.4)'}}>
                                <div style={{ display: 'flex', color:'white'}}>
                                    <img src={require('../../../assets/img_TinTuc/candela.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                    <p style={{ margin: '10px' }}>15/03/2024</p>
                                </div>
                                <h5 style={{ color:'white', marginLeft: '10px'}}><b>Giá bò thương phẩm tăng 2 - 3 triệu đồng/con</b></h5>
                            </div>
                        </div>
                        <div class="card" style={{ width: '18rem' ,height:'450px' , flex:'1', backgroundColor:'rgba(217, 217, 217, 0.35)', borderRadius:'20px' }}>
                            <img src={require('../../../assets/img_TinTuc/tt2.png')} class="card-img-top" alt="..."/>
                                <div style={{ display: 'flex'}}>
                                    <img src={require('../../../assets/img_TinTuc/candela.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                    <p style={{margin: '10px' }}>15/03/2024</p>
                                </div>
                            <div class="card-body">
                                <h5 class="card-title"><b>Sau Tết, thị trường lợn, gà giống ở Nghệ An sôi động</b></h5>
                                <p class="card-text">Sau Tết là thời điểm người chăn nuôi bước vào chu kỳ đầu tư mới của một năm, do đó, nhu cầu về con giống cũng gia tăng. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3><b>Tin tức liên quan</b></h3>
                <div style={{ margin:'10px 0px',width:'400px', height:'5px', backgroundColor:'black',borderRadius:'5px' }}/>
                <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
                    <div style={{ width: '100%',fontSize:'18px', display:'flex', margin:'20px 0px', backgroundColor:'rgba(217, 217, 217, 0.35)', borderRadius:'10px'}}>
                        <div style={{ flex:'1' }}>
                            <img src={require('../../../assets/img_TinTuc/tt3.png')} alt="" style={{ height: '200px', width: '350px'}} />
                        </div>
                        <div style={{ flex:'2' , marginLeft:'20px' }}>
                            <div style={{ display: 'flex'}}>
                                <img src={require('../../../assets/img_TinTuc/candela.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{margin: '10px' }}>10/03/2024</p>
                            </div>
                            <h5 ><b>Sau Tết, thị trường lợn, gà giống ở Nghệ An sôi động</b></h5>
                            <p>Sau Tết là thời điểm người chăn nuôi bước vào chu kỳ đầu tư mới của một năm, do đó, nhu cầu về con giống cũng gia tăng. </p>
                        </div>
                    </div>
                    <div style={{ width: '100%',fontSize:'18px', display:'flex', margin:'20px 0px', backgroundColor:'rgba(217, 217, 217, 0.35)', borderRadius:'10px'}}>
                        <div style={{ flex:'1' }}>
                            <img src={require('../../../assets/img_TinTuc/tt4.png')} alt="" style={{ height: '200px', width: '350px'}} />
                        </div>
                        <div style={{ flex:'2' , marginLeft:'20px' }}>
                            <div style={{ display: 'flex'}}>
                                <img src={require('../../../assets/img_TinTuc/candela.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{margin: '10px' }}>07/03/2024</p>
                            </div>
                            <h5 ><b>Chuyển đổi số, cải thiện hiệu quả chăn nuôi</b></h5>
                            <p>Ứng dụng công nghệ số và khoa học kỹ thuật hiện đại vào chăn nuôi tại Hải Phòng cho hiệu quả rõ rệt, giúp tăng năng suất lao động, bảo đảm an toàn sinh học.</p>
                        </div>
                    </div>
                    <div style={{ width: '100%',fontSize:'18px', display:'flex', margin:'20px 0px', backgroundColor:'rgba(217, 217, 217, 0.35)', borderRadius:'10px'}}>
                        <div style={{ flex:'1' }}>
                            <img src={require('../../../assets/img_TinTuc/tt5.png')} alt="" style={{ height: '200px', width: '350px'}} />
                        </div>
                        <div style={{ flex:'2' , marginLeft:'20px' }}>
                            <div style={{ display: 'flex'}}>
                                <img src={require('../../../assets/img_TinTuc/candela.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{margin: '10px' }}>11/02/2024</p>
                            </div>
                            <h5 ><b>Phủ sóng vacxin là yếu tố tiên quyết phòng, chống dịch bệnh</b></h5>
                            <p>Quy mô tổng đàn thuộc tốp đầu cả nước, tỷ lệ nông hộ chiếm phần nhiều, vacxin tiêm phòng cho vật nuôi còn hạn chế tựu chung là áp lực lớn của Nghệ An.</p>
                        </div>
                    </div>
                    <div style={{ width: '100%',fontSize:'18px', display:'flex', margin:'20px 0px', backgroundColor:'rgba(217, 217, 217, 0.35)', borderRadius:'10px'}}>
                        <div style={{ flex:'1' }}>
                            <img src={require('../../../assets/img_TinTuc/tt6.png')} alt="" style={{ height: '200px', width: '350px'}} />
                        </div>
                        <div style={{ flex:'2' , marginLeft:'20px' }}>
                            <div style={{ display: 'flex'}}>
                                <img src={require('../../../assets/img_TinTuc/candela.png')} alt='' style={{ height: '35px', width: '35px', margin: '8px' }}></img>
                                <p style={{margin: '10px' }}>10/01/2024</p>
                            </div>
                            <h5 ><b>Trang trại nuôi bồ câu Pháp khép kín, doanh thu mỗi tháng 2 tỷ đồng</b></h5>
                            <p>KHÁNH HÒA Trang trại nuôi bồ câu Pháp khép kín của Hợp tác xã Chăn nuôi và sản xuất Quốc Anh (tỉnh Khánh Hòa) có quy mô hàng đầu cả nước, doanh thu hơn 2 tỷ đồng/tháng.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TrangChu;





