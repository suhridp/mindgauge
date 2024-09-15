import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation(); // Hook to get the current location

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-blue-500 dark:text-blue-400 "
      : "text-gray-800 dark:text-gray-300";
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        MindGauge
      </h1>
      <div className="flex items-center space-x-6">
        <Link className={getLinkClass("/")} to="/">
          Home
        </Link>
        <Link className={getLinkClass("/about")} to="/about">
          About
        </Link>
        <Link className={getLinkClass("/detection")} to="/detection">
          Detection
        </Link>
        <Link
          className={getLinkClass("/posture-correction")}
          to="/posture-correction"
        >
          Posture Correction
        </Link>
        <Link className={getLinkClass("/ai-chatbot")} to="/ai-chatbot">
          AI Chat
        </Link>
        <Link
          className={getLinkClass("/workout-statistics")}
          to="/workout-statistics"
        >
          Workout Stats
        </Link>
        <Link
          className={getLinkClass("/real-time-workout")}
          to="/real-time-workout"
        >
          Real-Time Workout
        </Link>
        <Link className={getLinkClass("/contact")} to="/contact">
          Contact
        </Link>
        <button
          className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired, // toggleDarkMode must be a function
  darkMode: PropTypes.bool.isRequired, // darkMode must be a boolean
};

export default Navbar;
