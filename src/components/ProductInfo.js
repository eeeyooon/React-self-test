import React from 'react';

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="product-image">
        <img
          src="image/product-image.svg"
          alt="래피젠 코로나 자가 검사 키트"
          width="328"
          height="183"
        />
      </div>
      <p className="product-title">
        래피젠 코로나 자가 검사 키트 <br />
        2개입X1박스
      </p>
      <p className="sale-info">
        <span className="sale-rate color-blue">88%</span>
        <span className="price">
          <del className="cost">56,760원</del>6,370원
        </span>
      </p>
    </div>
  );
};

export default ProductInfo;
