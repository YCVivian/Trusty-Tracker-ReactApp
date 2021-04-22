import React from 'react';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./Auth";
import { HeaderWithRouter } from './Header';
import { Home } from './HomeComponents/Home';
import { ProcessApp } from './ProcessComponents/ProcessApp';
import { Records } from './RecordComponents/Records';


function App() {
  return (
    <HashRouter>
      <div>
        <HeaderWithRouter />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/process" component={ProcessApp} />
        <Route path="/batchInfo/:address" component={Records} />
      </div>
    </HashRouter>
  );
}

export default App;
