import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import { useAuth } from '../context/AuthContext';

Modal.setAppElement('#root');

const MiCalendario = () => {
    const authContext = useAuth();
    const { user } = authContext;
    const [events, setEvents] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        start: '',
        end: ''
    });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/events');
                const data = await response.json();
                setEvents(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([]);
            }
        };

        fetchEvents();
    }, []);

    const handleDateChange = (date) => {
        if (!user || !(user.role_name === 'admin' || user.role_name === 'professional')) {
            setIsPermissionModalOpen(true);
            return;
        }

        const start = new Date(date);
        const end = new Date(date);
        end.setHours(end.getHours() + 1);

        setFormData({
            ...formData,
            start: start.toISOString().slice(0, 16),
            end: end.toISOString().slice(0, 16)
        });
        setModalIsOpen(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user || !(user.role_name === 'admin' || user.role_name === 'professional')) {
            setIsPermissionModalOpen(true);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    ...formData,
                    start: new Date(formData.start).toISOString(),
                    end: new Date(formData.end).toISOString()
                })
            });
            const newEvent = await response.json();
            setEvents([...events, newEvent]);
            setModalIsOpen(false);
            setFormData({
                title: '',
                description: '',
                start: '',
                end: ''
            });
        } catch (error) {
            console.error('Error creant event:', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <Calendar onClickDay={handleDateChange} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Crear Event"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                <h2>Afegir Esdeveniment</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Títol"
                        className="p-2 border rounded w-full mb-4"
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descripció"
                        className="p-2 border rounded w-full mb-4"
                    />
                    <input
                        type="datetime-local"
                        name="start"
                        value={formData.start}
                        onChange={handleChange}
                        className="p-2 border rounded w-full mb-4"
                    />
                    <input
                        type="datetime-local"
                        name="end"
                        value={formData.end}
                        onChange={handleChange}
                        className="p-2 border rounded w-full mb-4"
                    />
                    <button type="submit" className="bg-gradient-to-r from-sea-pink-400 to-grandis-200 text-white p-2 rounded w-full">Crear Esdeveniment</button>
                </form>
            </Modal>
            {/* Modal de permisos */}
            <Modal
                isOpen={isPermissionModalOpen}
                onRequestClose={() => setIsPermissionModalOpen(false)}
                contentLabel="Permis Denegat"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }
                }}
            >
                <h2>
                    No tens permís per a realitzar aquesta acció.</h2>
                <button onClick={() => setIsPermissionModalOpen(false)}>Tancar</button>
            </Modal>
            <ul className='mt-6 flex flex-col gap-8 items-center justify-center mb-10'>
                {events.map((event, index) => (
                    <li key={event.id || index} className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-lg mb-2">{event.description}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Inici:</span> {new Date(event.start).toLocaleString()}</p>
                        <p className="text-lg"><span className="font-semibold">Fin:</span> {new Date(event.end).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MiCalendario;
