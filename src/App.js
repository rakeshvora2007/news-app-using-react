import React from "react";
import { ArticleList } from "./components/ArticleList/ArticleList";
import { SingleArticle } from "./components/SingleArticle/SingleArticle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticleDataState from "./context/articleData/articleDataState"

function App() {
  return (
    <ArticleDataState>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ArticleList}></Route>
          <Route path="/article/:id" component={SingleArticle}></Route>
        </Switch>
      </div>
    </Router>
    </ArticleDataState>
  );
}

export default App;
