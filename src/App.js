import "./App.scss";
import Header from "./components/Header/Header";
import "../src/styles/partials/_global.scss";
import React from "react";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Upload from "./pages/Upload/Upload";

class App extends React.Component {
  state = {
    upload: false,
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/videos/:id" component={MainContent} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
