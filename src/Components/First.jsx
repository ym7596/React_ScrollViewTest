import React from 'react';
import { useTranslation } from 'react-i18next';

const First = () => {
    const { t } = useTranslation();
    return(
        <div className='container'>
            {/* <h1>{t("Title")}</h1> */}
            <h1>당신이 꿈꾸어왔던 모든 것</h1>
            <h1>시간과 공간을 초월한 만남.</h1>
            <br/>
            <h1>METAPLO</h1>
        </div>
        
    )
}

export default First
