// App.jsx
// This is the main React component for our application.

const { useState } = React;

function App() {
    // State to hold a counter value
    const [count, setCount] = useState(0);

    // Function to handle the button click and increment the count
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        // The main container for the entire application, using Tailwind classes
        <div className="flex justify-center items-center h-screen p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Hello, React!</h1>
                <p className="text-gray-600 mb-6">
                    You've clicked the button <span className="font-semibold text-indigo-600">{count}</span> times.
                </p>
                <button
                    onClick={handleIncrement}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
                >
                    Click Me
                </button>
            </div>
        </div>
    );
}

// Export the App component as default (or in this case, implicitly)
