import React, { useState, useEffect } from "react";

function MessageDetails({ messageId, isLoggedIn, loggedInUser }) {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/#GET-/messages/${messageId}`
        );
        const data = await response.json();

        if (data.success) {
          setMessage(data.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMessage();
  }, [messageId]);

  if (!message) {
    return <h3>Loading...</h3>;
  }

  // Check if the logged-in user matches the message's fromUser
  const isUserMessage = isLoggedIn && message.fromUser === loggedInUser;

  return (
    <div>
      <h2>Message Details</h2>
      <p>ID: {message._id}</p>
      <p>Content: {message.content}</p>
      <p>Post: {message.post}</p>
      <p>From User: {message.fromUser}</p>
      <p>Created At: {message.createdAt}</p>
      <p>Updated At: {message.updatedAt}</p>

      {isUserMessage && <p>This message is from the logged-in user.</p>}
      {!isUserMessage && <p>You are not authorized to view this message.</p>}
    </div>
  );
}

export default MessageDetails;
