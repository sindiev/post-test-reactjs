import logo from "./logo.svg";
import "./App.css";
import "./assets/style/nav.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Form from "./pages/Form";
import AboutUs from "./pages/AboutUs";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <header className="nav-header">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bookList">Books</Link>
            </li>
            <li>
              <Link to="/form">Sell Your Book</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/form" element={<Form />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={"Not Found"} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
