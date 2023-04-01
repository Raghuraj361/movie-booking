import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const API = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error(error));
  };

  const searchApi = (searchInput) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then((response) => response.json())
    .then((data) => setShows(data))
    .catch((error) => console.error(error));
  }

  const searchData = () => {
    searchApi(searchInput);
  };
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
     
  useEffect(() => {
    API();
  }, []);

  return (
    <div className="container  ">
      <div className="mt-4 mb-4 ">
        <input
          type="text"
          placeholder="search....."
          className="control w-50  p-2 rounded "
          onChange={handleSearchInput}
        />
        <button className="btn btn-secondary p-2 mr-3" onClick={searchData}>
          Search
        </button>
      </div>
      <div className="row">
        {shows?.map((item) => (
         //  console.log(item?.show?.image?.medium)
          <div className="col-md-3" key={item.show.id}>
            <div className="card mb-4">
              <div className="card-body bg-gray rounded text-white bg-dark">
                <div className="d-flex justify-content-center mt-4 mb-4">
                  <img src={item?.show?.image?.medium} />
                </div>
                <h5 className="card-title">{item.show.name}</h5>
                <div className="d-flex justify-content-between ">
                <p className="card-text">{item.show.genres}</p>
                <p className="card-text">{item.show.language}</p>
                </div>
               
                <Link to={`/show/${item.show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
