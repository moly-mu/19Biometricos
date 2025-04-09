import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "./components/welcomePage/WelcomePage";

import Footer from "./components/footer/Footer";
import FinalPage from "./components/finalComponent/FinalPage";
import Lob from "./components/layout/Lob";
import FaceRegister from "./components/formfaceComponent/FormFaceComponent"
import Intermission from "./components/InterPage/IntermissionPage";
import Analyst from "./components/dataAnalyts/DataAnalyst";
import QRWelcome from "./components/cameraComponent/CameraComponentEnter";
import QRFinal from "./components/cameraComponent/CameraComponentExit";
import Subjects from "./components/subjectComponent/SubjectComponent";
import ReporteAsistencia from "./components/ViewMongo/viewDBmongo";


const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Lob />
      <Routes location={location} key={location.pathname}>
        {/*Listos*/}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/salidaFace" element={<FinalPage />} />
        <Route path="/RegistrarRostro" element={<FaceRegister />} />
        <Route path="/Intermedio" element={<Intermission />} />
        <Route path="/AnalisisDatos" element={<Analyst/>}/>
        <Route path="/EntradaQR" element={<QRWelcome/>}/>
        <Route path="/SalidaQR" element={<QRFinal/>}/>
        <Route path="/Subjects" element={<Subjects/>}/>
        <Route path="/ViewDB" element={<ReporteAsistencia />}/>

        
      </Routes>
      <Footer />
    </AnimatePresence>
  );
};

export default App;