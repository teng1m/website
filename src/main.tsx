import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

document.body.style.backgroundImage = `url('/backgrounds/w2.jpg')`;

const navSound = new Audio("/nav.wav");
document.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("button, a")) {
        navSound.currentTime = 0;
        navSound.play().catch(() => {});
    }
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
