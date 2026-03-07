import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from "react-bootstrap/Button";

import { addDoc, collection } from "firebase/firestore"
import { db } from "../service/firebase"

import Swal from 'sweetalert2';

const Contacto = () => {

    const [consulta, setConsulta] = useState({ name: "",
       lastname: "",
       email: "",
       message: ""})

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const consultaData = (e) => {
        setConsulta(
            {
                ...consulta,
                [e.target.name]: e.target.value
            }
        )
        setError(null)
    }

   const enviarConsulta = async (e) => {
    e.preventDefault()


  if(!consulta.name || !consulta.lastname || !consulta.email || !consulta.message){
     setError('Por favor complete todos los datos.')
    return
  }
  if (consulta.name.length < 3) {
  setError("El nombre debe tener al menos 3 caracteres.")
  return
  }
  if (consulta.lastname.length < 2) {
  setError("El apellido debe tener al menos 2 caracteres.")
  return
  }

    try {
        setLoading(true)

        await addDoc(collection(db, "consultas"), {
            ...consulta,
            fecha: new Date()
        })        

        Swal.fire({
        icon: "success",
        title: "Consulta enviada",
        text: "Te responderemos a la brevedad",
        confirmButtonColor: "#774f38",
        background: "#ece5ce"
        })

        setConsulta({
        name:"",
        lastname:"",
        email:"",
        message:""
      })

    } catch(error){
      Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudo enviar la consulta"
})
}
    
    setLoading(false)
}

  return (
    <div className='m-5 text-center  min-vh-70'>
        <h2 className='mb-4' style={{color: "#774f38"}}>Contacto</h2>

        {error && <p style={{color: "red", fontWeight: "bold"}}>{error}</p>}

         <Form onSubmit={enviarConsulta}>
             <Form.Group className="mb-3">
                <Form.Control type="text" name="name" placeholder="Ingrese su nombre" value={consulta.name}
                onChange={consultaData}/>
                 </Form.Group>
            
             <Form.Group className="mb-3">
                 <Form.Control type="text" name="lastname" placeholder="Ingrese su apellido" value={consulta.lastname}
                 onChange={consultaData}/>
                 </Form.Group>

            <Form.Group className="mb-3">
                  <Form.Control type="email" name="email" placeholder="Ingrese su Email" value={consulta.email}
                  onChange={consultaData}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
                <h3 style={{color: "#774f38"}}>Consulta</h3>
                </Form.Label>
            <Form.Control as="textarea" rows={3} name="message" value={consulta.message}
            onChange={consultaData} />
            </Form.Group>

            <Button type="submit" className="btn d-block mx-auto" disabled={loading}
        >
          {loading ? "Enviando..." : "Consultar"}
            </Button>
    </Form>
    </div>
    
  )
}

export default Contacto