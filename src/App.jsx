import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import  {Routes, Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Fullpage from './Fullpage';
import thisLogo from './assets/Logo_clear.png';
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
import SideC1 from './Components/SideC1';
import SideC2 from './Components/SideC2';
import SideC3 from './Components/SideC3';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Footer from './Components/Footer';
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
 
 constructor(props){
   super(props);
   this.state = {show:false};
   this.onLeave = this.onLeave.bind(this);
 }
  onLeave(origin, destination, direction) {
   // console.log('onLeave', { origin, destination, direction });
    this.setState({show:!this.state.show});
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
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="white" >
    <Container fluid>
    <Navbar.Brand href="#home"><img src={thisLogo} id='icon'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        
           <Nav.Link onClick={() => this.moveSectionWhere(1)}>콘텐츠</Nav.Link>
           <Nav.Link onClick={() => this.moveSectionWhere(1)}>비즈니스</Nav.Link>
           <Nav.Link  onClick={() => this.moveSectionWhere(1)}>가이드</Nav.Link>
           <Nav.Link  onClick={() => this.moveSectionWhere(6)}>지원</Nav.Link>
      </Nav>
      <Nav>
      <NavDropdown title="언어" id="collasible-nav-dropdown">
          <NavDropdown.Item><BTN name = "ko" title = "한국어"> dd</BTN></NavDropdown.Item>
          <NavDropdown.Item><BTN name = "en" title = "English"></BTN></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
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
          anchors={['firstPage', 'secondPage', 'thirdPage','fourthPage']}
          
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
          <Bounce  right when={this.state.show}>
            <Second />
            </Bounce >
          </div>
          <div className="section" id='section2'>
          <Bounce  left when={!this.state.show}>
            <Second2 />
            </Bounce >
          </div>
          <div className="section" id='section2'>
          <Bounce  right when={this.state.show}>
            <Second3 />
            </Bounce >
          </div>
          <div className="section" id='sectioncard'>

              <div className='slide'>
                  <SideC1/>
              </div>
              <div className='slide'>
                  <SideC2/>
              </div>
              <div className='slide'>
                  <SideC3/>
              </div>
          </div>
         
          <div className='section' id='sectionfoot'>          
                 
                <Direction />             
               
          </div>
          <div className='section'>
            <Footer />
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