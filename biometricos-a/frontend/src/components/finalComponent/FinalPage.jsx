
import FaceRecognitionExit from "../faceComponent/FaceComponentExit";
import './FinalPage.css'

const FinalPage = () => {

  return (


    <div className='app-container-final'>
      <div className="title-fn">
        <h1>Sistema de control de acceso Salida</h1>
      </div>

      {/*Camara */}
      <div className="camera-container">
        <FaceRecognitionExit mode="salida"/>
      </div>
    </div>
  );
};

export default FinalPage;
