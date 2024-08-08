import React, { useEffect, useState } from 'react';

function ListadoEmpeados({ query }) {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        const storedEmpleados = JSON.parse(localStorage.getItem('empleados')) || [];
        setEmpleados(storedEmpleados);
    }, []);

    const filteredEmpleados = empleados.filter(emp => emp.teacher.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="mt-4">
            <h2>Employee List</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Hours</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmpleados.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.teacher}</td>
                            <td>{emp.subject}</td>
                            <td>{emp.hours}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListadoEmpeados;

