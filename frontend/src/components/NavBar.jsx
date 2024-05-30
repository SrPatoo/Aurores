import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
 
const NavBar = () => {
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
 
    return (
        <nav className="bg-gradient-to-r from-sea-pink-400 to-grandis-200 p-6 flex justify-between items-center">
 
            <div className="flex items-center">
                <Link to="/">
                    <img className="w-[10vh]" src="src/assets/newlogoo.png"></img>
                </Link>
 
                <div className='flex justify-center items-center ml-32 text-[20px] gap-14 z-50'>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-black  focus:outline-none"
                        >
                            El nostre espai
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 inline-block ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.709a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Link to="/qui-som" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Qui som</Link>
                                    <Link to="/on-estem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">On estem</Link>
                                    <Link to="/monitors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Monitors</Link>
                                    <Link to="/aco&proj" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Acompanyament i Projectes</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/activities" className="mr-4">Activitats</Link>
                    <Link to="/calendar" className="mr-4">Calendari</Link>
                    <Link to="/prices" className="mr-4">Preus</Link>
                </div>
 
            </div>

            <div className="flex justify-center items-center ml-32 text-[20px] gap-14 z-50">
                <div>
                    {!user && <Link to="/register" className="mr-4">Registra't</Link>}
                    {!user && <Link to="/login" className="mr-4">Iniciar sessió</Link>}
                    {user && user.role_name === 'admin' && <Link to="/dashboard/user-management" className="mr-4">Gestió d'usuaris</Link>}
                    {user && (user.role_name === 'admin' || user.role_name === 'professional') && <Link to="/dashboard/activity-management" className="mr-4">Gestió d'activitats</Link>}
                    
                    {user && <span className="mr-4">Benvingut, {user.username}</span>} {/* Mostrar el username si user existe */}
                    {user && <button onClick={logout} className="bg-gray-800 text-white p-2 rounded">Tancar sessió</button>}
                    
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;
