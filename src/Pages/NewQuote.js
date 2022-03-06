import React, { useEffect } from "react";
import QuoteForm from "./../components/Quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote); // extracting data through destructuring

  const history = useHistory(); // we want to make the user navigate progamatically regarding an action he made.

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    // useHistory contains various actions, including PUSH (allows to go back with the back button on the browser)
    // or REPLACE (back option is not possible!)
    const Quote = {
      author: quoteData.author,
      text: quoteData.text,
    };
    sendRequest(Quote);
    // history.push("/quotes");
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
