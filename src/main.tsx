import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set default zoom to 90% on page load (works in Chrome/Edge/Safari)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Only set zoom if user hasn't manually changed it
  const savedZoom = sessionStorage.getItem('userZoom');
  if (!savedZoom || savedZoom === 'default') {
    // Use CSS zoom property (supported in Chrome, Edge, Safari)
    // For Firefox, this will be ignored but spacing fix will still work
    document.documentElement.style.zoom = '0.9';
    document.body.style.zoom = '0.9';
    sessionStorage.setItem('userZoom', 'default');
  }
}

createRoot(document.getElementById("root")!).render(<App />);
