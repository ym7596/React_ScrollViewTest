import React from 'react';

import thisimg from '../assets/2.jpg';
import '../CssFolder/SidContent.css'
const SideC2 = () => {

    return(
        <div className='container'>
        <div className="card" id='card1'>
            <div className="row">
                <div className="col-md-6 col-xs-2 col-sm-3">
                    <img src={thisimg} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-6 col-xs-10 col-sm-9">
                <div className="card-body">
                    <h5 className="card-title">이제는 가상세계에서 직접 입고 구매!</h5>
                    <p className="card-text">
                        
                    회원제로 운영하던 BNPLO가 가상 세계 백화점을 구현하면서 많은
                    고객들이 몰려들고 있습니다.<br/>
                    BNPLO의 결제서비스는 선구매 후결제 시스템으로 많은 MZ세대
                    들이 이용중이며, 다양한 카테고리의 상품을 보유하고 있기때문에
                    더 다양한 연령대의 고객들이 유입되고 있으며, 나아가 가상 백화점에서는
                    구매할 상품을 직접 착용 및 구현 해본 후 구매의사를 결정
                    할 수 있다는 점에서 많은 사람들에게 고평가되고있습니다.
                    
                    </p>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default SideC2
