const testimonials = [
  { name: "Amit Kumar", review: "Scored Band 8.0! The mock tests were exactly like the real exam." },
  { name: "Sarah Lee", review: "Amazing teachers and great feedback on my writing. Highly recommend!" },
  { name: "Rajesh Sharma", review: "The AI band score helped me track my progress every week." },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Students Say
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 bg-white shadow-md rounded-xl">
            <p className="text-gray-700 italic">“{t.review}”</p>
            <h4 className="mt-4 font-semibold text-blue-600">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}