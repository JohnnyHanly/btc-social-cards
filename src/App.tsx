import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import SocialCards from "pages/SocialCards/SocialCards";
import { store } from "redux/store";
import * as S from "./styles";

function App() {
  useEffect(() => {});
  return (
    <Router>
      <Provider store={store}>
        <S.AppContainer>
          <Switch>
            <Route path="/">
              <SocialCards />
            </Route>
          </Switch>
        </S.AppContainer>
      </Provider>
    </Router>
  );
}

export default App;
