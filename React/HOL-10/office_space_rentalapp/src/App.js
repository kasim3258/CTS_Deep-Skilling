import React from "react";
import "./App.css";
import office from "./office.jpg";

function App() {

  const element = "Office Space";

  const jsxatt = (
    <img
      src={office}
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div className="App">

      <h1>{element}, at Affordable Range</h1>

      {jsxatt}

      <h1>Name: {ItemName.Name}</h1>

      <h3 className={ItemName.Rent <= 60000 ? "textRed" : "textGreen"}>
        Rent Rs. {ItemName.Rent}
      </h3>

      <h3>Address: {ItemName.Address}</h3>

      <hr />

      {
        officeList.map((ItemName, index) => {

          let colors = [];

          if (ItemName.Rent <= 60000) {
            colors.push("textRed");
          } else {
            colors.push("textGreen");
          }

          return (
            <div key={index}>
              <h2>Name: {ItemName.Name}</h2>

              <h3 className={colors.join(" ")}>
                Rent Rs. {ItemName.Rent}
              </h3>

              <h3>Address: {ItemName.Address}</h3>

              <hr />
            </div>
          );

        })
      }

    </div>
  );
}

export default App;