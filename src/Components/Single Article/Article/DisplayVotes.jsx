import { useState } from "react";
import { upVote, downVote } from "../../../Utils/updateVotes";

const DisplayVotes = ({ votes, id }) => {
  const [displayVotes, setDisplayVotes] = useState(votes);

  const upvoteHandler = () => {
    setDisplayVotes((curr) => curr + 1);

    upVote(id).catch(() => {
      alert("that didn't work, try again!");
      setDisplayVotes((curr) => curr - 1);
    });
  };

  const downvoteHandler = () => {
    setDisplayVotes((curr) => curr - 1);

    downVote(id).catch(() => {
      alert("that didn't work, try again!");
      setDisplayVotes((curr) => curr + 1);
    });
  };

  return (
    <div className="votes">
      Votes: {displayVotes}
      <button onClick={upvoteHandler} className="upvote">👍</button>
      <button onClick={downvoteHandler} className="downvote">👎</button>
    </div>
  );
};

export default DisplayVotes;
