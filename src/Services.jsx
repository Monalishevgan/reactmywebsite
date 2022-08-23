import React from 'react';
import Card from './Card'
import CardData from './CardData'

const Services =() => {
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='row'>
           
            <div className='row col-10 mx-auto'>
            <div className="my-5">
                <h1 className="tab-center text-primary">Our Services</h1>
            </div>
              {
                CardData.map(( val,index ) => {
                    return <Card 
                            imgsrc={val.img}
                            title={val.title}
                           /> 
                })
              }
            </div>
        </div>
      </div> 
    </>
  );

}
export default Services;