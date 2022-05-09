import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import  {Routes, Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Fullpage from './Fullpage';

import '../src/App.css';
import Headerr from './Components/Header';
import ReactFullpage from '@fullpage/react-fullpage';
import Side1 from './Components/Side1';
import Side2 from './Components/Side2';
import First from './Components/First';
import Second from './Components/Second';
import Second2 from './Components/Second2';
import Second3 from './Components/Second3';
import { Navbar, Offcanvas, Form,
  FormControl,
  Nav,Container, Button, Row, Col,NavDropdown } from "react-bootstrap";
import Header from './Components/Header';
import Direction from './Components/Direction';
import '../src/lang/i18n';
import { useTranslation } from "react-i18next";
import BTN from './Components/LangBtn';
const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
  * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  */
};

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class App extends React.Component {
 

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }



  moveSectionDown() {
    fullpage_api.moveSectionDown();
  }
  moveSectionWhere(num) {
    fullpage_api.moveTo(Number(num));
  }
  render() {
  

    const Menu = () => (
      <div
      className="navbar"
      style={{
        height: '80px',
		display:'block',
		width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 100,
        background: '#ffffff',
        padding: '0px 10px 0 0'
        }}
      >
        <Navbar>
          <Navbar.Brand href='/'><img src="/src/static/android-icon-72x72.png" /></Navbar.Brand>
        <Navbar.Collapse className='justify-content-start' >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a onClick={() => this.moveSectionWhere(2)}>  콘텐츠  </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
          <a  onClick={() => this.moveSectionWhere(5)}>  비즈니스  </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a  onClick={() => this.moveSectionWhere(5)}>  가이드  </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a  onClick={() => this.moveSectionWhere(5)}>  지원  </a>
          
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end' >
        <NavDropdown title="언어" id="basic-nav-dropdown">
          <NavDropdown.Item><BTN name = "ko" title = "한국어"> dd</BTN></NavDropdown.Item>
          <NavDropdown.Item><BTN name = "en" title = "English"></BTN></NavDropdown.Item>
          <NavDropdown.Item>기타</NavDropdown.Item>
          
        </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */

          // Required when using extensions
          pluginWrapper={pluginWrapper}

          // fullpage options
          licenseKey={'77DAE9DB-92D74E11-801E1995-CED563A4'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          
          onLeave={this.onLeave.bind(this)}
          
          render={comp => (
            <ReactFullpage.Wrapper>
              {/* {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <h1>{text}</h1>
                </div>
              ))} */}
              <div id='wrapper'>
            <div className='section' id='section1'>
             <First />
             
            </div>
          <div className="section" id='section2'>
            <Second />
          </div>
          <div className="section" id='section2'>
            <Second2 />
          </div>
          <div className="section" id='section2'>
            <Second3 />
          </div>
          <div className="section" id='sectioncard'>
              <div className='slide'>
                  <Side2/>
              </div>
              <div className='slide'>
                  <Side1/>
              </div>
            
          </div>
         
          <div className='section' id='sectionfoot'>          
                 
                <Direction />             
               
          </div>
          </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}
export default App;