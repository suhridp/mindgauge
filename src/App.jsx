import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Detection from "./pages/Detection";
import Contact from "./pages/Contact";
import PostureCorrection from "./pages/PostureCorrection";
import RealTimeWorkout from "./pages/RealTimeWorkout";
import TherapistAIChat from "./pages/TherapistAIChat";
import WorkoutStatistics from "./pages/WorkoutStatistics";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Set dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`bg-gradient-dark min-h-screen ${
        darkMode ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detection" element={<Detection />} />
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/posture-correction" element={<PostureCorrection />} />
          <Route path="/real-time-workout" element={<RealTimeWorkout />} />
          <Route path="/ai-chatbot" element={<TherapistAIChat />} />
          <Route path="/workout-statistics" element={<WorkoutStatistics />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
