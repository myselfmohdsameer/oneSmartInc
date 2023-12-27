import React from 'react'
export default function Footer() {
  return (
    <div className='mt-3'>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company
                </h6>
                <p>
                OneSmartInc
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Features
                </h6>
                <p className="text-reset">Adding Product </p>
                <p className="text-reset"> Billing </p>
                <p className="text-reset"> Analysing </p>
              </div>
                    
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p><a href="/AddProduct" className="text-reset">AddProduct</a></p>
                <p><a href="/Products" className="text-reset">Billing</a></p>
                <p><a href="/Expired" className="text-reset">Expired</a></p>
                <p><a href="/" className="text-reset">Home</a></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Prayagraj ,ALLAHABAD, INDIA</p>
                <p><i className="fas fa-envelope me-3"></i>ekalavyalatchireddi@gmail</p>
                <p><i className="fas fa-phone me-3"></i> + 91 8374509735</p>
              </div>
            </div>
          </div>
        </section>  
        <div className="text-center p-4" style={{"background-color":"rgba(0, 0, 0, 0.05)"}}>
          © 2023 Copyright : 
          <a className="text-reset fw-bold" href="/"> MNNITIAN</a>
        </div>  
      </footer>
    </div>
  )
}
