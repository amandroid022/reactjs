import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Preferences from "../Preferences/Preferences";
import useToken from "./useToken";

function App() {
  function deleteItem() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const { token, setToken } = useToken();

  var d1 = new Date();
  console.log("d1", d1);

  var d2 = new Date(token);
  d2.setMinutes(d1.getMinutes() + 0.01);

  console.log("d2", d2);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  if (Date.parse(d1) > Date.parse(d2)) {
    deleteItem();
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>

      <button
        onClick={(e) => {
          deleteItem();
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default App;
