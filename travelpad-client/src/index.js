import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './data/routes';
import { BrowserRouter as Router } from 'react-router-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);
