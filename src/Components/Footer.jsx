import React from 'react';
import '../CssFolder/Footer.css';
import thisLogo from '../assets/Logo_clear.png';
function Footer() {
    return (
        <div className='main-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                    <p> <img src={thisLogo} id='icon' /></p>
                        <p className='firstp'>업체명 (주)메타플로</p>
                        <p className='firstp'>대표자 김한길</p>
                        <p className='firstp'>사업자 등록번호 190-86-02737</p>
                        <p className='firstp'>통신판매업신고번호 제 2022-서울서초-0797 호</p>
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <h5>
                          <p> CONTACT US</p> 
                        </h5>
                        <p className='he'><i className="bi bi-geo-alt-fill"></i>   서울 서초구 서초대로78길 28 스퀘어큐브 5층 (서초동)</p>
                        <p className='he'><i className="bi bi-telephone-fill"></i>   Call Us: 02-6959-2270</p>
                        <p className='he'><i className="bi bi-envelope"></i>   Email Us: Metaplo545@Gmail.Com</p> 
                        <p className='he'><i className="bi bi-clipboard-data-fill"></i>   Fax 02-8270-2271</p>
                    </div>
                </div>
                <hr></hr>
               
                <div className='footer-bottom'>
                    <p className="text-xs-center">
                        COPYRIGHT &copy;{new Date().getFullYear()} (주)메타플로 ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;