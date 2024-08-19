// Import the main stylesheet for the application
import "./App.css";

// Import the Form component, which likely contains a form for user input
import Form from "./components/Form";

// Import the ThemeProvider component and the useTheme hook from the ThemeContext
import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Import the ToggleTheme component, which allows users to switch themes
import ToggleTheme from "./components/ToggleTheme";

// Define and export the main component for the application
export default function MyApp() {
  return (
    // Wrap the application components with the ThemeProvider
    // This provides theme context to all components within it
    <ThemeProvider>
      {/* Render the Form component */}
      <Form />
      {/* Render the ToggleTheme component */}
      {/* This component allows users to toggle between light and dark themes */}
      <ToggleTheme />
    </ThemeProvider>
  );
}
