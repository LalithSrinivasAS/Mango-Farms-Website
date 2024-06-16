import React from 'react';
import products from './data';
import details from './cartdatafile';
import './Product.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();

  const addProductToCart = (product) => {
    const productExists = details.some((item) => item.name === product.name);
    if (!productExists) {
      details.push(product);
    }
    navigate("/cart");
  };
  const addProductToBuy = (product) => {
    const productExists = details.some((item) => item.name === product.name);
   
    navigate("/Buyproduct",{state:{product}});
  };


  const viewProductDetail = (product) => {
    const productExists = details.some((item) => item.name === product.name);
    if (!productExists) {
      details.push(product);
    }
    navigate("/productDetail", { state: { product } });
  };
  const skk=()=>{
    navigate("/cart");
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.Id} className="product-card">
          <button
            style={{ height: "344px", border: "none",backgroundColor:"white" }}
            onClick={() => viewProductDetail(product)}
          >
            <img src={product.imgurl1} alt={product.name} className="product-image" />
          </button>
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-packaging">Packaging: {product.Packaging}</div>
            <div className="product-mrp">&#8377; {product.MRP}</div>
            <button className="add-to-cart-button" onClick={() => addProductToCart(product)}>
              Add to Cart
            </button>
            <button className="buy-now-button" onClick={() => addProductToBuy(product)}>Buy Now</button>
          </div>
        </div>
      ))}
      <div className="cart-icon">
        <center>
         
           <button onClick={() => skk()} style={{border:"none",background:"none"}}>
           <img
              width={"30px"}
              style={{ position: "relative", top: "10px",left:"0px" }}
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="Cart"
            />
           </button>
                    
        </center>
      </div>
    </div>
  );
};

export default ProductList;
