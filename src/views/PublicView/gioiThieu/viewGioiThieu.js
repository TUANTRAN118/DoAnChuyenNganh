import React from 'react';

const GioiThieu = () => {
    return (
        <div className='main mx-auto'>
            <div className='container-fluid' style={{ maxWidth: '1300px', marginTop: '180px', overflow: 'hidden' }}>

                <div className='col d-flex align-items-center mb-5'>
                    <img src={require('../../../assets/img_TatCaSanPham/ic_home.png')} alt='Logo' style={{ height: '12px', width: '14px' }}></img>

                    <a href='' style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '5px', marginRight: '8px' }}>Trang chủ</a>  <br />

                    <img src={require('../../../assets/img_TatCaSanPham/ic_arrow.png')} alt='Logo' style={{ height: '10px', width: '8px' }}></img>

                    <a href='' style={{ fontSize: '15px', textDecoration: 'none', color: '#888', marginLeft: '8px' }}>Giới thiệu</a>  <br />
                </div>




                <h3>Giới thiệu</h3>


                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://th.bing.com/th/id/OIP.frLVzGeyMzZTde0hxnEX0QHaDU?w=333&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.4YXBF7u7GcrPF1qQ34ma-QHaDR?w=332&h=154&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.gsQssTH0Pokz9dXiOsx-uAHaCL?w=332&h=103&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>










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

    );
}

export default GioiThieu;





