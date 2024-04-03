import React from 'react';

const TrangChu = () => {
    return (
        <div className='main mx-auto'>
            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px'}}></img>

                    <a href='' style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft:'5px', marginRight:'8px' }}>Trang chủ</a>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px'}}></img>

                    <a href='' style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft:'8px'}}>Tất cả sản phẩm</a>  <br />
                </div>


                <h3>Tất cả sản phẩm</h3>
                <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>


                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                </div>
            </div>
        </div>

    );
}

export default TrangChu;





