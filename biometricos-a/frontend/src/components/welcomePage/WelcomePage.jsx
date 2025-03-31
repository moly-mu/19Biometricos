import { useState, useEffect, useRef } from 'react'; 
import './WelcomePage.css';
import FaceRecognitionEnter from '../faceComponent/FaceComponentEnter';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap'; // Importar GSAP

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(false);  // Estado para la animación de texto
  const splineRef = useRef(null); // Referencia para el contenedor de Spline
  const cameraRef = useRef(null); // Referencia para la cámara o componente relacionado

  // Activar la animación cuando el componente se monte
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);  // Después de un pequeño retraso, activamos la animación de texto
    }, 200);

    // Animación con GSAP
    setTimeout(() => {
      // Desvanecer la escena de Spline
      gsap.to(splineRef.current, {
        opacity: 0, 
        duration: 3, 
        ease: "power2.inOut"
      });

      // Después de 10 segundos, mostrar la cámara
      setTimeout(() => {
        gsap.to(cameraRef.current, {
          opacity: 1,
          duration: 3,
          ease: "power2.inOut"
        });
      }, 0); // Aparece la cámara 1 segundo después del desvanecimiento de Spline

    }, 1500); // Iniciar la animación después de 10 segundos

    return () => clearTimeout(timer);  // Limpiar el temporizador si se desmonta el componente
  }, []);

  return (
    <div className="app-container-welcome">
      <h1 className={`text-animation ${isVisible ? 'visible' : ''}`}>IUDC Sistema de Control <br />de Acceso Entrada</h1>
      
      <main className="main-content">
        
        <div className="face-recognition-container" ref={cameraRef} style={{ opacity: 0 }}>
          <FaceRecognitionEnter mode="Entrada" />
        </div>

        <div className="spline-container" ref={splineRef}>
          <Spline 
            scene="https://prod.spline.design/3GLCbYSz1S9IzbLc/scene.splinecode" className="spline-scene" 
          />
        </div>
        
        <h2 className={`title text-animation ${isVisible ? 'visible' : ''}`}>Reconocimiento Facial</h2>
      </main>
    </div>
  );
};

export default WelcomePage;
