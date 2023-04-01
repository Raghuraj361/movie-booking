import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numTickets, setNumTickets] = useState("");
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`).then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      movie: data.name,
      name,
      email,
      phone,
      numTickets,
    };
    setName("");
    setEmail("");
    setPhone("");
    setNumTickets("");
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    alert("Booking successful!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-cente mt-4">
      <form
        onSubmit={handleFormSubmit}
        className="row w-50 shadow p-3 mb-5 bg-white rounded mt-4"
      >
        <h2>Name: {data.name}</h2>
        <label htmlFor="name">Name:</label>
        <input
          className="form-control "
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          className="form-control"
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="numTickets">Number of tickets:</label>
        <input
          className="form-control"
          type="number"
          id="numTickets"
          value={numTickets}
          onChange={(e) => setNumTickets(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary mt-4">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default MovieBooking;
