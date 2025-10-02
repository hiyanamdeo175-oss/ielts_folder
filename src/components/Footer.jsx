export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between">
        <p>&copy; 2025 IELTS Academy. All rights reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}