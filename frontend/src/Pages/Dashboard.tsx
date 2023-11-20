import React, { useState, useEffect } from 'react';

export default function DashboardPage() {
    const [users, setUsers] = useState([]);
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
                    setUsers(data.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            window.location.href = '/';
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/';
    };

    const handleDeleteUser = (userId: any) => {
        const jwtToken = sessionStorage.getItem('token');

        fetch(`http://localhost:3000/api/user/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    setUsers((prevUsers) => prevUsers.filter((user: any) => user.id !== userId));
                } else {
                    throw new Error('Failed to delete user');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                {error && <p className="text-red-500">Error: {error}</p>}
                {users.length > 0 && (
                    <div className="flex flex-wrap justify-center">
                        {users.map((user: any) => (
                            <div key={user.id} className="border border-gray-300 p-4 m-4 rounded-md max-w-xs">
                                <h3 className="text-xl font-bold mb-2">{user.name}</h3>
                                <p className="text-gray-600 mb-2">{user.age}</p>
                                <p className="text-gray-600 mb-4">{user.email}</p>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
