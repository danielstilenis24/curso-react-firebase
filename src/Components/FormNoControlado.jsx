import React, { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current);

    // console.log(...datos.entries())

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos);

    const { todoDescripcion, TodoName } = objetoDatos;
    if (!todoDescripcion.trim() || !TodoName.trim()) {
      console.log("esta vaciooooooo");
      return;
    }
    console.log("Paso validaciones");
  };

  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese Todo'
          name='TodoName'
          className='form-control mb-2'
        />
        <textarea
          name='todoDescripcion'
          className='form-control mb-2'
          placeholder='Ingrese descripcion del todo'
        />
        <select name='todoEstado' className='form-control mb-2'>
          <option value='pendiente'>Pendiente</option>
          <option value='completada'>Completada</option>
        </select>
        <button className='btn btn-primary'>Agregar</button>
      </form>
    </>
  );
};

export default FormNoControlado;
