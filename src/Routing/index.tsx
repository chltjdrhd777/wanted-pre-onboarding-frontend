import React from 'react';
import { Route, Router, Routes } from '../module/React-Router';
import Signup from '../Pages/Auth/Signup';
import Signin from '../Pages/Auth/Signin';
import Todo from '../Pages/Todo';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={<Signup />} />
        <Route path="/signin" component={<Signin />} />
        <Route path="/todo" component={<Todo />} />
      </Routes>
    </Router>
  );
}

export default Routing;
