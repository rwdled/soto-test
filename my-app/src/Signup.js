import React, { useState } from 'react';

function Signup() {
    const [form, setForm] = useState({
        studentId: '',
        name: '',
        email: '',
        parentEmail: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(form);
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto' }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Student ID:
                        <input
                            type="text"
                            name="studentId"
                            value={form.studentId}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Parent Email:
                        <input
                            type="email"
                            name="parentEmail"
                            value={form.parentEmail}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit" style={{ marginTop: '1rem' }}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;