import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/components/app/app.tsx';
import {placeOffers} from '@/constants/place-offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeOffers={placeOffers}/>
  </React.StrictMode>
);
