import React from 'react';
import { useTranslation } from 'react-i18next';
import '../CssFolder/Second.css'

const Second = () => {
    const { t } = useTranslation();
    return(
        <div className='container'>
            <div className='col-md-6'>
                <div className=''>
                    <h2>BNPLO</h2>
                </div>
                <br/>
                <div className='box222'>
                    
                        먼저 구매하고 나중에 결제하자!<br/>
                        회원제 온라인 쇼핑몰 뿐만 아니라<br/>
                        사람들과 함께 사이버 백화점에서<br/>
                        쇼핑을 할 수 있으며,<br/>
                        VR을 통해 직접 구매할 상품을<br/>
                        착용 및 사용 후 구매할 수 있습니다.
                        <h3><p>{t("Second")}
                    </p></h3>
                        
                </div>
            </div>
           <div className='col-md-6'>  </div>
        </div>
        
    )
}

export default Second
