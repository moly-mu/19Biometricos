import { useState, useEffect, useRef } from 'react'; 
import './WelcomePage.css'
import FaceRecognitionEnter from '../faceComponent/FaceComponentEnter';
import Spline from '@splinetool/react-spline';
import gsap from "gsap";

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const splineRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cameraActive && splineRef.current && cameraRef.current) {
      gsap.fromTo(splineRef.current, 
        { scale: 1, x: 0, y: 0 }, 
        { scale: 0.5, x: -780, y: 0, duration: 2, ease: "power3.inOut" }
      );

      gsap.fromTo(cameraRef.current, 
        { scale: 0.5, x: -10000, y: 0 }, 
        { scale: 1, x: 0, y: 0, duration: 2, ease: "power3.inOut" }
      );
    }
  }, [cameraActive]);

  const activateCamera = () => {
    setCameraActive(true);
  }

  return (
    <div className={`app-container-welcome-w ${cameraActive ? 'camera-active' : ''}`}> 
      <main className="main-content-w">
        <h1 className={`text-animation ${isVisible ? 'visible' : ''}`}>IUDC Sistema de Control <br></br>de Acceso Entrada</h1>
        <h2 className={`title text-animation ${isVisible ? 'visible' : ''}`}>Reconocimiento Facial</h2>

        <button onClick={activateCamera} className="camara-button">
          Activar Cámara
        </button>

        <div className={`spline-container ${cameraActive ? 'camera-active' : ''}`}>
          <Spline
            scene="https://prod.spline.design/CcH-Q2b6rx5yB0n3/scene.splinecode"
            className="spline-scene"
            ref={splineRef}
          />
        </div>
      
        <div className="face-recognition-container-w" ref={cameraRef}>
          <FaceRecognitionEnter mode="Entrada" />
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
