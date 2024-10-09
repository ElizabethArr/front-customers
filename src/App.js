import React from "react";
import "./App.css";
import RegisterForm from "./RegisterForm.tsx";
import CustomerTable from "./CustomerTable.tsx";

const App = () => {
  return (
    <div className="App">
      <CustomerTable />
      <div style={{ marginBottom: "30px" }}></div>
    </div>
  );
};

export default App;
