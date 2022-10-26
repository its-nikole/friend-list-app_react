import React from "react";
import { useState } from "react";

const friends = [
  { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Friend added to the list!");
};

export function App() {
  return (
    <>
      <div class="wrapper">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add New Friend</legend>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Age" />
            <input placeholder="City" />
            <button>Add Friend</button>
          </fieldset>
        </form>
      </div>
      <div class="friends-container">
        {friends.map((friend) => (
          <div className="FriendCard">
            <p>First Name: {friend.firstName}</p>
            <p>Last Name: {friend.lastName}</p>
            <p>Age: {friend.age}</p>
            <p>City: {friend.city}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
