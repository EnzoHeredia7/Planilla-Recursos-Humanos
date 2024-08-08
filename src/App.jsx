import { useState } from "react";
import ListadoEmpeados from "./Empleados/ListadoEmpeados";
import NavBar from "./plantilla/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgregarEmpleados from "./Empleados/AgregarEmpleados";

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar query={query} setQuery={setQuery} />
        <Routes>
          <Route exact path='/' element={<ListadoEmpeados query={query} />} />
          <Route exact path='/agregar' element={<AgregarEmpleados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
