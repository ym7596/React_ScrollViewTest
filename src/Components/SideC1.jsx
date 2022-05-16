import React from 'react';

import thisimg from '../assets/11.jpg';
import '../CssFolder/SidContent.css'
const SideC1 = () => {

    return(
        <div className='container'>
            <div className="card" id='card1'>
                <div className="row">
                    <div className="col-md-6 col-xs-2 col-sm-3">
                        <img src={thisimg} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-6 col-xs-10 col-sm-9">
                    <div className="card-body">
                        <h5 className="card-title">메타플로의 가상현실세계가 뜬다!</h5>
                        <p className="card-text">
                        0000년 00월 00일 메타플로에서는 AI 플랫폼 구축과 NPC생성,
                        백화점, 문화생활,영상 플랫폼, MMORPG등 다양한 문화생활의
                        플랫폼 '메타시티'를 운영하며, 이용할 수 있는 서비스는 VR 백화
                        점과 라이브 쇼핑,옥외광고, 몬스터 출현 등 다양하게 마련되어있
                        다. VR백화점인 BNPLO는 선구매 후결제방식으로 진행되고 있
                        으며, 백화점의 안내 가이드 NPC도 구축되어있기때문에 처음 접
                        하는 유저들도 쉽게 접근이 용이하도록 만들었으며, 쇼핑은 VR..
                        </p>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SideC1
