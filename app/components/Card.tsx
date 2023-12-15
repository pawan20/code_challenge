import React, { useState } from "react";
import styles from "../page.module.css";

type Card = {
  participantNumber: String;
  participantId: number;
  firstName: string;
  lastName: string;
  state: string;
  address: String;
  city: String;
  zip: String;
  email: String;
};

const ParticipantCard: React.FC<Card> = ({
  participantNumber,
  participantId,
  firstName,
  lastName,
  state,
  address, city, zip, email
}) => {
  const [expanded, setExpanded] = useState(false);  
  return (    
    <>
      <div
        key={participantId}
        className={styles.card}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <h3>#{participantNumber}</h3>
        <p>Name: {firstName + ' ' + lastName} </p>
        <p>State: {state}</p>

        {expanded && (
         <>
         <p>Address: {address}</p>
         <p>City: {city}</p>
         <p>Zip: {zip}</p>
         <p>Email: {email}</p>
         </>
        )}
      </div>
    </>
  );
};

export default ParticipantCard;
