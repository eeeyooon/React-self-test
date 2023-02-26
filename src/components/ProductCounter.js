import React from 'react';

const ProductCounter = ({ count, setCount }) => {
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    if (count < 200) {
      setCount(count + 1);
    }
  };

  return (
    <div className="product-counter">
      <button
        araia-label="상품 수량 빼기"
        className="minus-button"
        onClick={minusCount}
      >
        <svg
          role="button"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="34" fill="#F1F2F4" />
          <path
            d="M14.4931 16.936V17.448H19.5011V16.936H14.4931Z"
            fill="#333333"
          />
        </svg>
      </button>
      <div className="product-count">{count}</div>
      <button
        aria-label="상품 수량 추가"
        className="plus-button"
        onClick={plusCount}
      >
        <svg
          role="button"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="34" fill="#F1F2F4" />
          <path
            d="M16.7001 17.448V21.032H17.2921V17.448H20.5721V16.936H17.2921V13.336H16.7001V16.936H13.4201V17.448H16.7001Z"
            fill="#333333"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCounter;
