import React from 'react';
import Common from './Common';
import img from '../src/image/nature-image.jpg';

const Home =() => {
  return (
    <>
       <Common name="Welcome to Home " imgsrc={img} visit="/services" btnName="Get started"/>
    </>
  );

}
export default Home;
