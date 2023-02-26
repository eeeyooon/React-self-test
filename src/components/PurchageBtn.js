import React from 'react';

const PurchageBtn = () => {
  return (
    <button role="submit" aria-label="구매하기" className="purchage-button">
      <svg
        role="submit"
        width="328"
        height="48"
        viewBox="0 0 328 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="48" rx="6" fill="#03C75A" />
        <rect
          width="28"
          height="28"
          transform="translate(120 10)"
          fill="white"
        />
        <path
          d="M127 17H131.719L136.263 23.5971V17H141V31H136.263L131.293 24.1082V31H127V17Z"
          fill="#03C75A"
        />
        <path
          d="M168.264 25.024V23.54H166.57C166.892 21.734 166.892 20.432 166.892 19.214V18.052H157.946V19.536H165.086C165.086 20.656 165.058 21.902 164.736 23.54H156.616V25.024H161.432V30.204H163.308V25.024H168.264ZM180.471 17.296H178.721V22.224H177.643V17.506H175.921V29.616H177.643V23.708H178.721V30.19H180.471V17.296ZM169.775 18.626V26.984H174.857V18.626H169.775ZM171.497 25.542V20.082H173.149V25.542H171.497ZM194.19 23.876V22.35H192.342V17.31H190.494V30.204H192.342V23.876H194.19ZM186.854 19.214V17.534H185.006V19.214H182.15V20.684H189.654V19.214H186.854ZM185.944 21.412C184.068 21.412 182.668 22.686 182.668 24.478C182.668 26.312 184.068 27.572 185.944 27.572C187.806 27.572 189.192 26.312 189.192 24.478C189.192 22.686 187.806 21.412 185.944 21.412ZM185.944 26.06C185.048 26.06 184.432 25.5 184.432 24.492C184.432 23.484 185.048 22.91 185.944 22.91C186.84 22.91 187.442 23.512 187.442 24.478C187.442 25.486 186.84 26.06 185.944 26.06ZM205.767 17.296H203.905V30.19H205.767V17.296ZM201.931 18.64H195.743V20.11H200.041C199.775 22.966 198.347 24.996 195.057 26.564L196.023 28.02C200.601 25.822 201.931 22.574 201.931 18.64Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default PurchageBtn;