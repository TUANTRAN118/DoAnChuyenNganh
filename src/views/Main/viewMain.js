import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../../components/Header/compHeader'
import Footer from '../../components/Footer/compFooter'
import TrangChu from '../PublicView/trangChu/viewTrangChu'
import GioiThieu from '../PublicView/gioiThieu/viewGioiThieu'
import TinTuc from '../PublicView/tinTuc/viewTinTuc'
import HuongDanGiaoDich from '../PublicView/huongDanGiaoDich/viewHuongDanGiaoDich'
import LienHe from '../PublicView/lienHe/viewLienHe'
import TatCaSanPham from '../PublicView/tatCaSanPham/viewTatCaSanPham'




function Main() {
  return (

    <Router>
      <Header />
      <Routes>

        <Route index element={<TrangChu />} />
        <Route exact path='/trang-chu' element={<TrangChu />} />
        <Route exact path='/tat-ca-san-pham' element={<TatCaSanPham />} />
        <Route exact path='/gioi-thieu' element={<GioiThieu />} />
        <Route exact path='/huong-dan-giao-dich' element={<HuongDanGiaoDich />} />
        <Route exact path='/tin-tuc' element={<TinTuc />} />
        <Route exact path='/lien-he' element={<LienHe />} />
        
      </Routes>
      <Footer />
    </Router>




  );
}

export default Main;
