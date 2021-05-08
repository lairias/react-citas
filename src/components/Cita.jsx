import React from 'react'
import PropTypes from "prop-types";


const Citas = ({cita,eliminarCita})=>(
  <div className = 'cita'>
    <p>Mascota:<span>{cita.mascota}</span></p>
    <p>propietario:<span>{cita.propietario}</span></p>
    <p>hora:<span>{cita.hora}</span></p>
    <p>fecha:<span>{cita.fecha}</span></p>
    <p>sintomas:<span>{cita.sintomas}</span></p>
    <button className="button eliminar 
    u-full-width"
    onClick = {()=>eliminarCita(cita.id) }
    
    > Eliminar &times;</button>
  </div>
)

export default Citas;

Citas.protoType ={
  cita:PropTypes.func,
  eliminarCita:PropTypes.func

}