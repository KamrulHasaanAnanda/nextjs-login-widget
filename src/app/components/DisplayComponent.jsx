"use client"

const DisplayComponent = ({ username, onLogout }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-auto mt-8">
        {username ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, {username}!</h2>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-xl text-gray-600 text-center">Please log in to continue</p>
        )}
      </div>
    );
  };

export default DisplayComponent