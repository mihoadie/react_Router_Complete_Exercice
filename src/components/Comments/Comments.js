import { useState, useEffect, useCallback } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
const Comments = (props) => {
  const { quoteID: ID } = props;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments); // destructuring to get elements from the personal hook and api call

  useEffect(() => {
    sendRequest(ID);
  }, [ID, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const getCommentsHandler = useCallback(() => {
    sendRequest(ID);
  }, [sendRequest, ID]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedComments) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === "completed" &&
    (loadedComments.length === 0 || !loadedComments)
  ) {
    comments = (
      <div className="centered">
        <p>No Comments were added yet</p>
      </div>
    );
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm IDQuote={ID} onAddedComment={getCommentsHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
