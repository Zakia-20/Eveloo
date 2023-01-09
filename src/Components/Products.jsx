import react from 'react'
import bike1 from '../assets/bike1.png'

function Products(){
    return(
        <>
           <section className='section4'>
            <div className="leftSection">
              <h1 className="title4">Our Products</h1>

                <div className="bikes">
                    <h1>BIKES</h1>
                </div>

                <div className="bike2">
                    <img src={bike1} alt="" />
                </div>
              <div className="product">
                 <h1 className="productTitle"> ARIES MID-DRIVE</h1>
                 <h3 className="productDescr">STARTING FROM $3499</h3>

              </div>
            

            </div>
            
               
            <div className="products">

              <div className="list">
                    <li id='clr'>ALL</li>
                    <li>Comfort</li>
                    <li>Sport utylity</li>
                    <li>speacility</li>
                </div>

                 <div className="product1">
                    <img src={bike1} alt="" />
                    <h3 className='productTitle'>GALAXY</h3>
                    <h4 className="productDescr">STARTING FROM $3499</h4>
                 </div>

                 <div className="product2">
                    <img src={bike1} alt="" />
                    <h3 className='productTitle'>GALAXY</h3>
                    <h4 className="productDescr">STARTING FROM $3499</h4>
                 </div>
            </div>
             </section>
        </>
    )
}

export default Products;