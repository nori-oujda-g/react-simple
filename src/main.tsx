import 'bootstrap/dist/css/bootstrap.min.css';
// Styles for react-datepicker (fix appearance issues)
import { StrictMode } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './app/store.tsx';
import './index.css';
import MyNave from './widgets/MyNave.tsx';
// npm install react-bootstrap bootstrap
// npm i --save-dev @types/node
// yarn add react-router-dom
// yarn add @reduxjs/toolkit react-redux axios
// yarn add react-hook-form

//yarn add @tanstack/react-table
//yarn add react-icons
//yarn add @react-icons/all-files
//yarn add react-datepicker

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MyNave />
      <App />
    </Provider>
  </StrictMode>,
)
