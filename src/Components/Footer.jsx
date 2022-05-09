import React from 'react';
import '../CssFolder/Footer.css';

function Footer() {
    return (
        <div className='main-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <p> <img src="/src/static/android-icon-72x72.png" /></p>
                        <p className='firstp'>업체명 (주)메타플로</p>
                        <p className='firstp'>대표자 김한길</p>
                        <p className='firstp'>사업자 등록번호 190-86-02737</p>
                        <p className='firstp'>통신판매업신고번호 제 2022-서울서초-0797 호</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>
                            <p>MY ACCOUNT</p>
                        </h5>
                        
                            <p className='he'>회사소개</p>
                            <p className='he'>인재채용</p>
                            <p className='he'>제휴제안</p>
                            <p className='he'>이용약관</p>
                            <p className='he'>개인정보처리방침</p>
                            <p className='he'>청소년보호정책</p>
                            <p className='he'>고객센터</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>
                          <p> CONTACT US</p> 
                        </h5>
                        <p className='he'><i class="bi bi-geo-alt-fill"></i>   서울 서초구 서초대로78길 28 스퀘어큐브 5층 (서초동)</p>
                        <p className='he'><i class="bi bi-telephone-fill"></i>   Call Us: 02-6959-2270</p>
                        <p className='he'><i class="bi bi-envelope"></i>   Email Us: Metaplo545@Gmail.Com</p> 
                        <p className='he'><i class="bi bi-clipboard-data-fill"></i>   Fax 02-8270-2271</p>
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