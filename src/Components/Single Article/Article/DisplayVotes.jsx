import { useState } from "react";
import { upVote, downVote } from "../../../Utils/updateVotes";

const DisplayVotes = ({ votes, id }) => {
  const [displayVotes, setDisplayVotes] = useState(votes);
  const [canUpvote, setCanUpvote] = useState(true);
  const [canDownvote, setCanDownvote] = useState(true);

  const upvoteHandler = () => {
    if (canUpvote) {
      setDisplayVotes((curr) => curr + 1);
      setCanUpvote(false);
      setCanDownvote(true);

      upVote(id).catch(() => {
        alert("that didn't work, try again!");
        setDisplayVotes((curr) => curr - 1);
      });
    } else {
      alert("you can only up/down vote once");
    }
  };

  const downvoteHandler = () => {
    if (canDownvote) {
      setDisplayVotes((curr) => curr - 1);
      setCanDownvote(false);
      setCanUpvote(true);

      downVote(id).catch(() => {
        alert("that didn't work, try again!");
        setDisplayVotes((curr) => curr + 1);
      });
    } else {
      alert("you can only up/down vote once");
    }
  };

  return (
    <div className="votes">
      Votes: {displayVotes}
      <button onClick={upvoteHandler} className="upvote">
        👍
      </button>
      <button onClick={downvoteHandler} className="downvote">
        👎
      </button>
    </div>
  );
};

export default DisplayVotes;
