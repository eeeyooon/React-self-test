import React from 'react';

const Delivery = () => {
  return (
    <div className="delivery">
      <p className="delivery-info">
        <span className="delivery-title">택배배송</span>
        <span className="delivery-price">
          3000원
          <span className="other-info color-blue">주문시 결제</span>
        </span>
      </p>
      <p className="delivery-count">10개마다 부과</p>
    </div>
  );
};

export default Delivery;
