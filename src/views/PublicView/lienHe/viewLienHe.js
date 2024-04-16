import React from 'react';
import { Link } from 'react-router-dom';


const LienHe = () => {
    return (
        <div className='main mx-auto'>
            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px', marginBottom: '2px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</Link>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <Link to={"/"} style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Liên hệ</Link>  <br />
                </div>



                <h2 className='text-center'>Liên hệ</h2>
                <div class="container p-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label"> Họ và Tên </label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label"> Số điện thoại </label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inpuemail" class="form-label"> Email </label>
                            <input type="email" class="form-control" id="inputemail" placeholder="@gmail.com" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label"> Địa chỉ </label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1 Phù Đổng" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label"> Địa chỉ khác </label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Căn hộ, tầng, phòng" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label"> Thành phố </label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label"> Tình trạng </label>
                            <select id="inputState" class="form-select">
                                <option selected>Chọn...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div id="mess" class="col-md-4">
                            <label for="inputState" class="form-label"> Lời nhắn </label>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                    style={{height: '100px'}}></textarea>
                                <label for="floatingTextarea2"> Message </label>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12 text-center mb-5">
                            <button type="submit" class="btn btn-primary">SEND</button>
                        </div>
                    </form>
                </div>

            </div>
        </div >

    );
}

export default LienHe;





