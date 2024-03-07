import React from "react";
import "./Vote.scss";

function Vote() {
  const [vote, setVote] = React.useState(null);

  const handleVoteClick = (vote) => {
    setVote(vote);
    console.log(`You voted for ${vote}`);
  };

  return (
    <div className="vote">
      <VoteCard 
        option="one"
        background="black"
        handleClick={handleVoteClick}
      />
      <VoteCard 
        option="two"
        background="white"
        handleClick={handleVoteClick}
      />
    </div>
  );
};

const VoteCard = ({
  option,
  background,
  handleClick
}) => {
  return (
    <div 
      className="vote-card" 
      style={{backgroundColor: background}}
      onClick={() => handleClick(option)}
    >
    </div>
  )
};

const VoteConfirmation = ({vote}) => {
  return (
    <div className="vote-confirmation">
      <p>You voted for {vote}</p>
    </div>
  )
};

export default Vote;