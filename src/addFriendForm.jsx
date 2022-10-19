import React from "react";

export function AddFriendForm() {
    function handleSubmit(e) {
        e.preventDefault()
        alert("Friend added to the list!")
    }

    return (
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
    )
}