import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import '../src/App.css';

import App from './App';
import Side1 from './Components/Side1';
import Side2 from './Components/Side2';
import First from './Components/First';
import Second from './Components/Second';
import { Button } from "react-bootstrap";
import Header from './Components/Header';
const anchors = ["firstPage", "secondPage", "thirdPage","fourthPage"];
function test(){
 
  const getData = (number) => {
      setNumber(number);
    }
    const tete = 1;
    return tete;
}

const Fullpage = (props) => (
  
  <ReactFullpage
  
    //fullpage options
    
    debug = {false}
    licenseKey = {'77DAE9DB-92D74E11-801E1995-CED563A4'}
    scrollingSpeed = {1000} /* Options here */
    
    scrollOverflow={true}
    cards={true}
    
    render={({ state, fullpageApi }) => {
      function tltl(){
        const [number, setNumber] = useState(0)
        fullpageApi.moveTo(Number(props.name))
      }
      return (
          
        <ReactFullpage.Wrapper>
        
            <div id='wrapper'>
            <div className='section' id='section11'>
             {props.name}
             
            </div>
          <div className="section" id='section2'>
            <Second />
          </div>
          <div className="section" id='section1'>
              <div className='slide'>
                  <Side1/>
              </div>
              <div className='slide'>
                  <Side1/>
              </div>
            
          </div>
          <div className="section align-self-center text-center" id='section2'>
            <p>빈 페이지. 레이아웃은 위와 동일</p>
            <Button variant='primary' onClick={() => fullpageApi.moveTo(Number(props.name))}>
              Click me to move down  
            </Button>
          </div>
          <div className='section align-self-center text-center' id='section2'>
            
              
             <h1><p>지도와 footer가 들어갈 공간 : </p></h1>
          </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage;
//ReactDOM.render(<Fullpage />, document.getElementById('react-root'));