import React,{Fragment,useState,useEffect } from "react"
import Formulario from './components/Formulario'
import Cita from './components/Cita'
import PropTypes from 'prop-types'
function App() {

//LocalStorage

let citasIniciales = JSON.parse(localStorage.getItem("citas"));

if(!citasIniciales){
  citasIniciales= [];
}



//**********************UseState

//Citas
const [Citas, setCitas]= useState(citasIniciales);


//*****************************Funciones */
//Funcion que tome las citas actuales y agregar una nueva

useEffect(() => {
  if (citasIniciales) {
    localStorage.setItem("citas", JSON.stringify(Citas));
  } else {
    localStorage.setItem("citas", JSON.stringify([]));
  }
}, [Citas, citasIniciales]);



const crearCita = cita=>{

  setCitas([
    ...Citas,
    cita
  ])
}



//funcion de eleiminar cita

const eliminarCita= id =>{

  const nuevasCitas = Citas.filter(cita =>cita.id !== id);
  setCitas(nuevasCitas);
}


const Titulo = Citas.length === 0 ? 'Agrega tus citas': 'Administra tus citas'



  return (
    <Fragment>
      <h1>Aministrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column"> 
          <Formulario
          
          crearCita={crearCita}
          />
          </div>
          <h2>{Titulo}</h2>
          {Citas? <div className="one-half column"> 
          {Citas.map(cita=>(
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          ))}
          </div>:<h1>Agrega tus citas</h1>}
        </div>
      </div>
    </Fragment>
  );
}









Formulario.propTypes = {
  crearCita: PropTypes.func
};






export default App;
