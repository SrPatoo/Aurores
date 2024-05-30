import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
 
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();
    const navigate = useNavigate();
 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                login(data.user, data.token);
                navigate('/');
            } else {
                console.error('Error al iniciar sesión:', data);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
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
                            <h1 className='ml-20 text-[40px] font-bold mt-10'>Inici de Sessió</h1>
                            <h2 className='ml-20 text-[20px]'>Benvingut de nou!</h2>
                        </div>
 
                        <div className='flex justify-center'>
                            <form className='flex flex-col mb-10 mt-10' onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Correu "
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
 
                                <div className='flex flex-col gap-4'>
                                    <button className=' bg-gradient-to-r from-sea-pink-400 to-grandis-200 rounded-full text-white p-4 w-[400px]' type="submit">Iniciar</button>
                                    <button className='bg-gray-800 rounded-full text-white p-4 w-[400px]' type="submit">Registra't</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    );
};
 
export default Login;
 