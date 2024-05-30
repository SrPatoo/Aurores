import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role_id: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                username: initialData.username || '',
                email: initialData.email || '',
                password: '',
                role_id: initialData.role_id || ''
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Limpiar el formulario después de enviar
        setFormData({
            username: '',
            email: '',
            password: '',
            role_id: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nom d'usuari"
                className="w-full px-4 py-2 mb-4 border rounded-full focus:outline-none focus:border-blue-500"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correu electrònic"
                className="w-full px-4 py-2 mb-4 border rounded-full focus:outline-none focus:border-blue-500"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contrasenya"
                className="w-full px-4 py-2 mb-4 border rounded-full focus:outline-none focus:border-blue-500"
            />
            <input
                type="text"
                name="role_id"
                value={formData.role_id}
                onChange={handleChange}
                placeholder="ID de Rol (1=admin, 2=user, 3=teacher)"
                className="w-full px-4 py-2 mb-4 border rounded-full focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="w-full bg-gradient-to-r from-sea-pink-400 to-grandis-200 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Crear
            </button>
        </form>
    );
};

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.object,
};

export default UserForm;
