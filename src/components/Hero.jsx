export default function Hero() {
  return (
    <section className="bg-gray-50 py-12 md:py-20 flex flex-col md:flex-row items-center px-6 md:px-16">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Achieve Your Dream IELTS Score
        </h2>
        <p className="text-gray-600 text-lg">
          Join thousands of successful students who trusted us for their IELTS preparation.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <img
          src="https://source.unsplash.com/600x400/?study,students"
          alt="IELTS preparation"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}