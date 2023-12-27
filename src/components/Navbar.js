import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
  let id=123,products=[];
  if(localStorage.getItem('productsData')){
      products =JSON.parse(localStorage.getItem('productsData'));
  }
  let sellhistory=[];
  if(localStorage.getItem("sellhistory")) sellhistory=JSON.parse(localStorage.getItem('sellhistory'));
  const handlesubmit=(event)=>{
    event.preventDefault();
    fetch("http://localhost:4000/api/syncData", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({id:id,productsData:products,sellHistory:sellhistory})
    }).then(response => response.json()).then(json => {
      if(json.success){
        alert("Data Synced")
      }
      else{
        alert("somthing went wring try again later!")
      }
      
    })
   
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">OneSmartInc</Link>
          <div className="collapse navbar-collapse d-flex" id="navbarNav">
            <Link className="btn bg-white text-success mx-1" to="/Products">Billing</Link>
            <Link className="btn bg-white text-success mx-1" to="/NearToExpiryProducts">NearToExpire</Link>
            <Link className="btn bg-white text-success mx-1" to="/Expired">Expired</Link>
            <ul className="navbar-nav me-auto mb-2"></ul>
            <Link className="btn bg-white text-success mx-1" to="/AddProduct">AddProduct</Link>
            <Link className="btn bg-white text-success mx-1" to="/Stats">Stats</Link>  
            <button className="btn bg-white text-success mx-1" onClick={handlesubmit}>Sync</button>           
          </div>
        </div>
      </nav>
  </div>
  )
}
