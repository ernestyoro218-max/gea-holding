import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App.jsx";

// Surveillance des erreurs en production (Sentry) — envoie une alerte
// dès qu'une erreur JavaScript survient chez un vrai visiteur.
Sentry.init({
  dsn: "https://d2191f31e23ec92e9738917493190dfb@o4511892759642112.ingest.de.sentry.io/4511892818624592",
  sendDefaultPii: false, // ne transmet aucune donnée personnelle des visiteurs par défaut
});

// Écran de secours affiché si l'application plante, à la place d'un écran blanc.
function EcranErreur(){
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 14, padding: 24, textAlign: "center",
      fontFamily: "system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif",
      background: "#F3F8F4", color: "#16201A",
    }}>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#13502E" }}>
        Un incident est survenu
      </div>
      <div style={{ fontSize: 14, color: "#3A423D", maxWidth: 380 }}>
        Nous en avons été informés automatiquement. Merci de recharger la page ;
        si le problème persiste, contactez-nous sur WhatsApp.
      </div>
      <button onClick={() => window.location.reload()} style={{
        background: "#13502E", color: "#fff", border: "none", borderRadius: 10,
        padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
      }}>
        Recharger la page
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<EcranErreur/>}>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);
