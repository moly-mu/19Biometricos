import { useState, useEffect } from 'react';
import FaceRecognitionEnter from '../faceComponent/FaceComponentEnter';
import './WelcomePage.css'

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(false);  // Estado para la animación

  // Activar la animación cuando el componente se monte
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);  // Después de un pequeño retraso, activamos la animación
    }, 200);  // Ajusta este tiempo según prefieras

    return () => clearTimeout(timer);  // Limpiar el temporizador si se desmonta el componente
  }, []);

  return (
    <div className={`app-container-welcome-w`}> 
      <main className="main-content-w">
      <h1 className={`text-animation ${isVisible ? 'visible' : ''}`}>IUDC Sistema de Control <br></br>de Acceso Entrada</h1>
        {/* Aplicamos la clase de animación a los textos */}

        {/* Contenedor centrado para FaceRecognitionEnter */}
        <div className="face-recognition-container-w">
        <FaceRecognitionEnter mode="Entrada" />
        </div>
        <h2 className={`title text-animation ${isVisible ? 'visible' : ''}`}>Reconocimiento <br></br>Facial</h2>
      </main>
    </div>
  );
};

export default WelcomePage;


     