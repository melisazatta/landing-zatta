import ErrorImg from "../assets/Error.png"

import { Link } from "react-router-dom"

import '../assets/css/Error.css'


const Error = () => {
    return (
        <div className="error-page">

      <img 
        src={ErrorImg} 
        alt="Error" 
        className="error-img"/>

      <div className="error-actions">
        <Link to="/" className="btn-back">Volver al inicio</Link>
      
      </div>
      </div>
    )

}

export default Error