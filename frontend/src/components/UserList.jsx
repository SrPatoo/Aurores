import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, onEdit, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Llistat d'usuaris</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar per nom d'usuari"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-1/4"
                />
            </div>
            <ul className="space-y-4">
                {filteredUsers.map(user => (
                    <li key={user.user_id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                        <div>
                            <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
                            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
                            <p className="text-gray-700"><strong>Role:</strong> {user.Role ? user.Role.role_name : 'N/A'}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => onEdit(user)} 
                                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition duration-300"
                            >
                                Editar
                            </button>
                            <button 
                                onClick={() => onDelete(user.user_id)} 
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

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        user_id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        Role: PropTypes.shape({
            role_name: PropTypes.string
        })
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UserList;
