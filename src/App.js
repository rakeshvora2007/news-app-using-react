import React from "react";
import { ArticleList } from "./components/ArticleList/ArticleList";
import { SingleArticle } from "./components/SingleArticle/SingleArticle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ArticleList}></Route>
          <Route path="/article/:id" component={SingleArticle}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
