import React from 'react';
import Common from './Common';
import img from '../src/image/Marketing.jpg';

const About =() => {
  return (
    <>
      <Common name="Welcome to Home " imgsrc={img} visit="/contact" btnName="Contact Now"/>
    </>
  );

}
export default About;