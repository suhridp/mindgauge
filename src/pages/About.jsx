const About = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center p-10 min-h-screen bg-gradient-to-r from-black to-navy text-white">
        <h1 className="text-5xl font-bold mb-4">About MindGauge</h1>
        <p className="text-lg mb-8">
          Discover our mission, philosophy, and the team dedicated to
          transforming your well-being.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At MindGauge, we believe that true well-being comes from a holistic
            approach that integrates mental, physical, and emotional health. Our
            innovative solutions harness the power of computer vision and
            personalized insights to empower you to take control of your health
            journey. We are committed to providing you with the tools and
            support needed to achieve a balanced and fulfilling life.
          </p>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-20 bg-gray-200 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Our Motto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Empowering You to Live Your Best Life - We are dedicated to creating
            a future where technology and wellness come together to enhance
            every aspect of your life. Our goal is to help you unlock your full
            potential and live your best life, every day.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150" // Replace with team member's image
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Founder & CEO</p>
              <p className="text-gray-500 dark:text-gray-400">
                Passionate about integrating technology with health to create
                transformative solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150" // Replace with team member's image
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                Jane Smith
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Chief Technology Officer
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Expert in computer vision technology, driving innovation to
                enhance user experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150" // Replace with team member's image
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                Alex Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Head of Product Design
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Designing intuitive interfaces to ensure a seamless user
                experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150" // Replace with team member's image
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                Alex Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Head of Product Design
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Designing intuitive interfaces to ensure a seamless user
                experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150" // Replace with team member's image
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                Alex Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Head of Product Design
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Designing intuitive interfaces to ensure a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
