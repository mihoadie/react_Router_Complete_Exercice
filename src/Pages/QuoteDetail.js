import React, { useEffect } from "react";
import {
  useParams,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Comments from "./../components/Comments/Comments";
import HighlightedQuote from "./../components/Quotes/HighlightedQuote";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "./../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/Quotes/NoQuotesFound";

function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();
  const ID = params.quoteID; // confere App.js with the dynamic route parameter

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  console.log(match);

  useEffect(() => {
    sendRequest(ID);
  }, [sendRequest, ID]);

  if (status === "pending") {
    return (
      <div className="centered ">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/quotes/${ID}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${ID}/comments`}>
            {" "}
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${ID}/comments`}>
        {/* <Route path={`${match.path}/comments`}> */}{" "}
        {/* THIS IS THE EXAMPLE USING USEROUTEMATCH  */}
        <Comments quoteID={ID} />
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${ID}`}>
            {" "}
            Hide Comments
          </Link>
        </div>
      </Route>
    </React.Fragment>
  );
}

export default QuoteDetail;
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

  const quote = DUMMY_QUOTES.find((element) => element.id === ID);

*/
