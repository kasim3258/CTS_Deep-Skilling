import React from "react";

function ListofPlayers(props) {
  return (
    <div>
      {props.players.map((item, index) => (
        <li key={index}>
          Mr. {item.name} {item.score}
        </li>
      ))}
    </div>
  );
}

export default ListofPlayers;