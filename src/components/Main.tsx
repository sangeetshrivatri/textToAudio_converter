import React from 'react';
import { Header,Container, Divider, Image, } from 'semantic-ui-react'
import  './Main.css'
import SubComponent from './SubComponent';
import SubComponentCopy from './SubComponentCop';

function Main() {
  return (
    <div className="Main">
       <Container textAlign='center' text>
    <Header className="heading" textAlign='center' as='h2'>Article </Header>
    <Image size='big' centered src='https://img.freepik.com/free-vector/sound-wave-with-imitation-sound-audio-identification-technology_106065-64.jpg' />
     <Divider hidden  />
     <SubComponent />
     {/* <SubComponentCopy /> */}
     <Divider  />
  </Container>   
    </div>
  );
}

export default Main;
