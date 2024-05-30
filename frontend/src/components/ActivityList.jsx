import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ActivityList = ({ activities, onEdit, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredActivities = activities.filter(activity =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Llistat d'activitats</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar per nom d'activitat"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-1/4"
                />
            </div>
            <ul className="space-y-4">
                {filteredActivities.map(activity => (
                    <li key={activity.activity_id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                        <div>
                            <p className="text-gray-700"><strong>Nom:</strong> {activity.name}</p>
                            <p className="text-gray-700"><strong>Descripció:</strong> {activity.description}</p>
                            <p className="text-gray-700"><strong>Edat:</strong> {activity.tarjet}</p>
                            <p className="text-gray-700"><strong>Capacitat:</strong> {activity.capacity}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => onEdit(activity)} 
                                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition duration-300"
                            >
                                Editar
                            </button>
                            <button 
                                onClick={() => onDelete(activity.activity_id)} 
                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition duration-300"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ActivityList.propTypes = {
    activities: PropTypes.arrayOf(PropTypes.shape({
        activity_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tarjet: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ActivityList;
