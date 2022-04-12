import React from 'react';
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
          <button type='button'>Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type='button'>Continuar pedido</button>
      </div>
    </div>
  );
};

export default CheckOut;
