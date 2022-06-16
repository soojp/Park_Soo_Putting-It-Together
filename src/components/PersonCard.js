import { useState } from "react";

const PersonCard = (props) => {
  const [updated, setUpdated] = useState(props.age);

  const updateAge = () => {
    setUpdated(updated + 1);
  };
  return (
    <div className="card">
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {updated}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={updateAge}>
        Birthday Button for {props.firstName} {props.lastName}
      </button>
    </div>
  );
};

export default PersonCard;