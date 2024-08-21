import { useTheme } from "../context/ThemeContext";

// Define a functional component named Panel
export default function Panel({ title, children }) {
  // Consume the theme context value using the useTheme hook
  // This hook provides access to the current theme and a function to update it
  const { theme, setTheme } = useTheme();
  
  // Construct a CSS class name based on the current theme
  // This allows for dynamic styling depending on the theme
  const className = "panel-" + theme;
  
  return (
    // Render a section element with the dynamically constructed className
    // The section element will have styling based on the current theme
    <section className={className}>
      {/* Render the title passed as a prop inside an h1 element */}
      <h1>{title}</h1>
      {/* Render any child components or elements passed to the Panel */}
      {children}
    </section>
  );
}
