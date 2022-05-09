import React from 'react';

import {Card,Button} from 'react-bootstrap';
import '../CssFolder/Sids.css'
const Side1 = () => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 align-self-center text-center '>
                <Card >
                    <Card.Img variant="top" src="/src/static/android-icon-96x96.png" />
                    <Card.Body>
                        <Card.Title>메타플로의 가상현실세계가 뜬다!</Card.Title>
                        
                            <p id='ptext'>
                        0000년 00월 00일 메타플로에서는 AI 플랫폼 구축과 NPC생성,
                        백화점, 문화생활,영상 플랫폼, MMORPG등 다양한 문화생활의
                        플랫폼 '메타시티'를 운영하며, 이용할 수 있는 서비스는 VR 백화
                        점과 라이브 쇼핑,옥외광고, 몬스터 출현 등 다양하게 마련되어있
                        다. VR백화점인 BNPLO는 선구매 후결제방식으로 진행되고 있
                        으며, 백화점의 안내 가이드 NPC도 구축되어있기때문에 처음 접
                        하는 유저들도 쉽게 접근이 용이하도록 만들었으며, 쇼핑은 VR..
                        </p>
                        
                        
                    </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 align-self-center text-center '>
                <Card>
                    <Card.Img variant="top" src="/src/static/android-icon-192x192.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 align-self-center text-center '>
                    <Card>
                        <Card.Img variant="top" src="/src/static/android-icon-192x192.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
           
            </div>
          
      
        </div>
        
    )
}

export default Side1
