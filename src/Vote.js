import React, { useState } from "react";
import "./Vote.scss";

import option1 from "./assets/fries1.jpg";
import option2 from "./assets/fries2.jpg";
import logo from "./assets/DeeJaysLogo.png";

function Vote() {
  const [vote, setVote] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleVoteClick = (vote) => {
    setVote(vote);
    setShowConfirmation(true);
    console.log(`You voted for ${vote}`);
  };

  return (
    <>
      <div className="vote">
        <header></header>
        <VoteCard option="one" img={option1} handleClick={handleVoteClick} />
        <VoteCard option="two" img={option2} handleClick={handleVoteClick} />
        <footer>
          <img src={logo} alt="DeeJay's Logo" className="vote__logo" />
        </footer>
      </div>
      <VoteConfirmation vote={vote} />
    </>
  );
};

const VoteCard = ({
  option,
  img,
  handleClick
}) => {
  return (
    <div 
      className="vote-card" 
      onClick={() => handleClick(option)}
    >
      <img 
        src={img} 
        alt={`Option ${option}`} 
        className="vote-card__img"
      />
    </div>
  )
};

const VoteConfirmation = ({vote}) => {
  return (
    <div className={`vote-confirmation ${vote ? 'show' : ''}`}>
      <p>Thank you!</p>
      <p>You voted for {vote}</p>
    </div>
  )
};

export default Vote;