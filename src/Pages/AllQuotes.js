import React, { useEffect } from "react";
import QuoteList from "./../components/Quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "./../components/Quotes/NoQuotesFound";

function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true); // get data from the request by desctructiing

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
}

export default AllQuotes;

/*

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Mike",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Niklas",
    text: "Learning React is amazing",
  },
  {
    id: "q3",
    author: "Thibault",
    text: "Learning React is nice",
  },
  {
    id: "q4",
    author: "Marilou",
    text: "Learning React is OK",
  },
];

*/
