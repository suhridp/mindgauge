import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-start justify-center text-start p-10 px-20 min-h-screen bg-gradient-to-r from-black to-navy text-white">
        <h1 className="text-6xl font-bold mb-4">
          Transform Your Well-being <br /> with MindGauge
        </h1>
        <p className="text-lg mb-8 px-1">
          Unlock your potential with MindGauge: <br /> Track fitness, correct
          posture, and manage stress with personalized insights.
        </p>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Watch Video
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Personalized Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get tailored recommendations for fitness, posture, and stress
                management based on real-time data.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Feedback</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive instant feedback during workouts and daily activities to
                improve your well-being.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Chatbot</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Chat with our AI for personalized advice on muscle strain and
                effective stretching exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-200 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Have questions or need support? Feel free to reach out to us!
          </p>
          <a
            href="mailto:support@mindgauge.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-800 dark:text-gray-300"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <video
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              src="https://www.example.com/your-video.mp4" // Replace with your video URL
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
