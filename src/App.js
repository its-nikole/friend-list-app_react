import React from "react";
import { useState } from "react";

const friends = [
  { id: "23", firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  {
    id: "43",
    firstName: "Maria",
    lastName: "Hudghes",
    age: 28,
    city: "Siauliai",
  },
  {
    id: "56",
    firstName: "Thomas",
    lastName: "Muiller",
    age: 33,
    city: "Vilnius",
  },
];

const initialFormData = { firstName: "", lastName: "", age: "", city: "" };

export function App() {
  const [formState, setFormState] = useState(initialFormData);

  const [friendsState, setFriendsState] = useState(friends);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Friend added to the list!");

    const newFriend = {
      id: String(Math.random()),
      firstName: formState.firstName,
      lastName: formState.lastName,
      age: formState.age,
      city: formState.city,
    };

    setFriendsState([...friendsState, newFriend]);
    setFormState(initialFormData);

    console.log(newFriend);
  };

  const handleDelete = (e) => {
    const filteredFriends = friends.filter((friend) => friend.id !== e);
    setFriendsState(filteredFriends);
  };

  const onChangeFunc = (e) => {
    const inputValue = e.target.value;
    const inputId = e.target.id;

    setFormState({ ...formState, [inputId]: inputValue });
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
              onChange={onChangeFunc}
              required
            />
            <input
              id="lastName"
              value={formState.lastName}
              placeholder="Last Name"
              onChange={onChangeFunc}
              required
            />
            <input
              id="age"
              value={formState.age}
              placeholder="Age"
              onChange={onChangeFunc}
              required
            />
            <input
              id="city"
              value={formState.city}
              placeholder="City"
              onChange={onChangeFunc}
              required
            />
            <button>Add Friend</button>
          </fieldset>
        </form>
      </div>
      <div className="friends-container">
        {friendsState.map((friend) => (
          <div className="FriendCard" key={friend.id}>
            <p>First Name: {friend.firstName}</p>
            <p>Last Name: {friend.lastName}</p>
            <p>Age: {friend.age}</p>
            <p>City: {friend.city}</p>
            <button onClick={handleDelete}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
