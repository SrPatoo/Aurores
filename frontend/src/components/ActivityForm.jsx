import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActivityForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        tarjet: '',
        capacity: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                description: initialData.description || '',
                tarjet: initialData.tarjet || '',
                capacity: initialData.capacity || ''
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
            name: '',
            description: '',
            tarjet: '',
            capacity: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom"
                className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripció"
                className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <input
                type="text"
                name="tarjet"
                value={formData.tarjet}
                onChange={handleChange}
                placeholder="Edat"
                className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Capacitat"
                className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <input
                type="text"
                name="images"
                value={formData.images}
                onChange={handleChange}
                placeholder="Imatge"
                className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <button type="submit" className="w-full bg-gradient-to-r from-sea-pink-400 to-grandis-200 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Crear
            </button>
        </form>
    );
};

ActivityForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        tarjet: PropTypes.string,
        capacity: PropTypes.string
    })
};

export default ActivityForm;
