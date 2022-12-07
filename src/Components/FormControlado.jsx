import React, { useState } from "react";

const FormControlado = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,


  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

const handleChange = e => {
const {name, value, checked, type} = e.target

    setTodo({
        ...todo,
        [name]: type === "checkbox" ? checked : value,
    });
};

  return (
    <div>
      <h2>formulario controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese Todo'
          name='todoName'
          className='form-control mb-2'
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name='todoDescripcion'
          className='form-control mb-2'
          placeholder='Ingrese descripcion del todo'
          onChange={handleChange}
          value={todo.todoDescripcion}

        />
        <select
          name='todoEstado'
          className='form-control mb-2'
          onChange={handleChange}
          value={todo.todoEstado}
          
          >

          <option value='pendiente'>Pendiente</option>
          <option value='completada'>Completada</option>
        </select>

        <div className="form-check form-switch">
            <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault"
            name="todoCheck" 
            checked={todo.todoCheck}
            onChange={handleChange}
            />

            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dar prioridad</label>
        </div>

        <button className='btn btn-primary' type='submit'>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormControlado;
