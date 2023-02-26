import React, { useState, useEffect, useRef } from 'react';

const PurchageBtn = ({ count }) => {
  const [disable, setDisable] = useState(false);

  const btn = useRef();
  const logo = useRef();

  const btnHover = () => {
    if (!disable) {
      btn.current.style.background = '#0AAE4F';
    }
  };

  const btnOut = () => {
    if (!disable) {
      btn.current.style.background = '#03C75A';
    }
  };

  useEffect(() => {
    if (count == 0) {
      btn.current.style.background = '#DEE0E3';
      btn.current.style.color = '#999999';
      logo.current.style.fill = '#999999';
      btn.current.style.cursor = 'auto';
      setDisable(true);
    } else {
      btn.current.style.background = '#03C75A';
      btn.current.style.color = '#ffffff';
      logo.current.style.fill = '#03C75A';
      btn.current.style.cursor = 'pointer';
      setDisable(false);
    }
  }, [count]);

  return (
    <button
      ref={btn}
      onMouseOver={btnHover}
      onMouseOut={btnOut}
      role="submit"
      aria-label="구매하기"
      className="purchage-button"
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
          ref={logo}
          d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z"
          fill="#03C75A"
        />
      </svg>

      <span>구매하기</span>
    </button>
  );
};

export default PurchageBtn;
