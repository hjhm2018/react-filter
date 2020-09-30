import React from 'react';
import { Provider } from './Context';
import Users from './Users';
import Footer from './Footer';

function App() {
  return (
    <Provider>
      <Users />
      <Footer />
    </Provider>
  );
}

export default App;
