import React,{Component} from 'react';
import Cardi from './CardUI';

import img1 from '../assets/11.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/33.jpg';
class Cards extends Component {
    render() {
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='card-deck'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6 col-xs-3 p-5'>
                            
                            <Cardi imgsrc={img1}  class="card-img-top embed-responsive-item" title = '메타플로의 가상현실세계가 뜬다!'/>
                            
                        </div>
                        <div className='col-md-4 col-sm-6 col-xs-3 p-5'>
                            <Cardi imgsrc={img2}  class="card-img-top embed-responsive-item" title = '이제는 가상세계에서 직접 입고 구매!'/>
                        </div>
                        <div className='col-md-4 col-sm-6 col-xs-3 p-5'>
                            <Cardi imgsrc={img3}  class="card-img-top embed-responsive-item" title = '영상부터 게임까지 즐기는 문화 플랫폼!'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;