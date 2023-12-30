import React, {  useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';

export default function Products() {
  let navigate=useNavigate();
  const [search,setSearch]=useState([]);
  var products=[]
  if(localStorage.getItem('productsData')){
      products =JSON.parse(localStorage.getItem('productsData'));
  }
  products=products.filter((item)=>(days_between(item.expiryDate)))  
  function days_between(date1) {
    date1=new Date(date1)
    var date2=new Date();
    let Difference_In_Time = date2.getTime() - date1.getTime();
    console.log("DiffTime",Difference_In_Time)
    return Difference_In_Time<=0;
  }
  let cart=[]
  if(localStorage.getItem('cart')) cart=JSON.parse(localStorage.getItem('cart'));
  
  const handleClear=()=>{
    localStorage.setItem('cart',JSON.stringify([]));
    navigate("/Products")
  }
  const handleCheckOut=(ind)=>{
    let sellhistory=[];
    for(let i=0;i<cart.length;i++){
      for(let j=0;j<products.length;j++){
        if(products[j].name==cart[i].name) products[j].quantity-=cart[i].qty;
      }
    }
    localStorage.setItem('productsData',JSON.stringify(products))
    if(localStorage.getItem("sellhistory")) sellhistory=JSON.parse(localStorage.getItem('sellhistory'));
    sellhistory.push(JSON.parse(localStorage.getItem('cart')))
    // console.log("jsc",JSON.parse(localStorage.getItem('cart')));
    // console.log("slh",sellhistory)
    localStorage.setItem("sellhistory",JSON.stringify(sellhistory))
    localStorage.setItem("cart",JSON.stringify([]))
    navigate("/Invo");
  }

  //console.log(cart);
  return (
    <div > 
      <div><Navbar /></div>
      <div className="row my-2 mx-1 justify-content-center">
        <table className="table table-striped table-borderless">
          <thead style={{ backgroundColor: '#84B0CA' }} className="text-white">
            <tr>
            <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Unit MRP</th>
              {/* <th scope='col' >option</th> */}
            </tr>
          </thead>
          <tbody>
            {cart.map((ele,index) => (
              <tr key={index+1}>
                <th scope='row' >{index + 1}</th>
                <td >{ele.name}</td>
                <td>{ele.qty}</td>
                <td>{ele.MRP}</td>
                {/* <div><td ><button type="button"  onClick={handleDel(index)}>Del</button> </td></div> */}
      
              </tr>
            ))}
          </tbody>
        </table>
        <div className='row float-end'>
              <div className='col-sm-12 float-end'>
                <button ID="btnSearch" className='btn-danger m-2'  onClick={handleClear} > Clear </button>
                <button ID="btnClear" className='btn-success' onClick={handleCheckOut} >Chek Out</button>
              </div>
            </div>
        </div>

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
