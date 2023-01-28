import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  E404,
  Signup,
  CliLogin,
  ClientHome,
  ClientEdit,
  AdminLogin,
  AdminHome,
  AdminEdit,
} from "./Pages";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/client/login" element={<CliLogin />} />
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/clientEdit/:id" element={<ClientEdit />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/adminEdit/:id" element={<AdminEdit />} />
          <Route path="/*" element={<E404 />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
