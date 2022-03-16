import React from 'react';
import { Image } from 'semantic-ui-react'
import  './Home.css'
import Main from './Main';

function Home() {
  return (
    <div className="Home">
        <Image src='https://know.creditsights.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/CreditSights_logowtaglineBIG.png.webp' />
           <Main /> 
    </div>
  );
}

export default Home;
