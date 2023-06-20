import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageDetails from "../messages/MessageDetails";

function AccountMessages({ isLoggedIn, loggedInUser }) {
  const [hasMessagesFromStrangers, setHasMessagesFromStrangers] = useState(false);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/#GET-/messages"
        );
        const data = await response.json();

        if (data.success) {
          const messages = data.data.messages;
          const hasStrangerMessages = messages.some(
            (message) => message.fromUser !== loggedInUser
          );
          setHasMessagesFromStrangers(hasStrangerMessages);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMessages();
  }, [loggedInUser]);

  return (
    <div>
      <h2>Account Home</h2>
      {isLoggedIn && loggedInUser && (
        <>
          {hasMessagesFromStrangers ? (
            <Link to="/messages">
              <button>See Messages from Strangers:</button>
            </Link>
          ) : (
            <p>Sorry Steve-o, no messages from strangers.</p>
          )}
        </>
      )}
      {!isLoggedIn && <p>Please log in to view your account.</p>}
    </div>
  );
}

export default AccountMessages;
