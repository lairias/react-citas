import React,{Fragment,useState} from 'react'

import {v4 as uuidv4} from 'uuid'

const Formulario = ({ crearCita }) => {
  //***********************State

  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [Error, setError] = useState(false);

  // *******************************Funciones

  //funcion que se ejecuta cada que el usuario escribe en un input
  const handleCita = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //cuando el ususrio presiona agregar en cita
  const subCita = (e) => {
    e.preventDefault();

    //validaciones
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);

      setTimeout(()=>{
       setError(false);

      },3000)

      return;
    }else{
      //Eliminar el mensaje previo
      setError(false);

      //asignar Un ID
      cita.id = uuidv4();

      //Crear la cita
      crearCita(cita);

      setCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });

      //Reiniciar el form
    }

   
  };

  return (
    <Fragment>
      <h2> Crear Cita</h2>

      {Error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : (
        ""
      )}

      <form onSubmit={subCita}>
        <label htmlFor=""> Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          id=""
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleCita}
          value={mascota}
        />
        <label htmlFor=""> Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          id=""
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={handleCita}
          value={propietario}
        />
        <label htmlFor=""> Fecha</label>
        <input
          type="date"
          name="fecha"
          id=""
          onChange={handleCita}
          value={fecha}
          className="u-full-width"
        />
        <label htmlFor=""> Hora</label>
        <input
          type="time"
          onChange={handleCita}
          name="hora"
          value={hora}
          id=""
          className="u-full-width"
        />
        <label htmlFor="">Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          id=""
          onChange={handleCita}
          value={sintomas}
          cols="40"
          rows="10"
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleCita}
        >
          Enviar{" "}
        </button>
      </form>
    </Fragment>
  );
};



export default Formulario;