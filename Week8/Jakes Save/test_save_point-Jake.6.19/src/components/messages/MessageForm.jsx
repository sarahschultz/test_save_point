import React, { useState } from "react";

function MessageForm({ recipient, loggedInUser }) {
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    // Perform the API call to send the message to the recipient
    // You can use the fetch or axios library to send the POST request

    // Example using fetch:
    fetch("https://strangers-things.herokuapp.com/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message: {
          content: message,
          toUser: recipient,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success or error response
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });

    // Clear the message input field
    setMessage("");
  };

  return (
    <div>
      <h3>Send a Message</h3>
      <form onSubmit={handleMessageSubmit}>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message..."
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default MessageForm;
