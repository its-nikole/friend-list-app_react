import React from "react";
import { useState } from "react";

const friends = [
  { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

const initialFormData = { firstName: "", lastName: "", age: "", city: "" };

export function App() {

  const [formState, setFormState] = useState(initialFormData);

  const [friendsState, setFriendsState] = useState(friends);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Friend added to the list!");
  
    const newFriend = { firstName, lastName, age, city };
  
    console.log(newFriend);
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add New Friend</legend>
            <input
              id="firstName"
              value={formState.firstName}
              placeholder="First Name"
              onChange={(e) => setFormState(e.target.value, e.target.id)}
            />
            <input
              id="lastName"
              value={formState.lastName}
              placeholder="Last Name"
              onChange={(e) => setFormState(e.target.value, e.target.id)}
            />
            <input id="age" value={formState.age} placeholder="Age" onChange={(e) => setFormState(e.target.value, e.target.id)}/>
            <input id="city" value={formState.city} placeholder="City" onChange={(e) => setFormState(e.target.value, e.target.id)}/>
            <button>Add Friend</button>
          </fieldset>
        </form>
      </div>
      <div className="friends-container">
        {friendsState.map((friend) => (
          <div className="FriendCard" key={friend.firstName}>
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
