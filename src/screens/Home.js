import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  // localStorage.removeItem('productsData')
  // localStorage.removeItem('sellhistory')
  // localStorage.removeItem('cart')
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain important"}}>
            <div className="carousel-inner" id="carousal" >
            <div className="carousel-item">
                <img src="https://e0.pxfuel.com/wallpapers/758/458/desktop-wallpaper-supermarket-groceries.jpg" className="d-block w-100" style={{filter: "brightness(60%)"}}/>
                </div>
                <div className="carousel-item active">
                <img src="https://w0.peakpx.com/wallpaper/728/926/HD-wallpaper-retail-partners-food-bank-demo-site-grocery-store.jpg" className="d-block w-100" style={{filter: "brightness(60%)"}}/>
                </div>
                <div className="carousel-item">
                <img src="https://wallpapercave.com/wp/wp10044771.jpg" className="w-100"  style={{filter: "brightness(60%)"}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}