import React from 'react';
import { Header,Container, Divider, Image, } from 'semantic-ui-react'
import  './Main.css'
import SubComponent from './SubComponent';

function Main() {
  return (
    <div className="Main">
       <Container textAlign='center' text>
    <Header as='h2'>Text to Audio Converter </Header>
    <Image size='medium' centered src='https://www.shareicon.net/data/2015/07/26/75140_media_512x512.png' />
     <Divider hidden  />
     <SubComponent />
     <Divider />
    <p>
    We maintain our risk-on sentiment for the High Yield Chemicals driven by
     the favorable operational backdrop. Volume growth in key end markets across
      the sector remains solid as macroeconomic conditions continue to translate
       into healthy demand. Demand growth will be further boosted by the recovery 
       in auto production as the chip shortage situation improves as well as a significant
        increase in U.S. infrastructure spending although infrastructure demand will be weighted 
        toward the end of 2022. In addition, supply constraints that hampered demand 
        growth in 2021 could ease over the course of the year,
     which could further fuel growth.
    </p>
    <p>
    We continue to be constructive on titanium dioxide (TiO2).
     When compared to other chemical chains, supply conditions in TIO2 continue to
      favor producers as industry inventories remain below seasonal norms, new capacity
       builds are minimal relative to other chains, and the threat from Chinese exports 
       into Europe and North American continue to be restricted when compared to prior
        years due to both environmental and logistical challenges. We also expect demand
         growth to remain resilient across all key regions and end markets driven by persistent
          growth in the global economy. Lastly, we also expect TiO2 producers to continue to push 
          through higher prices over the balance of the year given the favorable demand and supply
           environment as well as we elevated TiO2 feedstock costs.
 </p>
  </Container>   
    </div>
  );
}

export default Main;
