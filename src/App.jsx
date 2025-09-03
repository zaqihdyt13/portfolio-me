import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer contactOpen={contactOpen} setContactOpen={setContactOpen} />
    </div>
  );
}

export default App;
