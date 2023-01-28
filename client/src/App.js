import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { E404, Signup, CliLogin, ClientHome, ClientEdit } from "./Pages";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/client/login" element={<CliLogin />} />
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/clientEdit/:id" element={<ClientEdit />} />
          <Route path="/*" element={<E404 />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
