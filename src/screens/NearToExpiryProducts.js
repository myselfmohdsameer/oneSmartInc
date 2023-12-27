import React, { useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';

export default function Products() {
    function days_between(date1) {
        date1=new Date(date1)
        var date2=new Date();
        let Difference_In_Time = date1.getTime() - date2.getTime();
        let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        return Difference_In_Days;
    }
    const [search,setSearch]=useState([]);
    var products=[]
    if(localStorage.getItem('productsData')) products =JSON.parse(localStorage.getItem('productsData'));
    products=products.filter((item)=>(days_between(item.expiryDate)<30) && days_between(item.expiryDate)>=0)
    //console.log(products);
    return (
        <div > 
        <div><Navbar /></div>
        <div className='container'>
        <div>
            <div classNameName='carousel-caption ' >
            <div className="d-flex m-3 justify-content-center ">
                <button className="btn btn-outline-success text-white bg-success" style={{'margin-right': '10px'}} ><SearchIcon/></button>
                <input className="form-control " type="search" placeholder="Search"  aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            </div>
            </div>
        </div>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            {products.length!=0
                ?products.filter((item)=> (String(item.name).toLowerCase().includes(String(search).toLowerCase())))
                .map(filterItems=>{ 
                return(
                    <div key={filterItems._id}  >
                    <Card 
                        name={filterItems.name}
                        specifics={filterItems.specifics}
                        quantity={filterItems.quantity}
                        purchaseDate={filterItems.purchaseDate}
                        purchasePrice={filterItems.purchasePrice}
                        MRP={filterItems.MRP}
                        expiryDate={filterItems.expiryDate}
                        discount={filterItems.discount}
                    />
                    </div>
                )
                }
                ): <div>No Such Data Found</div>
            }
        </div>
        </div>
        <div><Footer /></div>
        </div>
    )
}