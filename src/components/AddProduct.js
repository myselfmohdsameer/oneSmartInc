import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AddProduct() {
    const [credentials,setCredentials] =useState({name:"",specifics:"",purchaseDate:"",quantity:"",purchasePrice:"",discount:"",MRP:"",expiryDate:""})
    let navigate=useNavigate();
    const handlesubmit=(event)=>{
    credentials.purchaseDate=new Date().toJSON().slice(0, 10);
    if(!localStorage.getItem('productsData')){
        var products=[credentials];
        localStorage.setItem('productsData', JSON.stringify(products));        
    }
    else{
        var products = JSON.parse(localStorage.getItem('productsData'));
        products.push(credentials);
        localStorage.setItem('productsData', JSON.stringify(products));  
    }
    //console.log(localStorage.getItem('productsData'))
    alert("Product Added")
    navigate('/')
  }

  const onChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
        <form onSubmit={handlesubmit}> 
        <div><Navbar /></div>
        <div className="wrapper">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Fy7FL5Tyd6lBXrypv76NqUhWke9OTsPb5hsVNF7Sgzx7gQVycbP-E92C3LcFv7MjWyg&usqp=CAU" alt=""/>
            </div>
            <div className="text-center  name text-success">
                One Smart Inc
            </div>
            <div><label htmlFor="exampleInputEmail1" className="form-label ">Add a product</label></div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text"  id="userName" placeholder="Name of Product"  name='name' value={credentials.name} onChange={onChange}/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" id="userName" placeholder="Specifics" name='specifics' value={credentials.specifics} onChange={onChange}/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="int"  id="pwd" placeholder="quantity" name='quantity' value={credentials.quantity} onChange={onChange} />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="int"  id="pwd" placeholder="PurchasePrice" name='purchasePrice' value={credentials.purchasePrice} onChange={onChange} />
            </div>
            
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="int" id="userName" placeholder="DiscountRecieved"  name='discount' value={credentials.discount} onChange={onChange}/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="int" id="userName" placeholder="MRP"  name='MRP' value={credentials.MRP} onChange={onChange}/>
            </div>
            <div><label htmlFor="exampleInputEmail1" className="form-label m-1">Expiry Date</label></div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input placeholder="ExpDate" id="startDate" name='expiryDate' type="date" value={credentials.expiryDate} onChange={onChange} />
            </div>
            <button className="btn mt-3 bg-success">Add</button>
        </div>
        <div><Footer /></div>
        </form>
    )
}