import React from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
import Checkout from './container/Checkout/Checkout'
import {Route} from 'react-router-dom';
import Orders from './container/Orders/Orders'
function App() {
  return (
    <div >
    <Layout>
      <Route path="/checkout" component={Checkout}></Route>
      <Route path="/orders" component={Orders}/>
      <Route path="/"  exact component={BurgerBuilder}  />

    </Layout>
    </div>
  );
}

export default App;
