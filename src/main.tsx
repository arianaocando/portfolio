import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import "../src/i18n/config.ts";

import './scss/styles.scss'
import  'bootstrap'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
