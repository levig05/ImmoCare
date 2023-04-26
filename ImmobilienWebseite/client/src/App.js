import "./App.css";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import PropertyForm from "./Reac";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Overview />
              </div>
            }
          />
          <Route exact path="/Reac" element={<PropertyForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
