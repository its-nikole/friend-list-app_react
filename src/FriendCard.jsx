import React from "react";

const friends = [
    { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
    { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
    { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];


export function FriendCard() {
    return (
        friends.map((friend) => (
            <div className="FriendCard">
                <p>First Name: {friend.firstName}</p>
                <p>Last Name: {friend.lastName}</p>
                <p>Age: {friend.age}</p>
                <p>City: {friend.city}</p>
                <button>Delete</button>
            </div>
        ))
    );
}