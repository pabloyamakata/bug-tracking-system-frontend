import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// When deploying react SPA on Github that also uses react-router,
// it's important to import HashRouter instead of BrowserRouter. 
// Otherwise, there's gonna be a 404 error when page refreshes.