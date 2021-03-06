import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const CheckOut = () => {
  return (
    <div className="Checkout">
      <div className="Checkout">
        <h3>Lista Pedidos:</h3>
        <div className="Checkout-item">
          <div className="checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
