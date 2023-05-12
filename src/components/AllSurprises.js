import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AllSurprises = () => {
    const { getSurprises } = useAuth();
    const [surprises, setSurprises] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const surprisesData = await getSurprises();
                setSurprises(surprisesData);
            } catch (error) {
                console.error("Error getting surprises:", error);
            }
        })();
    }, [getSurprises]);

    return (
        <div>
            <h1>Your Surprises</h1>
            {surprises.map(surprise => (
                <div key={surprise._id}>
                    <h2>{surprise.name}</h2>
                    <p>{surprise.theme}</p>
                    {/* Add more fields as needed... */}
                </div>
            ))}
        </div>
    );
};

export default AllSurprises;