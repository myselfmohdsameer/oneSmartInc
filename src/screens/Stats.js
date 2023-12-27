import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Stas() {
    let sellhistory=[];
    if(localStorage.getItem("sellhistory")) sellhistory=JSON.parse(localStorage.getItem('sellhistory'));
    let toatalIncome=0,totalCost=0;
    console.log("stSellhis",sellhistory)
    for(let i=0;i<sellhistory.length;i++){
        for(let j=0;j<sellhistory[i].length;j++){
            let val1=(sellhistory[i][j].purchasePrice*sellhistory[i][j].qty)*(100-sellhistory[i][j].discount);
            let val2=(sellhistory[i][j].MRP*sellhistory[i][j].qty)
            totalCost+=parseInt(val1/100);
            toatalIncome+=parseInt(val2)
        }
    }
    return (
        <div>
        <div><Navbar/></div>
        <div className='container bg-dark m-4 p-1'>
        <div class="card text-center">
            <div class="card-header">
              Total Cost : {totalCost}
            </div>
            <div class="card-header">
              Total Income : {toatalIncome}
            </div>
            <div class="card-header">
              Net Profit : {toatalIncome-totalCost}
            </div>
        </div>
        </div>
         <div><Footer/></div>
         </div>
        
    )
}
        