import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Table } from 'react-bootstrap';

const AllSurprises = () => {
    const { getSurprises } = useAuth();
    const [surprises, setSurprises] = useState([]);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


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

    console.log("surprises", surprises)
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: '#13c2c2', margin: "2rem" }}>Your All Surprises</h1>
            </div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Receiver</th>
                        <th>Email</th>
                        <th>Theme</th>
                        <th>Relative</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {surprises.map(surprise => (
                        <tr key={surprise._id}>
                            <td>{surprise.name}</td>
                            <td>{surprise.email}</td>
                            <td>{surprise.theme}</td>
                            <td>{surprise.relative}</td>
                            <td>{surprise.message}</td>
                            <td>{new Date(surprise.updatedAt).toLocaleDateString(undefined, options)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AllSurprises;

