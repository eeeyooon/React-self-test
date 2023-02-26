import React from 'react';

const PurchageInfo = ({ count }) => {
  return (
    <div className="purchage-info">
      <div className="total-info">
        <div className="total-title">
          총 상품 금액
          <span aria-label="총 상품액 안내 사항 버튼">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="15" height="15" fill="white" />
              <path
                d="M7.2538 9.19H8.4968C8.1668 6.693 10.3228 7.496 10.3228 5.109C10.3228 3.789 9.3218 3.041 8.0238 2.986C6.9348 2.931 5.6258 3.558 5.5048 5.505H6.8798C6.9348 4.625 7.3638 4.207 7.9798 4.207C8.5958 4.207 8.8598 4.647 8.8598 5.219C8.8598 6.649 6.8908 6.319 7.2538 9.19ZM8.6728 11.654V10.092H7.0668V11.654H8.6728Z"
                fill="#333333"
              />
              <rect x="0.5" y="0.5" width="15" height="15" stroke="#DEE0E3" />
            </svg>
          </span>
          <div className="total-price-info-tooltip">
            <span>
              총 상품금액에
              <span className="color-blue">
                배송비는 포함되어 있지 않습니다.{' '}
              </span>
              <br />
              결제시 배송비가 추가될 수 있습니다.
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99999 6.70706L1.40379 11.3033L0.696686 10.5962L5.29288 5.99996L0.696688 1.40376L1.40379 0.696655L5.99999 5.29285L10.5962 0.696655L11.3033 1.40376L6.7071 5.99996L11.3033 10.5962L10.5962 11.3033L5.99999 6.70706Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
        <div className="total-count-price">
          <div className="total-count">총 수량 {count}개</div>
          <div className="total-price color-blue">
            {(count * 6370).toLocaleString('en-US')}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchageInfo;
