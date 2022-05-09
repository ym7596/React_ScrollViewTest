import React,{Component} from 'react';
import Cardi from './CardUI';

import img1 from '../assets/testimg1.jpg';
import img2 from '../assets/testimg2.png';
import img3 from '../assets/testimg3.jpg';
class Cards extends Component {
    render() {
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 p-5'>
                        <Cardi imgsrc={img1} title = '메타플로의 가상현실세계가 뜬다!'/>
                    </div>
                    <div className='col-md-4 col-sm-6 p-5'>
                        <Cardi imgsrc={img2} title = '이제는 가상세계에서 직접 입고 구매!'/>
                    </div>
                    <div className='col-md-4 col-sm-6 p-5'>
                        <Cardi imgsrc={img3} title = '영상부터 게임까지 즐기는 문화 플랫폼!'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;