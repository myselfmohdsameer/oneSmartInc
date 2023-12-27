import React from 'react';
import { useNavigate } from 'react-router-dom';

const Invo= () => {
    let navigate=useNavigate();
    const handlePrint = () => {
        window.print();
        navigate("/")
        
      };
    let sellhistory=[];
    if(localStorage.getItem("sellhistory")) sellhistory=JSON.parse(localStorage.getItem('sellhistory'));
    let l=sellhistory.length,total=0;
    let itemList=sellhistory[l-1];
    for(let i=0;i<itemList.length;i++) total+=(itemList[i].qty*itemList[i].MRP);
    //console.log("sellhistory",sellhistory)
  return (
    <div className="card">
      <div className="card-body">
        <div className="container mb-5 mt-3">
          <div className="row d-flex align-items-baseline">
            <div className="col-xl-9">
              <p style={{ color: '#7e8d9f', fontSize: '20px' }}>
                Invoice <strong>ID:{l}</strong>
              </p>
            </div>
            <div className="col-xl-3 float-end">
              <button onClick={handlePrint} className="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark">
                <i className="fas fa-print text-primary"></i> Print
              </button>
            </div>
          </div>
          <hr />

          <div className="container">
            <div className="col-md-12">
              <div className="text-center">
                <i className="fab fa-mdb fa-4x ms-0" style={{ color: '#5d9fc5' }}></i>
                <p className="pt-0">OneSmartInc.com</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <ul className="list-unstyled">
                  <li className="text-muted">Prayagraj</li>
                  <li className="text-muted">UttarPradesh,India</li>
                  <li className="text-muted">
                    <i className="fas fa-phone"></i> +91 8374509715
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <p className="text-muted">Invoice</p>
                <ul className="list-unstyled">
                  <li className="text-muted">
                    <i className="fas fa-circle" style={{ color: '#84B0CA' }}></i>{' '}
                    <span className="fw-bold">ID:</span>{l}
                  </li>
                  <li className="text-muted">
                    <i className="fas fa-circle" style={{ color: '#84B0CA' }}></i>{' '}
                    <span className="fw-bold">Creation Date: </span>{new Date().toJSON().slice(0, 10)}
                  </li>
                </ul>
              </div>
            </div>

        <div className="row my-2 mx-1 justify-content-center">
        <table className="table table-striped table-borderless">
          <thead style={{ backgroundColor: '#84B0CA' }} className="text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Qty</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item,index) => (
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <th scope="row">{item.name}</th>
                <td>{item.qty}</td>
                <td>${item.MRP}</td>
                <td>${item. MRP*item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
            <div className="row">
              <div className="col-xl-8">
                <p className="ms-3">Add additional notes and payment information</p>
              </div>
              <div className="col-xl-3">
                <ul className="list-unstyled">
                  <li className="text-muted ms-3">
                    <span className="text-black me-4">SubTotal</span>${total}
                  </li>
                  <li className="text-muted ms-3 mt-2">
                    <span className="text-black me-4">Tax(15%)</span>${total*(.15)}
                  </li>
                </ul>
                <p className="text-black float-start">
                  <span className="text-black me-3"> Total Amount</span>
                  <span style={{ fontSize: '25px' }}>${parseInt(total*(1.15))}</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xl-10">
                <p>Thank you for your purchase</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invo;
