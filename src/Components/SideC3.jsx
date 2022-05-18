import React from 'react';

import thisimg from '../assets/33.jpg';
import '../CssFolder/SidContent.css'
const SideC3 = () => {

    return(
        <div className='container'>
        <div className="card" id='card1'>
            <div className="row">
                <div className="col-md-6 col-xs-2 col-sm-3">
                    <img src={thisimg} className="img-fluid rounded-start"  alt="..." />
                </div>
                <div className="col-md-6 col-xs-10 col-sm-9">
                <div className="card-body">
                    <h5 className="card-title">영상부터 게임까지 즐기는 문화 플랫폼!</h5>
                    <p className="card-text">
                    메타플로가 운영하고 있는 메타시티에서는 접속과 동시에 몬스터
                    등장이나 이벤트 등 이슈 진행을 하며, 나이불문 모든 유저들이 함께 즐길
                    수 있는 하나의 가상 현실 세계를 구현하여 높은
                    접속률을 보이고 있습니다. 이러한 게임에 관련된 이슈뿐만 아니라
                    기존의 타 영상 플랫폼들을 위협할만한 라이브 커머스 및 영상
                    플랫폼의 운영은 누구나 쉽게 크리에이티비티를 발휘할 수 있고, 그 밖에
                    추모관에 관련된 이벤트 관련 서비스를 진행하면서
                    많은 사랑을 받았습니다.
                    </p>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SideC3
