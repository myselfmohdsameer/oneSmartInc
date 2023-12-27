import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function Card(props) {
  function days_between(date1) {
    date1=new Date(date1)
    var date2=new Date();
    let Difference_In_Time = date2.getTime() - date1.getTime();
    return Difference_In_Time>0;
  }
  const [qty,setQty]=useState(1)
  const [ret,setRet]=useState(100)
  let navigate=useNavigate();
  let cart=[]
  if(localStorage.getItem('cart')) cart=JSON.parse(localStorage.getItem('cart'));
  const handleadd=()=>{
    cart.push({name:props.name,qty:qty,MRP:props.MRP,purchasePrice:props.purchasePrice,discount:props.discount})
    localStorage.setItem('cart',JSON.stringify(cart));
    navigate("/Products");
  }
  const handleReturn=()=>{
    let sellhistory=[],products=[],nproducts=[];
    if(localStorage.getItem("sellhistory")) sellhistory=JSON.parse(localStorage.getItem('sellhistory'));
    sellhistory.push([{name:props.name,MRP:-parseInt((props.MRP*(100-ret))/100),qty:props.quantity,discount:props.discount,purchasePrice:0}])
    //console.log("slh",sellhistory)
    localStorage.setItem("sellhistory",JSON.stringify(sellhistory))
    if(localStorage.getItem('productsData')){
        products =JSON.parse(localStorage.getItem('productsData'));
    }   
    for(let i=0;i<products.length;i++){
      if(products[i].name!=props.name) nproducts.push(products[i]);
    }
    //console.log("nproducts",nproducts)
    localStorage.setItem('productsData',JSON.stringify(nproducts))
    alert("Returned")
    window.location.reload();
  }
  //console.log(cart);
  return (
    <div>  
      <div className="card" style={{"width": "16rem","maxHeight":"250px" }}>
        <h5 className="text-success m-2">{props.name}</h5>
        <div className="card-body">
            <h6 className="">Specifics: {props.specifics}</h6>
            <h6 className="">Quantity: {props.quantity}</h6>
            <h6 className="">MRP: {props.MRP}</h6>
            <Link to="/ProductPage" state={props}>Read More</Link>
            {(days_between(props.expiryDate))?
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder='enter return%' onChange={(r)=> setRet(r.target.value)}/>
              <div class="input-group-prepend">
                <button class="btn btn-success"  type="button" onClick={handleReturn}>Return</button>
              </div>  
            </div>
            :
            <div className='row'>
              <div className='col-sm-12'>
                <select ID="btnSearch" className='btn-success m-2' onChange={(e)=> setQty(e.target.value)}>
                    {Array.from(Array(Math.min(10,props.quantity)),(e,i)=>{
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                    })}
                </select>
                <button ID="btnClear" className='btn-success' onClick={handleadd} >Add to Cart</button>
              </div>
            </div>
            }
        </div>
        </div>
    </div>
    
  )
}
