// main.js
// This file is responsible for rendering the main React component.

// Get the DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Use ReactDOM to create a root and render the App component
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        // Use React.StrictMode for development to highlight potential issues
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    // Log an error if the root element is not found
    console.error('Failed to find the root element to render the React app.');
}
