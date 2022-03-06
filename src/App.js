import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetail from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";
import AllQuotes from "./Pages/AllQuotes";
import Layout from "./components/Layout/Layout";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteID">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
          {/* we put the not found out of the switch, meaning that if no pages matches the switch condition in routes, then Not Found will appear */}
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
