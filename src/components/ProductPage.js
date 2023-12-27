import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export default function ProductPage() {
    const location=useLocation();
    
    return (
        <div>
            <div><Navbar/></div>
            <div class="card text-center">
                <div class=" card-title">
                Product Details
                </div>
                <div class="card-body">
                    <h5 class="card-title text-success">{location.state.name}</h5>
                    <p class="card-text">Specifics : {location.state.specifics}</p>
                    <p class="card-text">Quantity Left: {location.state.quantity}</p>
                    <p class="card-text">Discount : {location.state.discount}%</p>
                    <p class="card-text">PurchasePrice :$ {location.state.purchasePrice}</p>
                    <p class="card-text">MRP : ${location.state.MRP}</p>
                    <p class="card-text">PurchaseDate : {location.state.purchaseDate}</p>
                    <p class="card-text">ExpiryDate : {location.state.expiryDate}</p>
                    <a href="/Products" class="btn btn-primary">Go Back</a>
                </div>
            </div>
            <div><Footer/></div>
        </div>
        
    )
}
