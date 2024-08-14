import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alerts.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, SetAlert] = useState(null);
  const [count, setCount] = useState(0);

  // darkMode function
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      //document.title = "TextUtils - Dark Mode";
      // setInterval(() => {}, interval);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      //document.title = "TextUtils - Light Mode";
    }
  };

  // SetAlert
  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
  };

  return (
    <>
      <Router>
        <div style={{ marginTop: "70px " }}></div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - Convert to UpperCase and more..."
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      {/* <About></About> */}
    </>
  );
}

export default App;
