mport React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
	  return (
		      <Router>
		        <div className="App">
		          <Switch>
		            <Route path="/" exact component={Home} />
		            <Route path="/product/:id" component={ProductDetails} />
		          </Switch>
		        </div>
		      </Router>
		    );
}

export default App;

