import React from 'react';
import { NavLink } from 'react-router-dom';

const Common =(props) => {
  return (
    <>
      <section id="header" className=''>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                   <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column'> 
                            <h3>{props.name} <strong className='text-primary'>My Web</strong></h3>
                            <h5>We are talented devlopment team</h5>
                            <div className="mt-3">
                                <NavLink to={props.visit} className='btn grt-started'>{props.btnName}</NavLink>
                            </div>
                        </div>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 header-img d-flex justify-content-center flex-column'> 
                            <img  className='image-fluid animated' src={props.imgsrc} alt="home img" height={400} width={500}/>
                        </div>
                   </div>
                </div>
            </div>
        </div>          
      </section>
    </>
  );

}
export default Common;
