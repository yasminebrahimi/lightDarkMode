// Import the useTheme hook from the ThemeContext file
// This hook provides access to the current theme and a function to update it
import { useTheme } from "../context/ThemeContext";

// Define and export a functional component named Button
export default function Button({ children }) {
  // Use the useTheme hook to access the current theme and the setTheme function
  const { theme, setTheme } = useTheme();

  // Construct the class name based on the current theme
  // This allows the button's styling to change according to the theme
  const className = "button-" + theme;

  // Render a button element with the dynamic className
  // The button will display any children passed to it
  return <button className={className}>{children}</button>;
}
