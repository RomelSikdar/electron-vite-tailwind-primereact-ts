import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "./App";
import "./styles/main.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <PrimeReactProvider
      value={{
        ripple: true,
      }}
    >
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
