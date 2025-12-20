export default function TestRoute() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Test Route Works!</h1>
        <p className="text-gray-600 mb-4">Basic routing is functioning.</p>
        <a href="/portfolio/1" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Try Portfolio Route
        </a>
      </div>
    </div>
  );
}