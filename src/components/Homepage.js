import React, { useState, useEffect } from "react";
import Channelcards from "./channelCards";
import SearchBar from "./searchbar";

function Homepage() {
  const [livePrograms, setLivePrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = () => {
    fetch("https://rest-api.elisaviihde.fi/rest/epg/channels")
      .then(response => response.json())
      .then(data => {
        setLivePrograms(data.channels);
        console.log(data.channels);
      });
  };

  return (
    <div>
      <SearchBar data={livePrograms} />
      <Channelcards data={livePrograms} changeData={setLivePrograms} />
    </div>
  );
}

export default Homepage;
