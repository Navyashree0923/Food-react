import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import PRODUCTS from '../../Data';

const AtriaItems = () => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (product.resturant === "atria") {
        return(
          <div className="item">
            <Link to={`/products/Rs{product.id}`}>
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
            </div>
            </Link>
            <div className="price-add">
              <h5 id="product-price">Rs{product.price}</h5>
              {/* <div className="price-discount">
              <h5 id="product-price">Rs{product.discount}</h5> */}
              <Icon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</Icon>
            </div>
            </div>
          // </div>
        )
      }
    })}
  </div>
)

export default AtriaItems;
