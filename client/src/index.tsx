import React from 'react';
import ReactDOM from 'react-dom';
import App from "./router/Index";
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
      <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
