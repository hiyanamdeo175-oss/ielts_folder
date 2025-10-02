const features = [
  { title: "Speaking Practice", desc: "Improve fluency with 1-on-1 speaking sessions." },
  { title: "Mock Tests", desc: "Simulate real IELTS exams with full-length tests." },
  { title: "AI Band Score", desc: "Get instant feedback with AI-powered scoring." },
  { title: "Writing Feedback", desc: "Receive expert review of your essays." },
];

export default function Features() {
  return (
    <section className="py-16 bg-white px-6 md:px-16">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Why Choose Us?
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-blue-600">{f.title}</h4>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}