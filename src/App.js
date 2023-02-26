import React, { useState } from 'react';
import './style.css';
import {
  ProductInfo,
  Delivery,
  ProductCounter,
  PurchageInfo,
  PurchageBtn,
} from './components/Index';

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <main>
      <ProductInfo />
      <Delivery />
      <ProductCounter count={count} setCount={setCount} />
      <PurchageInfo count={count} />
      <PurchageBtn count={count} />
    </main>
  );
}
