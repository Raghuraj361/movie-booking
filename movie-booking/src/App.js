import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ShowSummary from "./components/showSummary/showSummary";
import MovieBooking from "./components/MovieBooking/MovieBooking";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowSummary/>}/>
          <Route path="/moviebooking/:id" element={<MovieBooking />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
