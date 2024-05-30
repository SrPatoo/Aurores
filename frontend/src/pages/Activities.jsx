// src/pages/Activities.jsx
import { useEffect, useState } from 'react';
import { fetchActivities } from '../services/activityService';
 
const Activities = () => {
    const [activities, setActivities] = useState([]);
 
    useEffect(() => {
        const loadActivities = async () => {
            try {
                const fetchedActivities = await fetchActivities();
                setActivities(fetchedActivities);
            } catch (error) {
                console.error('Error loading activities:', error);
            }
        };
 
        loadActivities();
    }, []);
 
    //console.log(activities);
 
    return (
        <div className="container mx-auto bg-maize-100 py-10">
            <h1 className="text-3xl font-bold">Activitats</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 shadow-lg">
                {activities.map(activity => (
                    <div key={activity.activity_id} className="bg-white p-4 rounded shadow flex">
                        {activity.images && (
                            <img
                                src={activity.images}
                                alt={activity.name}
                                className="w-1/3 h-auto rounded-lg object-cover shadow-lg"
                            />
                        )}
                        <div className="w-2/3 ml-4 flex flex-col justify-center">
                            <h2 className="text-xl font-semibold mb-2">{activity.name}</h2>
                            <p className="mb-2">{activity.description}</p>
                            <p>Edat: {activity.tarjet}</p>
                            <p>Capacitat: {activity.capacity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
};
 
export default Activities;