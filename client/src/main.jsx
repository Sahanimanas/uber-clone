import React from "react";
import reactDom ,{createRoot } from 'react-dom/client'
import App from './App.jsx'
const root = document.getElementById('root');
reactDom.createRoot(root).render(
  <App/>
)