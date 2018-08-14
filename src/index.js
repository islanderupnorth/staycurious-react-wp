import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import BlogPostPage from "./components/BlogPostPage/BlogPostPage";
import Error from "./components/Error/Error";
import Filter from "./components/Filter/Filter";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Navigation />
            <Switch>
              <Route path="/blog/:slug" component={BlogPostPage} />
              <Route path="/" component={Home} exact />
              <Route path="/filter" component={Filter} />
              <Route component={Error} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
