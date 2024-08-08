import React, { useState } from 'react';

function AgregarEmpleados() {
    const [empleado, setEmpleado] = useState({
        id: '',
        teacher: '',
        subject: '',
        hours: '',
        salary: ''
    });

    const { teacher, subject, hours, salary } = empleado;

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newEmployee = { ...empleado, id: Date.now() };

        const storedEmpleados = JSON.parse(localStorage.getItem('empleados')) || [];
        storedEmpleados.push(newEmployee);
        localStorage.setItem('empleados', JSON.stringify(storedEmpleados));

        setEmpleado({
            id: '',
            teacher: '',
            subject: '',
            hours: '',
            salary: ''
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registration Form</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="teacher"
                        placeholder="Enter first name"
                        required
                        value={teacher}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hours"
                        name="hours"
                        placeholder="Enter hours"
                        required
                        value={hours}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        required
                        value={subject}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        id="salary"
                        name="salary"
                        placeholder="Enter salary"
                        required
                        value={salary}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AgregarEmpleados;
