import React,{useEffect} from 'react';

import { Button } from "react-bootstrap";
import KAKAO from './Kakaomap';
import Footer from './Footer';
import '../CssFolder/Direction.css';
const Direction = () => {
    
    return(
           <div className='container'>
               <div className='row  align-self-center text-center my-3'>
                   <h1>찾아오시는 길</h1>
               </div>
               <div className='row justify-content-around'>
                   
                   <div className='row'>
                       <div className='col-md-6 text-align-center'>
                            <div className='row'>
                                <div className='col-md-2'><p className='Gangjo'>주소</p></div>
                                <div className='col-md-10'><p className='NoGangjo'>서울 서초구 서초대로78길 28, 5층 (주)메타플로</p></div>
                              
                            </div>
                            <div className='row'>
                                <div className='col-md-2'><p className='Gangjo'>전화</p></div>
                                <div className='col-md-10'><p className='NoGangjo'>02-6959-2270</p></div>
                                
                            </div>
                            <hr/>
                            <div className='row'>
                                <p className='Gangjo'>주변 지하철</p>
                            </div>
                            <div className='row'>
                                <p className='NoGangjo'>
                                <ul>
                                    <li>
                                    <span className="hide_text ico_subway ico_subway02"></span>
                                    <a href="https://map.kakao.com/?subwayId=SES0222&amp;from=roughmap" target="_blank">강남역</a>
                                    </li>
                                    
                                    <li>
                                    <span className="hide_text ico_subway ico_subway11"></span>
                                    <a href="https://map.kakao.com/?subwayId=SES0222&amp;from=roughmap" target="_blank">강남역</a>
                                    </li>
                                    <li>
                                    <span className="hide_text ico_subway ico_subway02"></span>
                                    <a href="https://map.kakao.com/?subwayId=SES0222&amp;from=roughmap" target="_blank">역삼역</a>
                                    </li>
                                </ul>
                                </p></div>
                            <hr/>
                            <div className='row'>
                                {/* 여기서부터 주변정류장~5칸 */}
                                <div className='row'> 
                                <p className='Gangjo'>주변 정류장</p>
                                </div>
                                <div className='row'> 
                                    <ul>
                                        <li>
                                            <span className='icon_bus icon_bus1'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS217745&amp;from=roughmap" target="_blank">강남역우리은행</a>

                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus2'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS145845&amp;from=roughmap" target="_blank">강남역나라빌딩앞</a>
                                        </li>
                                     
                                        <li>
                                            <span className='icon_bus icon_bus4'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS70013&amp;from=roughmap" target="_blank">강남역도시에빛</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus5'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS217736&amp;from=roughmap" target="_blank">강남역티월드</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus  icon_bus6'></span>
                                            <a href="https://map.kakao.com/?busStopId=11230641035&amp;from=roughmap" target="_blank">신분당선강남역(중)</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus7'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS470093&amp;from=roughmap" target="_blank">강남역서초현대타워앞</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus8'></span>
                                            <a href="https://map.kakao.com/?busStopId=11220521031&amp;from=roughmap" target="_blank">강남역.삼성전자/강남역하나은행</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus9'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS510456&amp;from=roughmap" target="_blank">신분당선.강남역4번출구</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus10'></span>
                                            <a href="https://map.kakao.com/?busStopId=11220521030&amp;from=roughmap" target="_blank">롯데칠성</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus11'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS114974&amp;from=roughmap" target="_blank">우성아파트사거리</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus12'></span>
                                            <a href="https://map.kakao.com/?busStopId=11220521004&amp;from=roughmap" target="_blank">수협서초지점</a>
                                            
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus13'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS115459&amp;from=roughmap" target="_blank">롯데칠성</a>
                                            
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus14'></span>
                                            <a href="https://map.kakao.com/?busStopId=11220541008&amp;from=roughmap" target="_blank">강남역</a>
                                        </li>
                                        <li>
                                            <span className='icon_bus icon_bus15'></span>
                                            <a href="https://map.kakao.com/?busStopId=BS455661&amp;from=roughmap" target="_blank">삼성딜라이트</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='row'>
                                    <p className='Gangjo'>주변 버스</p>
                                </div>
                                <div className='row'>
                                    <p className='NoGangjo'>
                                        <ul className='wrap_list'>
                                            <li>
                                                <span className='icon_busi icon_buss'></span>
                                                <span className='txt'>
                                            
                                                </span>
                                            </li>
                                            <li>
                                                <span className='icon_busi icon_buss2'>시외</span>
                                                <span className='txt'>
                                                <span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B13336&amp;busStopId=BS217745&amp;from=roughmap" target="_blank">700</a><span class="txt_bar hide_text">&nbsp;</span></span>
                                                <span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B60667&amp;busStopId=11230641035&amp;from=roughmap" target="_blank">8008</a></span>
                                                </span>
                                            </li>
                                            
                                            <li>
                                                <span className='icon_busi icon_buss3'>광역</span>
                                                <span className='txt'>
                                                    <span class="txt"><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B15280&amp;busStopId=BS145845&amp;from=roughmap" target="_blank">M5422</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B59879&amp;busStopId=BS145845&amp;from=roughmap" target="_blank">M5443</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B62241&amp;busStopId=BS145845&amp;from=roughmap" target="_blank">M5443(예약)</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B25202&amp;busStopId=BS70013&amp;from=roughmap" target="_blank">9500</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B6954&amp;busStopId=BS70013&amp;from=roughmap" target="_blank">9501</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B25206&amp;busStopId=BS70013&amp;from=roughmap" target="_blank">9802</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B62385&amp;busStopId=BS70013&amp;from=roughmap" target="_blank">M6450</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=1100091033&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">9404</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=1100091009&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">9408</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B70511&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">9409</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B2300&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M4403</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B51085&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M4434</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B63890&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M4448</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B67932&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M4449</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B53913&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M5438</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B26199&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M6427</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B3166&amp;busStopId=BS69919&amp;from=roughmap" target="_blank">M7412</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B28423&amp;busStopId=BS217736&amp;from=roughmap" target="_blank">9711</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=3761100001&amp;busStopId=BS470093&amp;from=roughmap" target="_blank">9100</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=3761100002&amp;busStopId=BS470093&amp;from=roughmap" target="_blank">9200</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B25107&amp;busStopId=BS470093&amp;from=roughmap" target="_blank">9201</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B25090&amp;busStopId=BS470093&amp;from=roughmap" target="_blank">9300</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B25100&amp;busStopId=BS470093&amp;from=roughmap" target="_blank">M6405</a><span class="txt_bar hide_text">&nbsp;</span></span><span class="txt_item"><a href="https://map.kakao.com/?busInfoId=B9747&amp;busStopId=BS470093&amp;from=roughmap" target="_blank">M6410</a></span></span>
                                                </span>
                                            </li>
                                        </ul>

                                    </p>
                                    
                                </div>
                            </div>
                       </div>
                       <div className='col-md-6'>
                          <KAKAO />
                       </div>
                   </div>
                
               </div>
               <hr></hr>
                <div className='row'>
                    <Footer />
                </div>
            
           </div>
               

      
    )
}

export default Direction
