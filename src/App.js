import React from 'react';
import './App.css';
import {ApplicationRoutes} from "./navigation/appRoutes";

function App() {
  localStorage.clear();
  return (
   <ApplicationRoutes/>
  );
}

export default App;
