import React, { useState, useEffect } from 'react';

export default function DashboardPage() {
    const [users, setUsers]: any = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const jwtToken = sessionStorage.getItem('token');

        if (jwtToken) {
            fetch('http://localhost:3000/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setUsers(data.data); // Assuming the user data is under the 'data' property
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // setError('Error fetching data');
                });
        }
    }, []); // Empty dependency array ensures this effect runs once, similar to componentDidMount

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {users.length > 0 && (
                <ul>
                    {users.map((user: any) => (
                        <li key={user.id}>{user.name}</li>
                        // Replace 'name' with the actual property you want to display
                    ))}
                </ul>
            )}
        </div>
    );
};



