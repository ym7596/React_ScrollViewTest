import React from 'react';
import { useTranslation } from 'react-i18next';

const First = () => {
    const { t } = useTranslation();
    return(
        <div className='container'>
            {/* <h1>{t("Title")}</h1> */}
            <h1>{t("F_Docu")}</h1>
            <h1>{t("F_Docu2")}</h1>
            <br/>
            <h1>{t("F_Title")}</h1>
        </div>
        
    )
}

export default First
