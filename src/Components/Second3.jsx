import React from 'react';
import { useTranslation } from 'react-i18next';
import '../CssFolder/Second.css'

const Second3 = () => {
    const { t } = useTranslation();
    return(
        <div className='container'>
            <div className='col-md-6'>
                <div className=''>
                    <h1>METACITY</h1>
                </div>
                <br/>
                <div className='box13'>
                    <h5>
                        시간과 공간의 제약을 받지 않고<br/>
                        각종 문화 생활과 콘텐츠 미디어 등을<br/>
                        즐길 수 있는 하나의 도시가 형성되며,<br/>
                        당신이 상상하는 것이 무엇이든<br/>
                        메타플로 시티의 가상 공간안에서<br/>
                        함께 즐길 수 있도록 끝없이 발전하는<br />
                        가상 세계 플랫폼이 되겠습니다.
                        
                        </h5>
                </div>
            </div>
           <div className='col-md-6'>  </div>
        </div>
        
    )
}

export default Second3
