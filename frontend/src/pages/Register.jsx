import { useState } from 'react';
import { Link } from 'react-router-dom';
 
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Usuario registrado:', data);
                window.location.href = '/login';
            } else {
                console.error('Error al registrar usuario:', data);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };
 
    return (
        <div className='bg-maize-100 min-h-screen flex flex-col'>
            <div className='flex flex-grow '>
 
 
                <div className='flex flex-col text-white bg-gradient-to-b from-sea-pink-400 to-grandis-200 w-1/2 justify-center items-start'>
                    <h1 className='ml-20 text-[40px] font-bold'>AURORES</h1>
                    <h2 className='ml-20 text-[20px]'>El lloc on sanar l'anima</h2>
                </div>
                <div className='w-1/2 flex justify-center flex-col'>
                    <div>
                        <h1 className='ml-20 text-[40px] font-bold mt-10'>Benvingut</h1>
                        <h2 className='ml-20 text-[20px]'>Enregistra't i inicia</h2>
                    </div>
 
                    <div className="flex justify-center">
                        <form onSubmit={handleSubmit} className="flex flex-col mb-10 mt-10">
 
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Nom d'usuari"
                                className="mb-6 mt-2 rounded-full p-4 w-[400px]"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Correu"
                                className="mb-6 mt-2 rounded-full p-4 w-[400px]"
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Contrasenya"
                                className="mb-6 mt-2 rounded-full p-4 w-[400px]"
                            />
                            <button type="submit" className="bg-gradient-to-r from-sea-pink-400 to-grandis-200 rounded-full text-white p-4 w-[400px]">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Register;
 