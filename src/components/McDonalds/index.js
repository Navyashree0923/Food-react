import React from 'react';
import './index.css';
import McDonaldsItems from './McDonaldsItems';

const McDonaldsProducts = () => (
  <div className="mcdonalds-products">
    <div className="mcdonalds-title">
      <h4>Mc DONALDS RESTURANT</h4>
      <h5>MENU</h5>

    </div>
    <McDonaldsItems />
  </div>
);

export default McDonaldsProducts;

