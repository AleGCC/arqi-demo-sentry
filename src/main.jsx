import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "https://046c32066b1453d7c263fc7a42b132f6@o4509380288708608.ingest.us.sentry.io/4509398009184256",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)