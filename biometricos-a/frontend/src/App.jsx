import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "./components/welcomePage/WelcomePage";

import Footer from "./components/footer/Footer";
import FinalPage from "./components/finalComponent/FinalPage";
import Lob from "./components/layout/Lob";



const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Lob />
      <Routes location={location} key={location.pathname}>
        {/*Listos*/}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/salidaFace" element={<FinalPage />} />
        
      </Routes>
      <Footer />
    </AnimatePresence>
  );
};

export default App;