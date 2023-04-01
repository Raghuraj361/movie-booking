import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShowSummary = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`).then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);

  return (
    <div className="container bg-gray rounded text-white bg-dark mt-4 p-3">
      <h1>Show Summary</h1>
      <div>
        {[data].map((item) => {
          return (
            <div key={item.id}>
              <div className="mt-4 mb-4">
                <img src={item?.image?.medium} />
              </div>
              <div>{item.name}</div>
              <div>{item.summary}</div>
              <button
                onClick={() => navigate(`/moviebooking/${item.id}`)}
                className="btn btn-primary mt-4"
              >
                Book a Movie Ticket
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowSummary;
