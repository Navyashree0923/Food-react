import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Empire from './components/Empire';
import Atria from './components/Atria';
import A2B from './components/A2B';
import McDonalds from './components/McDonalds';
import ShowProduct from './components/ShowProduct';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
      <Route path="/empire" component={Empire}  />
        <Route path="/atria" component={Atria} />
        <Route path="/a2b" component={A2B}  />
        <Route path="/mcdonalds" component={McDonalds}  />
        <Route exact path="/products/img" component={ShowProduct} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));

