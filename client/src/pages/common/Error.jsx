import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
            <img
                src={'https://http.cat/404'}
                alt="404"
                className="w-72 mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-500 mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-200"
            >
                Go Back Home
            </Link>
        </div>
    );
}

export default Error