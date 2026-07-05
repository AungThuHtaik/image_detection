import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
        <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
