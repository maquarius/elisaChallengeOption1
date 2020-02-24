import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Schedule from "./components/schedule";
import Footer from "./components/footer";

function App() {
  const [channels, setChannels] = useState([]);
  const [liveProgrammes, setLiveProgrammes] = useState([]);

  useEffect(() => {
    fetchChannles();
    fetchLiveProgrammes();
  }, []);

  const fetchChannles = () => {
    fetch("https://rest-api.elisaviihde.fi/rest/epg/channels")
      .then(response => response.json())
      .then(data => {
        setChannels(data.channels);
        console.log(data.channels);
      });
  };

  const fetchLiveProgrammes = () => {
    fetch("https://rest-api.elisaviihde.fi/rest/epg/schedule/live")
      .then(response => response.json())
      .then(data => {
        setLiveProgrammes(data.schedule);
        console.log(data.schedule);
      });
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Homepage
                {...props}
                channels={channels}
                liveProgrammes={liveProgrammes}
              />
            )}
          />
          <Route
            path="/schedule"
            render={props => <Schedule {...props} channels={channels} />}
          />
          <Route return={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
