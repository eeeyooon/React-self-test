import React, { useState, useEffect } from 'react';

const PurchageBtn = ({ count }) => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (count == 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [count]);

  return (
    <button
      role="submit"
      aria-label="구매하기"
      className={`purchage-button ${disable ? 'disable' : 'not-disable'}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" fill="white" />
        <path
          d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z"
          fill={`${disable ? '#999999' : '#03C75A'}`}
        />
      </svg>

      <span>구매하기</span>
    </button>
  );
};

export default PurchageBtn;
