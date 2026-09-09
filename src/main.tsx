import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
// Global CSS samles i index.css og lastes inn én gang her.
import "./styles/index.css";

// React kobles til <div id="root"> i index.html, og App blir startpunktet for hele siden.
createRoot(document.getElementById("root")!).render(<App />);
