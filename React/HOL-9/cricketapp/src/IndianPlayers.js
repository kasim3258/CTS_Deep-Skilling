import React from "react";

// Indian Team
export const IndianTeam = [
  "Sachin1",
  "Dhoni2",
  "Virat3",
  "Rohit4",
  "Yuvraj5",
  "Raina6"
];

// Odd Players
export function OddPlayers([first, second, third, fourth, fifth]) {
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}

// Even Players
export function EvenPlayers([first, second, third, fourth, fifth, sixth]) {
  return (
    <div>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </div>
  );
}

// Merge Arrays
const T20Players = [
  "First Player",
  "Second Player",
  "Third Player"
];

const RanjiTrophyPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

export const IndianPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers
];

// Display merged players
export function ListofIndianPlayers(props) {
  return (
    <div>
      {props.IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}