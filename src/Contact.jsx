import React, { useState } from 'react';

const Contact =() => {

  const [data, setdata] =useState({
       name:'',
       email:'',
       phone:'',
       address:'',
  });

  const formsubmit = (e) => {
     e.preventDefault();
     alert(`My Name : ${data.name} ,My Email :${data.email}, My Phone :${data.phone}, My Address :${data.address}`)
  }

  const inputEvent =(event) => {
      const {name,value}=event.target;  //data destructuring imprtant
      setdata((preVal)=>{
           return {
                ...preVal,
                [name]:value,
           }

      });
  }
  //onChange={inputEvent}
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='row'>    
            <div className='row col-8 mx-auto'>
              <div className="my-5">
                  <h1 className="text-primary">Contact US</h1>
              </div>
              <form onSubmit={formsubmit}>
                <div class="mb-3">
                  <label for="" class="form-label">Name</label>
                  <input 
                       type="text" 
                       class="form-control" 
                       id="" 
                       name="name"
                       value={data.name}
                       onChange={inputEvent}
                       placeholder="xyz" />
                </div>
               <div class="mb-3">
                  <label for="" class="form-label">Email address</label>
                  <input 
                       type="email" 
                       class="form-control" 
                       id="" 
                       name="email"
                       value={data.email}
                       onChange={inputEvent}
                       placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Phone No</label>
                  <input 
                       type="text" 
                       class="form-control" 
                       id="" 
                       name="phone"
                       value={data.phone}
                       onChange={inputEvent}
                       placeholder="0123456789" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Address</label>
                  <textarea 
                        class="form-control" 
                        id="" 
                        rows="3"
                        name="address"
                        value={data.address}
                        onChange={inputEvent}
                        ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>  
            </div> 
        </div> 
      </div>  

    </>
  );

}
export default Contact;